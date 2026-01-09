"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2, Settings, Volume2, VolumeX, FastForward, Play, Pause } from "lucide-react";

interface GumletVideoProps {
    videoId: string;
    title?: string;
    className?: string;
}

export default function GumletVideo({ videoId, title = "Video", className = "" }: GumletVideoProps) {
    const [isHovered, setIsHovered] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const [player, setPlayer] = useState<any>(null);
    const [currentSpeed, setCurrentSpeed] = useState(1);

    // Extract ID if a full URL is passed
    const cleanId = videoId.split("/").pop()?.split("?")[0] || videoId;
    const embedUrl = `https://play.gumlet.io/embed/${cleanId}`;
    const [isMuted, setIsMuted] = useState(true);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (!iframeRef.current) return;

        // Dynamically import player.js to avoid SSR issues
        import('player.js').then((playerjs) => {
            try {
                const newPlayer = new playerjs.Player(iframeRef.current);
                setPlayer(newPlayer);

                newPlayer.on('ready', () => {
                    // Attempt to disable captions if method exists (legacy/specific implementations)
                    if (newPlayer.disableTextTrack) {
                        newPlayer.disableTextTrack();
                    }
                    if (newPlayer.setCaption) newPlayer.setCaption(null); // Try setting caption to null
                    // Set default volume/mute if needed
                    newPlayer.setLoop(true);
                    newPlayer.setMuted(true);

                    newPlayer.getDuration().then((d: number) => setDuration(d));
                    newPlayer.getMuted().then((muted: boolean) => {
                        setIsMuted(muted);
                    });
                    newPlayer.getPaused().then((paused: boolean) => setIsPlaying(!paused));
                });

                newPlayer.on('play', () => setIsPlaying(true));
                newPlayer.on('pause', () => setIsPlaying(false));

                newPlayer.on('volumechange', () => {
                    newPlayer.getMuted().then((muted: boolean) => setIsMuted(muted));
                });

                newPlayer.on('timeupdate', (data: { seconds: number, duration: number }) => {
                    setCurrentTime(data.seconds);
                    if (data.duration) setDuration(data.duration);
                });

            } catch (e) {
                console.error("Player init error", e);
            }
        });

        return () => {
            // Cleanup if necessary
        };
    }, [embedUrl]);

    const handleSpeedChange = (speed: number) => {
        if (!player) return;
        try {
            // Try common playback rate methods
            if (player.setPlaybackRate) {
                player.setPlaybackRate(speed);
            } else if (player.setSpeed) {
                player.setSpeed(speed);
            } else {
                // Fallback: PostMessage manually if player.js wrapping limits us
                iframeRef.current?.contentWindow?.postMessage({
                    method: 'setPlaybackRate',
                    value: speed
                }, '*');
            }
            setCurrentSpeed(speed);
        } catch (e) {
            console.error("Speed change failed", e);
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent toggling play
        if (!player) return;
        try {
            const newMutedState = !isMuted;
            player.setMuted(newMutedState);
            if (!newMutedState) player.setVolume(1);
            setIsMuted(newMutedState);
        } catch (e) {
            console.error("Mute toggle failed", e);
        }
    };

    const togglePlay = () => {
        if (!player) return;
        if (isPlaying) {
            player.pause();
        } else {
            player.play();
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        setCurrentTime(time);
        if (player) player.setCurrentTime(time);
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    // Show controls if hovered or if video is paused (so user can see play button / controls)
    const showControls = isHovered || !isPlaying;

    return (
        <div
            className={`relative w-full h-full overflow-hidden group rounded-2xl cursor-pointer ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={togglePlay}
        >
            {/*
        Video Wrapper with Scale Hack
        Scale 1.35 removes the black borders (pillarbox/letterbox) effectively zooming in.
      */}
            <div className="w-full h-full transform scale-[1.35] origin-center transition-transform duration-700">
                <iframe
                    ref={iframeRef}
                    src={`${embedUrl}?autoplay=0&loop=1&muted=1&disable_player_controls=1`}
                    className="w-full h-full object-cover"
                    allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    title={title}
                    style={{ border: "none", pointerEvents: "none" }} // Disable pointer events on iframe to capture clicks on parent
                />
            </div>

            {/* Big Play Button */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-all duration-300">
                    <div className="w-20 h-20 bg-[#82ff1f] rounded-full flex items-center justify-center shadow-lg shadow-[#82ff1f]/20 transform scale-100 hover:scale-110 transition-transform">
                        <Play size={40} className="text-black fill-black ml-2" />
                    </div>
                </div>
            )}

            {/* Top Right Controls: Volume & Speed */}
            <div
                className={`absolute top-4 right-4 flex items-center gap-3 p-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={toggleMute}
                    className="text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
                    title={isMuted ? "Unmute" : "Mute"}
                >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>

                <div className="w-px h-4 bg-white/20"></div>

                {[1, 1.5, 2].map((speed) => (
                    <button
                        key={speed}
                        onClick={(e) => { e.stopPropagation(); handleSpeedChange(speed); }}
                        className={`text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${currentSpeed === speed ? "bg-[#82ff1f] text-black" : "text-white/70 hover:text-white hover:bg-white/10"}`}
                    >
                        {speed}x
                    </button>
                ))}
            </div>

            {/* Bottom Controls: Progress Bar */}
            <div
                className={`absolute bottom-6 left-6 right-6 flex items-center gap-3 transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <span className="text-xs font-bold text-white w-10 text-right">{formatTime(currentTime)}</span>
                <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleSeek}
                    className="flex-1 h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:bg-[#82ff1f] [&::-webkit-slider-thumb]:rounded-full hover:[&::-webkit-slider-thumb]:scale-125 transition-all"
                />
                <span className="text-xs font-bold text-white w-10">{formatTime(duration)}</span>
            </div>
        </div>
    );
}
