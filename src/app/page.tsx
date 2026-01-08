"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, Globe, Code, Menu, X, Download, TrendingUp, Target, Lightbulb, Zap, Workflow, ChevronDown, Briefcase, Terminal, MessageSquare, Database, Mic, ClipboardList, Brain, Video, Music, ShoppingBag, Users, Palette, Megaphone, Award, ShieldCheck, Search, GraduationCap, Cpu, User, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AchievementsCarousel from "@/components/AchievementsCarousel";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();


  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const achievements = t.achievements.items as any;

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#82ff1f] selection:text-black relative font-sans">
      <div className="screen-only">

        {/* ... (Header remains mostly same, skipping to save tokens in context if possible, but for replace tool I need safe anchors. I will include header just in case) */}

        {/* Background Texture - Minimal & Dark */}
        <div className="fixed inset-0 z-0 print:hidden">
          <div className="absolute inset-0 bg-[#050505]"></div>
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-30 brightness-100 mix-blend-overlay"></div>
          {/* Subtle Green Glow */}
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#82ff1f]/5 rounded-full blur-[150px]"></div>
        </div>


        <header className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-white/5 bg-[#050505]/80">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="font-heading font-bold text-xl tracking-wide text-white hover:text-[#82ff1f] transition-colors flex items-center gap-2 z-50 relative">
              <div className="w-2 h-2 bg-[#82ff1f] rounded-full animate-pulse"></div>
              <span className="font-heading text-2xl font-bold tracking-tighter text-white">vtrx.ai</span>
            </Link>

            {/* New Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/procesos" className="text-zinc-400 hover:text-[#82ff1f] font-medium transition-colors">
                Consultoria de procesos
              </Link>
              <Link href="/ai" className="text-zinc-400 hover:text-[#82ff1f] font-medium transition-colors">
                Adopcion IA
              </Link>
              <LanguageSwitcher />
              <Link href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-[#82ff1f] to-[#6ed617] rounded-full text-sm font-bold text-black hover:shadow-[0_0_20px_rgba(130,255,31,0.4)] transition-all transform hover:scale-105">
                {t.hero.contact}
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white z-50 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 bg-[#050505] z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
              >
                <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</MobileNavLink>

                <div className="pt-8 flex flex-col items-center gap-6 w-full px-12">
                  <button
                    onClick={() => { window.print(); setMobileMenuOpen(false); }}
                    className="flex items-center gap-2 text-zinc-400 hover:text-white"
                  >
                    <Download size={16} /> {t.nav.download}
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full bg-gradient-to-r from-[#82ff1f] to-[#6ed617] text-black py-4 rounded-xl text-center font-bold text-lg"
                  >
                    {t.nav.contact}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <div className="relative z-10">

          {/* --- HERO SECTION --- */}
          <section className="pt-32 pb-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 text-center md:text-left order-2 md:order-1"
              >

                {/* Open to work badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82ff1f]/10 border border-[#82ff1f]/20 w-fit mx-auto md:mx-0">
                  <div className="w-2 h-2 rounded-full bg-[#82ff1f] animate-pulse"></div>
                  <span className="text-[#82ff1f] text-xs font-bold tracking-wider uppercase">{t.hero.openToWork}</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-7xl font-heading font-light tracking-tighter text-white leading-[0.9]">
                  Víctor<br />Torres Arana<span className="text-[#82ff1f]">.</span>
                </h1>

                <h2 className="text-2xl md:text-3xl text-zinc-400 font-light">
                  Project Manager / AI Builder & <span className="text-white font-bold border-b-4 border-[#82ff1f]">Business Accelerator</span>
                </h2>

                <p className="text-lg text-zinc-500 max-w-xl mx-auto md:mx-0 leading-relaxed">
                  {t.hero.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
                  <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-[#82ff1f] text-black font-bold rounded-full hover:bg-[#6ed617] transition-all flex items-center justify-center gap-2">
                    <Mail size={20} />
                    {t.hero.contact}
                  </a>
                  <a href="https://www.linkedin.com/in/víctor-torres-arana-54618b99/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-2">
                    <Linkedin size={20} />
                    {t.hero.linkedin}
                  </a>
                  <button onClick={() => window.print()} className="w-full sm:w-auto px-8 py-4 bg-transparent text-zinc-400 font-bold rounded-full hover:text-white transition-all flex items-center justify-center gap-2 border border-white/5 hover:border-white/20">
                    <Download size={20} />
                    {t.hero.cv}
                  </button>
                </div>
              </motion.div>

              <div className="relative mx-auto md:mr-0 order-1 md:order-2">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-2 relative z-10">
                  <div className="w-full h-full rounded-full overflow-hidden relative transition-all duration-500">
                    <Image src="/images/profile.jpg" alt="Víctor Torres" fill className="object-cover" priority />
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* --- MI HISTORIA --- */}
          < ExpandableSection id="story" icon={<User size={32} />} title={t.story.title} >
            <div className="space-y-6 text-lg text-zinc-300 font-light leading-relaxed">
              <p className="font-medium text-white text-xl">{t.story.intro}</p>
              <p>{t.story.p1}</p>
              <p>{t.story.p2}</p>
              <p>{t.story.p3}</p>
              <p>{t.story.p4}</p>
              <p>{t.story.p5}</p>
              <p>{t.story.p5_5}</p>
              <p className="border-l-2 border-[#82ff1f] pl-4 italic text-zinc-400">
                {t.story.p6}
              </p>
            </div>
          </ExpandableSection >

          < ExpandableSection id="career" icon={<Briefcase size={32} />} title={t.career.title} >
            <div className="space-y-16">
              {t.career.sections?.map((section: any, sectionIndex: number) => (
                <div key={sectionIndex}>
                  <h3 className="text-xl font-bold text-[#82ff1f] mb-8 pl-3 flex items-center gap-2">
                    <Globe size={20} /> {section.title}
                  </h3>
                  <div className="relative border-l border-white/10 ml-3 space-y-12 pl-8">
                    {section.items.map((item: any, itemIndex: number) => (
                      <TimelineItem
                        key={itemIndex}
                        year={item.year}
                        title={item.title}
                        role={item.role}
                        desc={item.desc}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ExpandableSection >

          {/* --- FREELANCE & EMPRENDIMIENTO --- */}
          <ExpandableSection id="freelance" icon={<Rocket size={32} />} title={t.freelance.title} >
            <div className="space-y-12">

              {/* Proyectos Propios */}
              <div>
                <h3 className="text-xl font-bold text-[#82ff1f] mb-6 flex items-center gap-2">
                  <Target size={20} /> {t.freelance.ownTitle}
                </h3>
                <div className="flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory md:grid md:grid-cols-2 md:pb-0">
                  <ProjectRow
                    className="min-w-[85vw] md:min-w-0 snap-center"
                    title={t.freelance.items.aether.title}
                    role="Founder"
                    desc={t.freelance.items.aether.desc}
                    tags={["AI Agency", "Automation", "B2B"]}
                    link="https://aetherlabs.es"
                    icon={<Brain size={24} />}
                  />
                  <ProjectRow
                    className="min-w-[85vw] md:min-w-0 snap-center"
                    title={t.freelance.items.music.title}
                    role="Founder & Community"
                    desc={t.freelance.items.music.desc}
                    tags={["Music Agency", "Viral Content", "Events"]}
                    link="https://instagram.com/the94music"
                    icon={<Music size={24} />}
                  />
                  <ProjectRow
                    className="min-w-[85vw] md:min-w-0 snap-center"
                    title={t.freelance.items.condor.title}
                    role="Founder & Manager"
                    desc={t.freelance.items.condor.desc}
                    tags={["Management", "Colombia", "Production"]}
                    icon={<Mic size={24} />}
                  />
                  <ProjectRow
                    className="min-w-[85vw] md:min-w-0 snap-center"
                    title={t.freelance.items.rings.title}
                    role="Founder"
                    desc={t.freelance.items.rings.desc}
                    tags={["Ecommerce", "Bootstrapping", "Sales"]}
                    icon={<ShoppingBag size={24} />}
                  />
                  <ProjectRow
                    className="min-w-[85vw] md:min-w-0 snap-center"
                    title={t.freelance.items.jarana.title}
                    role="Founder & Musician"
                    desc={t.freelance.items.jarana.desc}
                    tags={["Music Band", "Entertainment", "Live"]}
                    icon={<Music size={24} />}
                  />
                  <ProjectRow
                    className="min-w-[85vw] md:min-w-0 snap-center"
                    title={t.freelance.items.cataleya.title}
                    role="Co-Founder"
                    desc={t.freelance.items.cataleya.desc}
                    tags={["Events", "Flamenco", "Premium"]}
                    icon={<Music size={24} />}
                  />
                </div>
              </div>

              {/* Freelance */}
              <div>
                <h3 className="text-xl font-bold text-[#82ff1f] mb-6 flex items-center gap-2">
                  <Briefcase size={20} /> {t.freelance.consultingTitle}
                </h3>
                <div className="flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory md:grid md:grid-cols-1 md:pb-0">
                  <ProjectRow
                    className="min-w-[85vw] md:min-w-0 snap-center"
                    title={t.freelance.items.konektor.title}
                    role="Growth & AI Partner"
                    desc={t.freelance.items.konektor.desc}
                    tags={["Growth Strategy", "AI Sales", "Metaverso"]}
                    icon={<Briefcase size={24} />}
                  />
                  <ProjectRow
                    className="min-w-[85vw] md:min-w-0 snap-center"
                    title={t.freelance.items.soma.title}
                    role="Launch Strategist"
                    desc={t.freelance.items.soma.desc}
                    tags={["Launch", "Content", "Sales Closing"]}
                    icon={<Megaphone size={24} />}
                  />
                  <ProjectRow
                    className="min-w-[85vw] md:min-w-0 snap-center"
                    title={t.freelance.items.deodi.title}
                    role="Business Consultant"
                    desc={t.freelance.items.deodi.desc}
                    tags={["Digital Transformation", "Ecommerce", "Branding"]}
                    icon={<Palette size={24} />}
                  />
                  <ProjectRow
                    className="min-w-[85vw] md:min-w-0 snap-center"
                    title={t.freelance.items.suma.title}
                    role="Tech & Design"
                    desc={t.freelance.items.suma.desc}
                    tags={["Web Dev", "AI Chatbot", "Design"]}
                    icon={<Database size={24} />}
                  />
                </div>
              </div>

            </div>
          </ExpandableSection >

          {/* --- EXPERIENCIA IA --- */}
          < ExpandableSection id="ia" icon={<Brain size={32} />} title={t.aiExperience.title} >
            <div className="space-y-8">
              <p className="text-zinc-300 text-lg font-light leading-relaxed mb-6">
                {t.aiExperience.intro}
              </p>

              <div className="grid grid-cols-1 gap-6">
                <ProjectRow
                  title={t.aiExperience.projects.aether.title}
                  role={t.aiExperience.projects.aether.role}
                  desc={t.aiExperience.projects.aether.desc}
                  tags={["Vapi / Retell", "n8n Workflows", "OpenAI API", "Function Calling"]}
                  link="https://aetherlabs.es"
                  icon={<Brain size={24} />}
                />

                <ProjectRow
                  title={t.aiExperience.projects.futura.title}
                  role={t.aiExperience.projects.futura.role}
                  desc={t.aiExperience.projects.futura.desc}
                  tags={["Product Design", "Tech Benchmark", "B2B Sales", "Voice Agents"]}
                  icon={<Mic size={24} />}
                />

                <ProjectRow
                  title={t.aiExperience.projects.suma.title}
                  role={t.aiExperience.projects.suma.role}
                  desc={t.aiExperience.projects.suma.desc}
                  tags={["Chatbase / Voiceflow", "Prompt Engineering", "WhatsApp API", "Medical"]}
                  icon={<MessageSquare size={24} />}
                />

                <ProjectRow
                  title={t.aiExperience.projects.kmeleon.title}
                  role={t.aiExperience.projects.kmeleon.role}
                  desc={t.aiExperience.projects.kmeleon.desc}
                  tags={["GTM Strategy", "Enterprise AI", "Deep Tech Narrative"]}
                  icon={<TrendingUp size={24} />}
                />

                <ProjectRow
                  title={t.aiExperience.projects.music.title}
                  role={t.aiExperience.projects.music.role}
                  desc={t.aiExperience.projects.music.desc}
                  tags={["Web Scraping", "Email Automation", "Lead Generation", "n8n"]}
                  icon={<Target size={24} />}
                />
              </div>

              {/* --- DESARROLLOS IA PROPIOS --- */}
              <div className="mt-12 pt-8 border-t border-white/5">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#82ff1f]/20 text-[#82ff1f] flex items-center justify-center font-bold text-base">
                    <Zap size={18} />
                  </span>
                  {t.aiExperience.developmentsTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Nuria */}
                  <div className="p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-[#82ff1f]/10 rounded-lg">
                        <Mic size={18} className="text-[#82ff1f]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">{t.aiExperience.developments.nuria.title}</h4>
                        <p className="text-xs text-zinc-400">{t.aiExperience.developments.nuria.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Jason */}
                  <div className="p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-[#82ff1f]/10 rounded-lg">
                        <ClipboardList size={18} className="text-[#82ff1f]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">{t.aiExperience.developments.jason.title}</h4>
                        <p className="text-xs text-zinc-400">{t.aiExperience.developments.jason.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* UGC */}
                  <div className="p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-[#82ff1f]/10 rounded-lg">
                        <Users size={18} className="text-[#82ff1f]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">{t.aiExperience.developments.ugc.title}</h4>
                        <p className="text-xs text-zinc-400">{t.aiExperience.developments.ugc.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Editor */}
                  <div className="p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-[#82ff1f]/10 rounded-lg">
                        <Palette size={18} className="text-[#82ff1f]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">{t.aiExperience.developments.editor.title}</h4>
                        <p className="text-xs text-zinc-400">{t.aiExperience.developments.editor.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Particles */}
                  <div className="p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-[#82ff1f]/10 rounded-lg">
                        <Zap size={18} className="text-[#82ff1f]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">{t.aiExperience.developments.particles.title}</h4>
                        <p className="text-xs text-zinc-400">{t.aiExperience.developments.particles.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Chleopatra */}
                  <div className="p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-[#82ff1f]/10 rounded-lg">
                        <Brain size={18} className="text-[#82ff1f]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">{t.aiExperience.developments.chleopatra.title}</h4>
                        <p className="text-xs text-zinc-400">{t.aiExperience.developments.chleopatra.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Aura */}
                  <div className="p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-[#82ff1f]/10 rounded-lg">
                        <Target size={18} className="text-[#82ff1f]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">{t.aiExperience.developments.aura.title}</h4>
                        <p className="text-xs text-zinc-400">{t.aiExperience.developments.aura.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Musikeeo */}
                  <div className="p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-[#82ff1f]/10 rounded-lg">
                        <Music size={18} className="text-[#82ff1f]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">{t.aiExperience.developments.musikeeo.title}</h4>
                        <p className="text-xs text-zinc-400">{t.aiExperience.developments.musikeeo.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Numa */}
                  <div className="p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-[#82ff1f]/10 rounded-lg">
                        <MessageSquare size={18} className="text-[#82ff1f]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">{t.aiExperience.developments.numa.title}</h4>
                        <p className="text-xs text-zinc-400">{t.aiExperience.developments.numa.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- AI SKILLS --- */}
              <div className="bg-[#white]/5 border border-white/10 rounded-2xl p-6 mt-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#82ff1f]/20 text-[#82ff1f] flex items-center justify-center font-bold text-base">
                    <Brain size={18} />
                  </span>
                  AI Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                    <h4 className="font-bold text-white mb-1">Prompt Engineering</h4>
                    <p className="text-xs text-zinc-400">Diseño de prompts complejos para chatbots y agentes de voz. Optimización de contexto y few-shot learning.</p>
                  </div>
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                    <h4 className="font-bold text-white mb-1">Voice AI Agents</h4>
                    <p className="text-xs text-zinc-400">Implementación de agentes telefónicos con Vapi/Retell. Integración con Twilio y manejo de conversaciones naturales.</p>
                  </div>
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                    <h4 className="font-bold text-white mb-1">Chatbot Development</h4>
                    <p className="text-xs text-zinc-400">Diseño y despliegue de chatbots con ChatBase y Voiceflow. Integración con WhatsApp Business API.</p>
                  </div>
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                    <h4 className="font-bold text-white mb-1">Workflow Automation</h4>
                    <p className="text-xs text-zinc-400">Automatización con n8n, Make y Zapier. Conexión de APIs, webhooks y orquestación de procesos empresariales.</p>
                  </div>
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                    <h4 className="font-bold text-white mb-1">AI Image Generation</h4>
                    <p className="text-xs text-zinc-400">Generación de assets visuales con Midjourney y Stable Diffusion. Fine-tuning de modelos LoRA para marcas.</p>
                  </div>
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                    <h4 className="font-bold text-white mb-1">API Integration</h4>
                    <p className="text-xs text-zinc-400">Integración de LLMs con sistemas externos: CRMs, calendarios, bases de datos. Function calling y webhooks.</p>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableSection >


          {/* --- SEPARATOR --- */}
          <div className="py-24 max-w-6xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#82ff1f]/30 to-transparent mb-12" />
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-heading font-light text-white tracking-tight">
                {t.capabilities?.title || "Capabilities & Results"}
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                {t.capabilities?.desc || "Beyond experience, here I detail my technical skills, quantifiable achievements, and academic background."}
              </p>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#82ff1f]/30 to-transparent mt-12" />
          </div>

          <div className="my-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-6xl mx-auto hidden" />

          {/* --- HITOS Y LOGROS --- */}
          < ExpandableSection id="achievements" icon={<Award size={32} />} title={t.achievements.title} >
            <AchievementsCarousel items={achievements} />
          </ExpandableSection >

          {/* --- SKILLS --- */}
          < ExpandableSection id="skills" icon={<Cpu size={32} />} title={t.skills.title} >

            {/* Core Skills - Destacados */}
            < div className="mb-12" >
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 uppercase tracking-[0.2em]">Core Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

                {/* Project Management */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#82ff1f]/10 to-transparent border border-[#82ff1f]/20 relative overflow-hidden group hover:border-[#82ff1f]/50 transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#82ff1f]/10 blur-[40px] rounded-full"></div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-[#82ff1f] rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-[#82ff1f]/20">
                      <Target size={20} className="text-black" />
                    </div>
                    <h4 className="text-xl font-heading font-bold text-white mb-2">{t.skills.pm.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{t.skills.pm.desc}</p>
                  </div>
                </div>

                {/* Marketing & Growth */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#82ff1f]/10 to-transparent border border-[#82ff1f]/20 relative overflow-hidden group hover:border-[#82ff1f]/50 transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#82ff1f]/10 blur-[40px] rounded-full"></div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-[#82ff1f] rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-[#82ff1f]/20">
                      <Megaphone size={20} className="text-black" />
                    </div>
                    <h4 className="text-xl font-heading font-bold text-white mb-2">{t.skills.marketing.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{t.skills.marketing.desc}</p>
                  </div>
                </div>

                {/* Client Relationship */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#82ff1f]/10 to-transparent border border-[#82ff1f]/20 relative overflow-hidden group hover:border-[#82ff1f]/50 transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#82ff1f]/10 blur-[40px] rounded-full"></div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-[#82ff1f] rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-[#82ff1f]/20">
                      <Users size={20} className="text-black" />
                    </div>
                    <h4 className="text-xl font-heading font-bold text-white mb-2">{t.skills.client.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{t.skills.client.desc}</p>
                  </div>
                </div>

                {/* AI Strategy & Execution */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#82ff1f]/10 to-transparent border border-[#82ff1f]/20 relative overflow-hidden group hover:border-[#82ff1f]/50 transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#82ff1f]/10 blur-[40px] rounded-full"></div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-[#82ff1f] rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-[#82ff1f]/20">
                      <Brain size={20} className="text-black" />
                    </div>
                    <h4 className="text-xl font-heading font-bold text-white mb-2">{t.skills.ai.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{t.skills.ai.desc}</p>
                  </div>
                </div>

              </div>
            </div >

            {/* Subcategorías de Skills (Habilidades Conceptuales) */}
            < div className="space-y-8" >

              {/* PM */}
              < div >
                <h3 className="text-sm font-bold text-white/50 mb-4 flex items-center gap-2 uppercase tracking-widest">
                  <ClipboardList size={16} className="text-[#82ff1f]" /> {t.skills.categories.pm}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {t.skills.pm.items.map((skill) => (
                    <div key={skill} className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#82ff1f]/20 transition-all group">
                      <p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{skill}</p>
                    </div>
                  ))}
                </div>
              </div >

              {/* Client Relationship */}
              <div>
                <h3 className="text-sm font-bold text-white/50 mb-4 flex items-center gap-2 uppercase tracking-widest">
                  <Users size={16} className="text-[#82ff1f]" /> {t.skills.categories.client}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {t.skills.client.items.map((skill) => (
                    <div key={skill} className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#82ff1f]/20 transition-all group">
                      <p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Habilidades de Negocio */}
              <div >
                <h3 className="text-sm font-bold text-white/50 mb-4 flex items-center gap-2 uppercase tracking-widest">
                  <Briefcase size={16} className="text-[#82ff1f]" /> {t.skills.categories.business}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {t.skills.categories.businessItems.map((skill) => (
                    <div key={skill} className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#82ff1f]/20 transition-all group">
                      <p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{skill}</p>
                    </div>
                  ))}
                </div>
              </div >

              {/* Habilidades Técnicas Conceptuales */}
              < div >
                <h3 className="text-sm font-bold text-white/50 mb-4 flex items-center gap-2 uppercase tracking-widest">
                  <Code size={16} className="text-[#82ff1f]" /> {t.skills.categories.tech}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {t.skills.categories.techItems.map((skill) => (
                    <div key={skill} className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#82ff1f]/20 transition-all group">
                      <p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{skill}</p>
                    </div>
                  ))}
                </div>
              </div >
            </div >

            {/* --- TECH STACK & HERRAMIENTAS (Bloque Diferenciado) --- */}
            <div id="stack" className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                <span className="text-[#82ff1f]">#</span> {t.skills.categories.stack}
              </h3>

              <div className="space-y-8">

                {/* Dynamic Stack Accordion */}
                <div className="grid grid-cols-1 gap-4">
                  {t.stack?.map((section: any, index: number) => (
                    <StackCategory key={index} title={section.title} groups={section.groups} />
                  ))}
                </div>

                {/* Stack Marketing & Ventas */}
                <div>
                  <h4 className="text-sm font-bold text-zinc-400 mb-3 uppercase tracking-wider">{t.skills.stack.marketing}</h4>
                  <div className="flex flex-wrap gap-2">
                    {["HubSpot CRM", "Salesforce", "Google Ads", "Meta Ads", "YouTube Growth", "Email Automation (ActiveC)", "Pipedrive", "Cold Outbound Tools", "Google Analytics 4"].map((tool) => (
                      <span key={tool} className="px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 text-sm border border-white/10">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stack Creativo */}
                <div>
                  <h4 className="text-sm font-bold text-zinc-400 mb-3 uppercase tracking-wider">{t.skills.stack.creative}</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Premiere Pro", "CapCut", "DaVinci Resolve", "Studio One", "Canva", "OBS Studio"].map((tool) => (
                      <span key={tool} className="px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 text-sm border border-white/10">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stack Desarrollo & Web */}
                <div>
                  <h4 className="text-sm font-bold text-zinc-400 mb-3 uppercase tracking-wider">{t.skills.stack.dev}</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "Node.js", "Tailwind CSS", "TypeScript", "Git/GitHub", "VS Code", "Vercel"].map((tool) => (
                      <span key={tool} className="px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 text-sm border border-white/10">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stack Operaciones & ERP */}
                <div>
                  <h4 className="text-sm font-bold text-zinc-400 mb-3 uppercase tracking-wider">{t.skills.stack.ops}</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Oracle NetSuite", "SAP ERP", "ClickUp", "Notion", "Slack", "Jira", "Monday", "Microsoft Excel (Adv)"].map((tool) => (
                      <span key={tool} className="px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 text-sm border border-white/10">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </ExpandableSection >





          {/* --- MIS NÚMEROS --- */}
          < ExpandableSection id="numbers" icon={<TrendingUp size={32} />} title={t.numbers.title} >
            <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:pb-0">
              <NumberCard className="min-w-[280px] md:min-w-0 snap-center" icon={<TrendingUp size={24} />} value="+10M" label={t.numbers.impact} description={t.numbers.impactDesc} />
              <NumberCard className="min-w-[280px] md:min-w-0 snap-center" icon={<Code size={24} />} value="+30" label={t.numbers.webs} description={t.numbers.websDesc} />
              <NumberCard className="min-w-[280px] md:min-w-0 snap-center" icon={<Lightbulb size={24} />} value="+30" label={t.numbers.brands} description={t.numbers.brandsDesc} />
              <NumberCard className="min-w-[280px] md:min-w-0 snap-center" icon={<Brain size={24} />} value="+10" label={t.numbers.ai} description={t.numbers.aiDesc} />
              <NumberCard className="min-w-[280px] md:min-w-0 snap-center" icon={<Briefcase size={24} />} value="10" label={t.numbers.boosted} description={t.numbers.boostedDesc} />
              <NumberCard className="min-w-[280px] md:min-w-0 snap-center" icon={<Workflow size={24} />} value="+25" label={t.numbers.systems} description={t.numbers.systemsDesc} />
              <NumberCard className="min-w-[280px] md:min-w-0 snap-center" icon={<Target size={24} />} value="+1.5M€" label={t.numbers.budget} description={t.numbers.budgetDesc} />
              <NumberCard className="min-w-[280px] md:min-w-0 snap-center" icon={<Database size={24} />} value="3" label={t.numbers.core} description={t.numbers.coreDesc} />
            </div>
          </ExpandableSection >

          {/* --- FREELANCE & EMPRENDIMIENTO --- */}
          {/* --- FORMACIÓN --- */}
          <ExpandableSection id="education" icon={<GraduationCap size={32} />} title={t.education.title}>
            <div className="relative border-l border-white/10 ml-3 space-y-8 pl-8">
              {t.education.items?.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-[#82ff1f] shadow-[0_0_10px_#82ff1f] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#82ff1f]/30 transition-all hover:bg-white/[0.07]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#82ff1f] transition-colors">{item.title}</h3>
                      <span className="text-sm font-mono text-zinc-400 bg-black/40 px-3 py-1 rounded-full border border-white/10">{item.role}</span>
                    </div>
                    <p className="text-zinc-400 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ExpandableSection>





          {/* --- QUÉ BUSCO --- */}
          < ExpandableSection id="seeking" icon={<Search size={32} />} title={t.seeking.title} >
            <div className="max-w-4xl space-y-8 text-lg text-zinc-300 font-light leading-relaxed">
              <p>
                {t.seeking.intro1}
              </p>
              <p>
                {t.seeking.intro2}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-[#white]/5 border border-dashed border-white/10 hover:border-[#82ff1f]/30 transition-all">
                  <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    🚀 {t.seeking.startup.title}
                  </h4>
                  <p className="text-sm">
                    {t.seeking.startup.desc}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-[#82ff1f]/5 border border-[#82ff1f]/20 hover:bg-[#82ff1f]/10 transition-all">
                  <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    🏢 {t.seeking.company.title}
                    <span className="text-[10px] bg-[#82ff1f] text-black px-2 py-0.5 rounded-full font-bold uppercase">{t.seeking.company.badge}</span>
                  </h4>
                  <p className="text-sm text-white">
                    {t.seeking.company.desc}
                  </p>
                </div>
              </div>

              <p className="italic text-zinc-400 border-l-2 border-[#82ff1f] pl-4">
                {t.seeking.quote}
              </p>
            </div>
          </ExpandableSection >

          {/* --- CONTACT CTA --- */}
          < section id="contact" className="py-20 relative overflow-hidden" >
            {/* Background Effects */}
            < div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" ></div >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#82ff1f]/5 blur-[120px] rounded-full"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

              {/* Header */}
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#82ff1f]/10 border border-[#82ff1f]/20 mb-6"
                >
                  <div className="w-2 h-2 rounded-full bg-[#82ff1f] animate-pulse"></div>
                  <span className="text-[#82ff1f] text-sm font-bold tracking-wider uppercase">{t.contactSection.badge}</span>
                </motion.div>

                <h2 className="text-5xl md:text-6xl font-heading font-light text-white mb-6 tracking-tight">
                  {t.contactSection.title}
                </h2>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                  {t.contactSection.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
                >
                  <h3 className="text-2xl font-heading font-medium text-white mb-6">{t.contactSection.form.title}</h3>
                  <form
                    action="https://formsubmit.co/victortorresa94@gmail.com"
                    method="POST"
                    className="space-y-4"
                  >
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://vtorres.net?submitted=true" />
                    <input type="hidden" name="_subject" value="Nuevo contacto desde vtorres.net" />

                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">{t.contactSection.form.name}</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 focus:border-[#82ff1f]/50 focus:outline-none transition-colors text-base"
                        placeholder={t.contactSection.form.namePlaceholder}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">{t.contactSection.form.email}</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 focus:border-[#82ff1f]/50 focus:outline-none transition-colors text-base"
                        placeholder={t.contactSection.form.emailPlaceholder}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">{t.contactSection.form.company}</label>
                      <input
                        type="text"
                        name="company"
                        className="w-full px-4 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 focus:border-[#82ff1f]/50 focus:outline-none transition-colors text-base"
                        placeholder={t.contactSection.form.companyPlaceholder}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">{t.contactSection.form.message}</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 focus:border-[#82ff1f]/50 focus:outline-none transition-colors resize-none text-base"
                        placeholder={t.contactSection.form.messagePlaceholder}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-5 bg-[#82ff1f] text-black font-bold rounded-xl hover:bg-[#6ed617] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#82ff1f]/20 text-base"
                    >
                      <Mail size={20} />
                      {t.contactSection.form.submit}
                    </button>
                  </form>
                </motion.div>

                {/* Contact Options */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >

                  {/* Email Direct */}
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#82ff1f]/30 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="p-4 bg-[#82ff1f]/10 rounded-2xl group-hover:bg-[#82ff1f] transition-colors">
                        <Mail size={24} className="text-[#82ff1f] group-hover:text-black transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-heading font-medium text-white mb-2">{t.contactSection.options.email.title}</h4>
                        <a
                          href={`mailto:${t.contactSection.options.email.desc}`}
                          className="text-zinc-400 hover:text-[#82ff1f] transition-colors break-all"
                        >
                          {t.contactSection.options.email.desc}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#82ff1f]/30 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="p-4 bg-[#82ff1f]/10 rounded-2xl group-hover:bg-[#82ff1f] transition-colors">
                        <MessageSquare size={24} className="text-[#82ff1f] group-hover:text-black transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-heading font-medium text-white mb-2">{t.contactSection.options.whatsapp.title}</h4>
                        <p className="text-zinc-400 mb-4 text-sm">{t.contactSection.options.whatsapp.desc}</p>
                        <a
                          href="https://wa.me/34627281459?text=Hola%20V%C3%ADctor,%20vengo%20de%20tu%20web%20y%20me%20gustar%C3%ADa%20hablar%20contigo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-[#82ff1f] hover:text-black hover:border-[#82ff1f] transition-all font-medium"
                        >
                          <MessageSquare size={18} />
                          {t.contactSection.options.whatsapp.button}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Call */}
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#82ff1f]/30 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="p-4 bg-[#82ff1f]/10 rounded-2xl group-hover:bg-[#82ff1f] transition-colors">
                        <Mic size={24} className="text-[#82ff1f] group-hover:text-black transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-heading font-medium text-white mb-2">{t.contactSection.options.call.title}</h4>
                        <p className="text-zinc-400 mb-4 text-sm">{t.contactSection.options.call.desc}</p>
                        <a
                          href="tel:+34627281459"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-[#82ff1f] hover:text-black hover:border-[#82ff1f] transition-all font-medium"
                        >
                          <Mic size={18} />
                          {t.contactSection.options.call.button}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#82ff1f]/30 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="p-4 bg-[#82ff1f]/10 rounded-2xl group-hover:bg-[#82ff1f] transition-colors">
                        <Linkedin size={24} className="text-[#82ff1f] group-hover:text-black transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-heading font-medium text-white mb-2">{t.contactSection.options.linkedin.title}</h4>
                        <a
                          href="https://www.linkedin.com/in/v%C3%ADctor-torres-arana-54618b99/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-[#82ff1f] transition-colors"
                        >
                          {t.contactSection.options.linkedin.link}
                        </a>
                      </div>
                    </div>
                  </div>

                </motion.div>

              </div>
            </div>
          </section >

          {/* --- FOOTER --- */}
          < footer className="py-8 border-t border-white/5 bg-[#020202]" >
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-zinc-600 text-sm">
                  {t.footer.rights}
                </p>
                <div className="flex items-center gap-6">
                  <a href="#story" className="text-zinc-600 hover:text-white text-sm transition-colors">{t.footer.home}</a>
                  <a href="/cv.pdf" className="text-zinc-600 hover:text-white text-sm transition-colors flex items-center gap-1">
                    <Download size={14} />
                    {t.footer.cv}
                  </a>
                </div>
              </div>
            </div>
          </footer >
        </div >

      </div>

      {/* --- PRINT ONLY DOCUMENT --- */}
      <div className="print-only max-w-[21cm] mx-auto p-0 bg-white text-black">
        {/* Header */}
        <div className="text-center mb-8 border-b-2 border-black pb-6">
          <h1 className="text-4xl font-bold mb-2 uppercase tracking-wide text-black">{t.hero.name}</h1>
          <h2 className="text-xl text-zinc-600 mb-4 font-light tracking-widest uppercase">{t.hero.title}</h2>
          <div className="flex justify-center gap-6 text-sm text-zinc-600 font-medium">
            <span>victortorresa94@gmail.com</span>
            <span>+34 627 28 14 59</span>
            <span>linkedin.com/in/víctor-torres-arana</span>
          </div>
        </div>

        {/* Profile */}
        <div className="mb-8 pl-4 border-l-4 border-[#82ff1f]">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-2 text-zinc-400">Perfil</h3>
          <p className="text-sm text-black leading-relaxed text-justify font-medium">{t.hero.description}</p>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h3 className="text-lg font-bold uppercase tracking-wider mb-6 border-b border-zinc-200 pb-2 text-black">{t.career.title}</h3>
          <div className="space-y-6">
            {t.career.items?.map((item, index) => (
              <div key={index} className="grid grid-cols-[100px_1fr] gap-6 break-inside-avoid">
                <div className="text-xs font-bold text-zinc-500 pt-1 text-right">{item.year}</div>
                <div>
                  <h4 className="font-bold text-base text-black">{item.title} <span className="font-normal text-zinc-600">| {item.role}</span></h4>
                  <p className="text-xs text-zinc-700 mt-1 leading-snug max-w-2xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI & Automation Projects (PDF ONLY) */}
        <div className="mb-8">
          <h3 className="text-lg font-bold uppercase tracking-wider mb-6 border-b border-zinc-200 pb-2 text-black">{t.nav.experience}</h3>
          <div className="space-y-4">
            {Object.values(t.aiExperience?.projects || {}).map((item: any, index: number) => (
              <div key={index} className="break-inside-avoid">
                <h4 className="font-bold text-sm text-black">{item.title} <span className="font-normal text-zinc-600">| {item.role}</span></h4>
                <p className="text-xs text-zinc-700 mt-1 leading-snug">{item.desc}</p>
                <div className="flex gap-2 mt-1">
                  {item.tags?.map((tag: string) => (
                    <span key={tag} className="text-[10px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded border border-zinc-200">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8 break-before-auto">
          <h3 className="text-lg font-bold uppercase tracking-wider mb-6 border-b border-zinc-200 pb-2 text-black">{t.skills.title}</h3>
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <h4 className="font-bold text-xs mb-2 uppercase text-zinc-400 tracking-widest">{t.skills.pm.title}</h4>
              <p className="text-xs text-black font-medium">{t.skills.pm.items?.join(", ")}</p>
            </div>
            <div>
              <h4 className="font-bold text-xs mb-2 uppercase text-zinc-400 tracking-widest">{t.skills.client.title}</h4>
              <p className="text-xs text-black font-medium">{t.skills.client.items?.join(", ")}</p>
            </div>
            <div>
              <h4 className="font-bold text-xs mb-2 uppercase text-zinc-400 tracking-widest">{t.skills.categories.business}</h4>
              <p className="text-xs text-black font-medium">{t.skills.categories.businessItems.join(", ")}</p>
            </div>
            <div>
              <h4 className="font-bold text-xs mb-2 uppercase text-zinc-400 tracking-widest">{t.skills.categories.stack}</h4>
              <p className="text-xs text-black font-medium italic">
                {t.skills.categories.techItems.join(", ")}
              </p>
            </div>
          </div>
        </div>

        {/* Education (PDF ONLY) */}
        <div className="mb-8 break-inside-avoid">
          <h3 className="text-lg font-bold uppercase tracking-wider mb-6 border-b border-zinc-200 pb-2 text-black">{t.education.title}</h3>
          <div className="space-y-4">
            {t.education.items?.map((item, index) => (
              <div key={index} className="grid grid-cols-[1fr_auto] gap-4">
                <div>
                  <h4 className="font-bold text-sm text-black">{item.title}</h4>
                  <p className="text-xs text-zinc-600">{item.role}</p>
                </div>
                <p className="text-[10px] text-zinc-500 italic max-w-xs text-right">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer for Print */}
        <div className="text-center mt-12 pt-6 border-t border-zinc-100">
          <p className="text-[10px] text-zinc-400">Documento generado automáticamente desde vtrx.ai</p>
        </div>

      </div>
    </main>
  );
}

/* --- COMPONENTS --- */

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#82ff1f] transition-all group-hover:w-full"></span>
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-2xl font-bold text-white hover:text-[#82ff1f] transition-colors"
    >
      {children}
    </Link>
  );
}



function ProjectRow({ title, role, desc, tags, link, icon, className }: { title: string; role: string; desc: string; tags: string[]; link?: string; icon?: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-[#82ff1f]/30 hover:bg-white/[0.07] transition-all hover:shadow-[0_0_30px_-10px_rgba(130,255,31,0.1)] ${className}`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h3 className="text-2xl font-heading font-medium text-white flex items-center gap-3 group-hover:text-[#82ff1f] transition-colors">
            {icon && <span className="text-[#82ff1f] opacity-80 group-hover:opacity-100">{icon}</span>}
            {title}
            {link && <Code size={20} className="text-[#82ff1f] opacity-50 group-hover:opacity-100 transition-opacity ml-1" />}
          </h3>
          <span className="text-sm text-[#82ff1f] font-mono tracking-wider pl-1">{role}</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map(tag => (
            <span key={tag} className="text-xs px-3 py-1 bg-black/40 rounded-full border border-white/10 text-zinc-400 group-hover:border-[#82ff1f]/20 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p className="text-zinc-400 text-base leading-relaxed max-w-3xl font-light">{desc}</p>

      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`Ver proyecto ${title}`} />
      )}
    </motion.div>
  );
}

function TimelineItem({ year, title, role, desc }: { year: string; title: string; role: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-6"
    >
      <span className="absolute -left-[45px] top-1.5 w-6 h-6 bg-[#050505] border-2 border-[#82ff1f] rounded-full z-10 shadow-[0_0_15px_rgba(130,255,31,0.4)]">
        <span className="absolute inset-0 bg-[#82ff1f] rounded-full animate-ping opacity-20"></span>
      </span>
      <div className="mb-2 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
        <h3 className="text-2xl font-heading font-medium text-white">{title}</h3>
        <span className="text-[#82ff1f] text-sm font-bold bg-[#82ff1f]/10 px-3 py-1 rounded-full border border-[#82ff1f]/20 font-mono w-fit">{year}</span>
      </div>
      <p className="text-white/90 font-medium mb-3 text-lg">{role}</p>
      <p className="text-zinc-400 text-base leading-relaxed max-w-2xl font-light">{desc}</p>
    </motion.div>
  );
}

function VentureCard({ title, icon, active = false }: { title: string; icon: React.ReactNode; active?: boolean }) {
  return (
    <div className={`p-6 rounded-2xl border flex items-center gap-4 transition-all hover:scale-[1.02] cursor-default ${active ? 'bg-[#82ff1f]/10 border-[#82ff1f]/40 shadow-[0_0_20px_-5px_rgba(130,255,31,0.2)]' : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'}`}>
      <div className={`p-4 rounded-xl ${active ? 'bg-[#82ff1f] text-black shadow-lg' : 'bg-black/40 text-zinc-400'}`}>
        {icon}
      </div>
      <span className={`font-bold text-lg ${active ? 'text-white' : 'text-zinc-400'}`}>{title}</span>
    </div>
  );
}

function SkillCard({ icon, title, desc, className }: { icon: React.ReactNode; title: string; desc: string; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#82ff1f]/40 transition-all group hover:shadow-[0_10px_40px_-10px_rgba(130,255,31,0.1)] relative overflow-hidden ${className}`}
    >
      <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-2 h-2 bg-[#82ff1f] rounded-full shadow-[0_0_10px_#82ff1f]"></div>
      </div>
      <div className="flex items-start gap-5">
        <div className="p-4 bg-white/5 rounded-2xl text-[#82ff1f] group-hover:bg-[#82ff1f] group-hover:text-black transition-all duration-300 shadow-inner">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-heading font-medium text-white mb-3 group-hover:text-[#82ff1f] transition-colors">{title}</h3>
          <p className="text-zinc-400 text-sm leading-relaxed font-light">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function StackCategory({ title, groups }: { title: string, groups: { title: string, tools: string[] }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 hover:border-[#82ff1f]/30 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left group"
      >
        <h4 className="text-base font-bold text-zinc-100 group-hover:text-[#82ff1f] transition-colors">{title}</h4>
        <ChevronDown size={20} className={`text-zinc-500 transition-transform duration-300 group-hover:text-[#82ff1f] ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 pb-6 pt-0 space-y-6 border-t border-white/5 mt-2">
              {groups.map((group, idx) => (
                <div key={idx} className="pt-4">
                  <h5 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 pl-1">{group.title}</h5>
                  <div className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span key={tool} className="text-xs px-2.5 py-1 rounded bg-black/20 text-zinc-300 border border-white/5 hover:bg-[#82ff1f]/10 hover:text-[#82ff1f] hover:border-[#82ff1f]/20 transition-all cursor-default">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TechBadge({ name }: { name: string }) {
  return (
    <span className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-zinc-300 text-sm font-medium hover:text-black hover:bg-[#82ff1f] hover:border-[#82ff1f] transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(130,255,31,0.3)]">
      {name}
    </span>
  );
}

function ExpandableSection({ id, title, number, icon, children, className }: { id?: string, title: string, number?: string, icon?: React.ReactNode, children: React.ReactNode, className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id={id} className={`max-w-6xl mx-auto px-6 py-8 relative z-20 border-b border-white/5 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-between w-full pb-4 hover:border-[#82ff1f] transition-all duration-300 text-left"
      >
        <h2 className="font-heading text-3xl font-light text-white flex items-center gap-3">
          {icon ? (
            <span className="text-[#82ff1f] flex items-center justify-center">{icon}</span>
          ) : (
            <span className="text-[#82ff1f]">{number}.</span>
          )}
          {title}
        </h2>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`group-hover:text-[#82ff1f] transition-colors ${isOpen ? 'text-[#82ff1f]' : 'text-zinc-500'}`}
        >
          <ChevronDown size={32} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function NumberCard({ icon, value, label, description, className }: { icon: React.ReactNode, value: string, label: string, description: string; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`p-8 rounded-3xl bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-white/5 hover:border-[#82ff1f]/40 transition-all group h-full flex flex-col justify-between shadow-xl hover:shadow-[0_0_30px_-10px_rgba(130,255,31,0.15)] ${className}`}
    >
      <div>
        <div className="p-4 bg-white/5 rounded-2xl text-[#82ff1f] w-fit mb-6 group-hover:bg-[#82ff1f] group-hover:text-black transition-all duration-300 shadow-[0_0_15px_-5px_#82ff1f]">
          {icon}
        </div>
        <h3 className="text-5xl font-heading font-medium text-white mb-2 tracking-tighter">{value}</h3>
        <p className="text-xs font-bold text-[#82ff1f] uppercase tracking-[0.2em] mb-4 bg-[#82ff1f]/5 w-fit px-2 py-1 rounded border border-[#82ff1f]/10">{label}</p>
        <p className="text-zinc-400 text-sm leading-relaxed font-light">{description}</p>
      </div>
    </motion.div>
  )
}
