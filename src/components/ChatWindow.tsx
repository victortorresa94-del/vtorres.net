'use client';

import { useChat } from 'ai/react';
import { useRef, useEffect, useState, useCallback } from 'react';
import { Send, Paperclip, Mic, Loader2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

// Type definition for Web Speech API
interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

export default function ChatWindow() {
    const [isListening, setIsListening] = useState(false);
    const [pastedImage, setPastedImage] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const recognitionRef = useRef<any>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Persistence Key
    const STORAGE_KEY = 'victor-ai-history';

    const { messages, input, setInput, handleInputChange, handleSubmit, isLoading, error, setMessages, append } = useChat({
        api: '/api/chat',
        initialMessages: [
            {
                id: 'welcome',
                role: 'assistant',
                content: "Hola soy la IA de Victor entrenada para conseguirle trabajo. 🚀\n\nPuedes preguntarme cualquier cosa sobre sus habilidades y experiencias.\n\nO si lo prefieres, pega una imagen o adjunta un PDF de una oferta de trabajo y te pasaré un análisis sobre si Victor encaja."
            }
        ],
        onError: (err) => {
            console.error("Chat Error:", err);
        }
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Load history on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (parsed && parsed.length > 0) {
                        setMessages(parsed);
                    }
                } catch (e) {
                    console.error("Failed to load chat history", e);
                }
            }
        }
    }, [setMessages]);

    // Save history on change
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
        }
        scrollToBottom();
    }, [messages]);

    // --- Simple Speech-to-Text (Mic Button) ---
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const { webkitSpeechRecognition } = window as unknown as IWindow;
            if (webkitSpeechRecognition) {
                const recognition = new webkitSpeechRecognition();
                recognition.continuous = true; // Keep listening until manually stopped
                recognition.interimResults = true; // Show live transcription
                recognition.lang = 'es-ES';

                recognition.onresult = (event: any) => {
                    let finalTranscript = '';
                    let interimTranscript = '';

                    for (let i = event.resultIndex; i < event.results.length; i++) {
                        const transcript = event.results[i][0].transcript;
                        if (event.results[i].isFinal) {
                            finalTranscript += transcript;
                        } else {
                            interimTranscript += transcript;
                        }
                    }

                    if (finalTranscript) {
                        setInput((prev) => prev ? prev + ' ' + finalTranscript : finalTranscript);
                    }
                };

                recognition.onerror = (event: any) => {
                    console.error("Speech error", event.error);
                    // Don't stop on 'no-speech' errors, only on real errors
                    if (event.error !== 'no-speech') {
                        setIsListening(false);
                    }
                };

                recognition.onend = () => {
                    // If still supposed to be listening, restart (browser may auto-stop)
                    if (recognitionRef.current?.shouldContinue) {
                        try {
                            recognition.start();
                        } catch (e) {
                            setIsListening(false);
                        }
                    } else {
                        setIsListening(false);
                    }
                };

                recognitionRef.current = recognition;
                recognitionRef.current.shouldContinue = false;
            }
        }
    }, [setInput]);

    const toggleMic = () => {
        if (isListening) {
            if (recognitionRef.current) {
                recognitionRef.current.shouldContinue = false;
                recognitionRef.current.stop();
            }
            setIsListening(false);
        } else {
            try {
                if (recognitionRef.current) {
                    recognitionRef.current.shouldContinue = true;
                    recognitionRef.current.start();
                }
                setIsListening(true);
            } catch (e) {
                console.error("Mic start error", e);
            }
        }
    };


    // --- Vision Logic (Paste) ---
    const handlePaste = useCallback(async (e: React.ClipboardEvent) => {
        const items = e.clipboardData.items;
        for (const item of items) {
            if (item.type.indexOf('image') !== -1) {
                e.preventDefault();
                const file = item.getAsFile();
                if (file) {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadend = async () => {
                        const base64 = reader.result as string;
                        setPastedImage(base64);

                        try {
                            const res = await fetch('/api/describe', {
                                method: 'POST',
                                body: JSON.stringify({ image: base64, prompt: "Analiza esta imagen." }),
                            });
                            const data = await res.json();
                            if (data.description) {
                                const contextMsg = `[IMAGEN (Contexto): ${data.description}]`;
                                setInput((prev) => prev ? prev + "\n" + contextMsg : contextMsg);
                            }
                        } catch (err) {
                            console.error("Analysis failed", err);
                        }
                    };
                }
            }
        }
    }, [setInput]);

    // --- File Handling (Image & PDF) ---
    const handleFile = async (file: File) => {
        if (!file) return;

        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = async () => {
                const base64 = reader.result as string;
                setPastedImage(base64);

                try {
                    const res = await fetch('/api/describe', {
                        method: 'POST',
                        body: JSON.stringify({ image: base64, prompt: "Analiza esta imagen." }),
                    });
                    const data = await res.json();
                    if (data.description) {
                        const contextMsg = `[IMAGEN (Contexto): ${data.description}]`;
                        setInput((prev) => prev ? prev + "\n" + contextMsg : contextMsg);
                    }
                } catch (err) {
                    console.error("Analysis failed", err);
                }
            };
        } else if (file.type === 'application/pdf') {
            setPastedImage('pdf');

            const formData = new FormData();
            formData.append('file', file);

            try {
                setInput((prev) => prev + "\n[Leyendo PDF...]");
                const res = await fetch('/api/pdf', {
                    method: 'POST',
                    body: formData,
                });
                const data = await res.json();

                setInput((prev) => prev.replace("\n[Leyendo PDF...]", ""));

                if (data.text) {
                    const truncatedText = data.text.substring(0, 10000);
                    const contextMsg = `[CONTENIDO PDF: ${truncatedText}]`;
                    setInput((prev) => prev ? prev + "\n" + contextMsg : contextMsg);
                }
            } catch (err) {
                console.error("PDF Parse failed", err);
                setInput((prev) => prev.replace("\n[Leyendo PDF...]", "\n[Error leyendo PDF]"));
            }
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    // Handle Form Submit
    const onFormSubmit = async (e: any) => {
        e.preventDefault();
        if (!input.trim() && !pastedImage) return;

        if (pastedImage) {
            let userContent = input;
            if (pastedImage.startsWith('data:image')) {
                userContent = `![Imagen Adjunta](${pastedImage})\n\n${userContent}`;
            } else {
                userContent = `**📎 Archivo PDF Adjunto**\n\n${userContent}`;
            }

            setPastedImage(null);
            setInput('');

            await append({
                role: 'user',
                content: userContent
            });
        } else {
            handleSubmit(e);
        }
    };

    // --- RENDER ---
    return (
        <div
            className={`flex h-[600px] flex-col overflow-hidden text-sm bg-black/95 transition-colors ${isDragging ? 'ring-2 ring-[#82ff1f]' : ''}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
        >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#82ff1f]/30 shadow-lg shadow-[#82ff1f]/10">
                        <Image
                            src="/images/profile.jpg"
                            alt="Victor AI"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="font-heading font-bold text-white">Victor AI</h3>
                        <div className="flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#82ff1f] opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#82ff1f]"></span>
                            </span>
                            <p className="text-xs text-[#82ff1f]">Online</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Drag Overlay */}
            {isDragging && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                    <div className="rounded-xl border-2 border-dashed border-[#82ff1f] p-8 text-center text-[#82ff1f]">
                        <Paperclip className="mx-auto mb-2 h-10 w-10" />
                        <p className="font-bold">Suelta tu archivo aquí</p>
                        <p className="text-sm opacity-70">PDF o Imágenes</p>
                    </div>
                </div>
            )}

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
                <div className="space-y-4">
                    {messages.map((m) => (
                        <motion.div
                            key={m.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex w-full ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${m.role === 'user'
                                    ? 'bg-[#82ff1f] text-black font-medium'
                                    : 'bg-white/10 text-white backdrop-blur-md'
                                    }`}
                            >
                                <div className={`prose prose-sm max-w-none leading-relaxed ${m.role === 'user'
                                    ? 'prose-p:text-black prose-headings:text-black prose-strong:text-black'
                                    : 'prose-invert prose-p:text-gray-100'
                                    }`}>
                                    <ReactMarkdown>{m.content || '...'}</ReactMarkdown>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-white/50">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                <span className="text-xs">Pensando...</span>
                            </div>
                        </div>
                    )}

                    {error && (
                        <div className="flex justify-center p-2">
                            <p className="text-xs text-red-400">Error: {error.message}</p>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-white/10 bg-white/5 p-4 backdrop-blur-md">
                {/* Attachment Preview */}
                <AnimatePresence>
                    {pastedImage && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mb-2 flex items-center gap-3 rounded-lg border border-[#82ff1f]/30 bg-[#82ff1f]/5 p-2"
                        >
                            <div className="relative h-12 w-12 overflow-hidden rounded-md border border-white/20">
                                {pastedImage.startsWith('data:') ? (
                                    <Image src={pastedImage} alt="Preview" fill className="object-cover" />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center bg-[#82ff1f]/20 text-[#82ff1f]">
                                        <Paperclip className="h-5 w-5" />
                                    </div>
                                )}
                            </div>
                            <div className="flex-1">
                                <p className="text-xs font-semibold text-[#82ff1f]">Archivo adjunto</p>
                            </div>
                            <button
                                onClick={() => setPastedImage(null)}
                                className="rounded-full bg-white/10 p-1.5 hover:bg-white/20 hover:text-red-400"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                <form onSubmit={onFormSubmit} className="relative flex items-end gap-2">
                    {/* Paperclip Button */}
                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="mb-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/50 hover:bg-white/10 hover:text-[#82ff1f] transition-colors"
                        title="Adjuntar archivo"
                    >
                        <Paperclip className="h-5 w-5" />
                    </button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*,.pdf"
                        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                    />

                    {/* Text Input */}
                    <input
                        className={`flex-1 rounded-xl border bg-black/40 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none transition-all ${isListening
                            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/50'
                            : 'border-white/10 focus:border-[#82ff1f]/50 focus:ring-1 focus:ring-[#82ff1f]/50'
                            }`}
                        value={input}
                        onChange={handleInputChange}
                        onPaste={handlePaste}
                        placeholder={isListening ? "🎙️ Escuchando... habla ahora" : "Pregunta o adjunta archivo..."}
                        disabled={isLoading}
                    />

                    {/* Mic Button */}
                    <button
                        type="button"
                        onClick={toggleMic}
                        className={`mb-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${isListening
                            ? 'bg-red-500 text-white animate-pulse'
                            : 'text-white/50 hover:bg-white/10 hover:text-[#82ff1f]'
                            }`}
                        title={isListening ? "Detener grabación" : "Dictar mensaje"}
                    >
                        <Mic className="h-5 w-5" />
                    </button>

                    {/* Send Button */}
                    <button
                        type="submit"
                        disabled={isLoading || (!input.trim() && !pastedImage)}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#82ff1f] text-black shadow-lg shadow-[#82ff1f]/20 transition-all hover:bg-[#72e61b] hover:scale-105 disabled:opacity-50 disabled:hover:bg-[#82ff1f] disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        <Send className="h-5 w-5" />
                    </button>
                </form>

                {/* Listening Indicator */}
                <AnimatePresence>
                    {isListening && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="mt-2 flex items-center justify-center gap-2 text-xs text-red-400"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                            </span>
                            <span className="font-medium">Grabando... Haz click en 🎤 para detener</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
