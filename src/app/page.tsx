"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, Globe, Code, Menu, X, Download, TrendingUp, Target, Lightbulb, Zap, Workflow, ChevronDown, Briefcase, Terminal, MessageSquare, Database, Mic, ClipboardList, Brain, Video, Music, ShoppingBag, Users, Palette, Megaphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AchievementsCarousel from "../components/AchievementsCarousel";
import LanguageSwitcher from "../components/LanguageSwitcher";
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

  const achievements = [
    {
      id: 1,
      title: "Implementación Oracle NetSuite",
      role: "Project Manager Lead",
      desc: "Liderazgo técnico y operativo en la implementación de ERP Oracle para multinacional logística. Coordinación de equipos internacionales, migración de datos críticos y formación a +50 empleados.",
      tags: ["Oracle ERP", "Logística", "Liderazgo"],
      metric: "Impacto Global",
      image: "/images/achievements/netsuite.jpg"
    },
    {
      id: 2,
      title: "Venta Enterprise SaaS",
      role: "Sales Lead & Negotiation",
      desc: "Liderazgo en la negociación y cierre de venta de Oracle NetSuite a Bluespace. Gestión del ciclo de venta complejo (6 meses), validación técnica y cierre contractual.",
      tags: ["Ventas B2B", "Negociación", "SaaS"],
      metric: "100.000 € Deal",
      image: "/images/achievements/proyectos.jpg"
    },
    {
      id: 3,
      title: "Marca Emelson",
      role: "Brand Creator & Product",
      desc: "Creación desde cero, branding y estrategia de lanzamiento de la marca de climatización Emelson. Hoy líder en grandes superficies (Leroy Merlin, Bricomart).",
      tags: ["Branding", "Desarrollo Producto", "Retail"],
      metric: "Líder de Sector",
      image: "/images/achievements/ecommerce.jpg"
    },
    {
      id: 4,
      title: "Lanzamiento Kmeleon",
      role: "CMO & GTM Strategy",
      desc: "Diseño de narrativa, posicionamiento y estrategia Go-To-Market para startup de IA. Lanzamiento en US y Latam, captación de primeros clientes Enterprise.",
      tags: ["Startup IA", "GTM Strategy", "Growth"],
      metric: "Lanzamiento Global",
      image: "/images/achievements/startups.jpg"
    },
    {
      id: 5,
      title: "Gestión Musical & Eventos",
      role: "Artist Manager",
      desc: "Gestión 360º de carreras artísticas (94 Music, Condor). Booking, producción de eventos en vivo, logística de giras y negociación con salas/promotores.",
      tags: ["Música", "Producción", "Management"],
      metric: "+15 Artistas",
      image: "/images/achievements/eventos.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#82ff1f] selection:text-black relative font-sans">

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
            <NavLink href="#ia">{t.nav.experience}</NavLink>
            <NavLink href="#freelance">{t.nav.projects}</NavLink>
            <NavLink href="#stack">{t.nav.stack}</NavLink>
            <LanguageSwitcher />
            <Link href="#contact" className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-white hover:bg-white/10 transition-all">
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
              <MobileNavLink href="#ia" onClick={() => setMobileMenuOpen(false)}>Experiencia</MobileNavLink>
              <MobileNavLink href="#freelance" onClick={() => setMobileMenuOpen(false)}>Freelance</MobileNavLink>
              <MobileNavLink href="#stack" onClick={() => setMobileMenuOpen(false)}>Stack</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Hablemos</MobileNavLink>

              <div className="pt-8 flex flex-col items-center gap-6 w-full px-12">
                <button
                  onClick={() => { window.print(); setMobileMenuOpen(false); }}
                  className="flex items-center gap-2 text-zinc-400 hover:text-white"
                >
                  <Download size={16} /> Descargar CV PDF
                </button>
                <a
                  href="mailto:victortorresa94@gmail.com"
                  className="w-full bg-[#82ff1f] text-black py-4 rounded-xl text-center font-bold text-lg"
                >
                  Contactar
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
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
                <span className="text-[#82ff1f] text-xs font-bold tracking-wider uppercase">Open to Work</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-7xl font-heading font-light tracking-tighter text-white leading-[0.9]">
                Víctor<br />Torres Arana<span className="text-[#82ff1f]">.</span>
              </h1>

              <h2 className="text-2xl md:text-3xl text-zinc-400 font-light">
                AI Project Manager & <span className="text-white font-bold border-b-4 border-[#82ff1f]">Business Builder</span>
              </h2>

              <p className="text-lg text-zinc-500 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Transformo ideas abstractas en productos digitales funcionales. Especializado en <span className="text-zinc-300">Generative AI</span>, automatización de negocio y diseño de experiencias.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
                <Link href="#contact" className="px-8 py-4 bg-[#82ff1f] text-black font-bold rounded-full hover:bg-[#6ed617] transition-all flex items-center gap-2">
                  <Mail size={20} />
                  CONTACTO
                </Link>
                <Link href="https://linkedin.com/in/victortorres" target="_blank" className="px-8 py-4 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 transition-all border border-white/10 flex items-center gap-2">
                  <Linkedin size={20} />
                  LINKEDIN
                </Link>
                <Link href="/cv.pdf" className="px-8 py-4 bg-transparent text-zinc-400 font-bold rounded-full hover:text-white transition-all flex items-center gap-2 border border-white/5 hover:border-white/20">
                  <Download size={20} />
                  CV .PDF
                </Link>
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
        <ExpandableSection id="story" number="00" title="Mi Historia">
          <div className="space-y-6 text-lg text-zinc-300 font-light leading-relaxed">
            <p className="font-medium text-white text-xl">Organizo e impulso ideas, equipos y negocios.</p>
            <p>
              A lo largo de mi trayectoria he trabajado en <strong className="text-white">prácticamente todos los departamentos de una empresa</strong> —ventas, compras, contabilidad, logística, marketing y gerencia—, lo que me ha permitido desarrollar una visión global y muy práctica de cómo funcionan realmente las organizaciones y cuáles son sus necesidades operativas reales.
            </p>
            <p>
              Durante más de ocho años trabajé en marketing digital y ventas. En 2022 di un paso clave al asumir mi primer rol como <strong className="text-white">Project Manager y líder de procesos</strong> en una agencia de marketing, donde diseñé desde cero la estructura operativa, logrando <span className="text-[#82ff1f]">mejorar la eficiencia global en torno a un 30%</span>.
            </p>
            <p>
              Tras la pandemia me trasladé a Colombia sin un plan definido. Allí creé y gestioné múltiples emprendimientos propios que se convirtieron en un <strong className="text-white">auténtico máster práctico en negocio y ejecución bajo presión</strong>.
            </p>
            <p>
              Descubrí que mi fortaleza es la <strong className="text-white">capacidad para organizar el caos y mejorar sistemas</strong>. La irrupción de ChatGPT me llevó a especializarme en <span className="text-[#82ff1f]">Inteligencia Artificial aplicada</span>, integrándola de forma práctica en proyectos reales.
            </p>
            <p>
              De vuelta en España lideré la implementación de un ERP de Oracle y la estrategia GTM de una startup de IA. No soy un perfil puramente técnico, pero tampoco exclusivamente estratégico. Me sitúo en un punto intermedio que me permite <strong className="text-white">traducir necesidades de negocio en sistemas funcionales</strong>.
            </p>
            <p className="border-l-2 border-[#82ff1f] pl-4 italic text-zinc-400">
              Actualmente busco incorporarme como <strong className="text-white">Project Manager</strong> en una compañía donde pueda aportar esta experiencia híbrida y seguir creciendo en un entorno estable.
            </p>
          </div>
        </ExpandableSection>

        {/* --- MIS NÚMEROS --- */}
        <ExpandableSection id="numbers" number="01" title="Mis Números">
          <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:pb-0">
            <NumberCard className="min-w-[280px] md:min-w-0 snap-center" icon={<TrendingUp size={24} />} value="+1.2M" label="Impacto Total" description="Personas alcanzadas." />
            <NumberCard className="min-w-[280px] md:min-w-0 snap-center" icon={<Code size={24} />} value="+30" label="Webs & E-commerce" description="Desarrollados y lanzados." />
            <NumberCard className="min-w-[280px] md:min-w-0 snap-center" icon={<Lightbulb size={24} />} value="+20" label="Marcas Branding" description="Identidades corporativas creadas." />
            <NumberCard className="min-w-[280px] md:min-w-0 snap-center" icon={<Brain size={24} />} value="+10" label="Soluciones IA" description="Implementaciones en real." />
            <NumberCard className="min-w-[280px] md:min-w-0 snap-center" icon={<Workflow size={24} />} value="+40" label="Sistemas" description="Automatizaciones de procesos." />
            <NumberCard className="min-w-[280px] md:min-w-0 snap-center" icon={<Target size={24} />} value="+100k €" label="Presupuesto" description="Gestionado en proyectos." />
          </div>
        </ExpandableSection>

        {/* --- EXPERIENCIA IA --- */}
        <ExpandableSection id="ia" number="03" title="Experiencia IA">
          <div className="space-y-8">
            <p className="text-zinc-300 text-lg font-light leading-relaxed mb-6">
              Mi enfoque con la IA va más allá del <i>hype</i>. He pasado de diseñar la estrategia de startups deep-tech a "bajar al barro" para programar agentes en n8n. Entiendo el ciclo completo: <strong className="text-white">desde la venta y la estrategia, hasta la implementación técnica y el despliegue.</strong>
            </p>

            <div className="grid grid-cols-1 gap-6">
              {/* Aether Labs - The Technical Hub */}
              {/* Aether Labs - The Technical Hub */}
              <ProjectRow
                title="Aether Labs"
                role="Founder & AI Engineer"
                desc="Mi laboratorio de implementación técnica. Desarrollo de agentes de voz autónomos para Call Centers (integrando Twilio + Vapi/Retell). Orquestación de workflows complejos en n8n para automatizar procesos de research y generación de contenido SEO-friendly masivo. Conexión de LLMs con APIs externas (Gmail, Calendar, CRMs)."
                tags={["Vapi / Retell", "n8n Workflows", "OpenAI API", "Function Calling"]}
                link="https://aetherlabs.es"
                icon={<Brain size={24} />}
              />

              {/* Futura AI - The Product Launch */}
              <ProjectRow
                title="Futura AI (by Konektor)"
                role="Product Lead & Strategy"
                desc="Lideré la creación de esta marca desde cero. Realicé el benchmark técnico de proveedores de voz (ElevenLabs vs PlayHT vs Rime), definí el stack tecnológico y construí la oferta comercial B2B. Diseñé los funnels de venta y los scripts para vender 'empleados digitales' a empresas tradicionales."
                tags={["Product Design", "Tech Benchmark", "B2B Sales", "Voice Agents"]}
                icon={<Mic size={24} />}
              />

              {/* Suma Salut - End-to-End Implementation */}
              <ProjectRow
                title="Suma Salut - Clínica"
                role="Full-Stack AI Implementation"
                desc="Desarrollo e integración de un asistente virtual para triaje médico y cita previa. Ingeniería de prompts avanzada para dotar al bot de empatía y seguridad clínica. Conexión con WhatsApp Business API y automatización de la agenda de doctores mediante webhooks."
                tags={["Chatbase / Voiceflow", "Prompt Engineering", "WhatsApp API", "Medical"]}
                icon={<MessageSquare size={24} />}
              />

              {/* Kmeleon - The Strategy */}
              <ProjectRow
                title="Kmeleon Startup"
                role="CMO & AI Strategist"
                desc="Traducción de capacidades técnicas complejas (Sistemas Multi-Agente) a una narrativa de negocio comprensible para clientes Enterprise. Lideré la estrategia GTM para posicionar la startup en el mercado de la IA corporativa, trabajando codo a codo con ingenieros ex-Microsoft para alinear producto y mercado."
                tags={["GTM Strategy", "Enterprise AI", "Deep Tech Narrative"]}
                icon={<TrendingUp size={24} />}
              />

              {/* 94 Music - Applied AI at Scale */}
              <ProjectRow
                title="94 Music - AI Content Engine"
                role="Automation Architect"
                desc="Implementación de IA para escalar un medio digital con recursos mínimos. Uso de herramientas de 'long-to-short' video (OpusClip), upscaling de vídeo con IA (Topaz) y generación de assets visuales (Midjourney). Logré un sistema de publicación diaria automatizada alcanzando +5M de visualizaciones."
                tags={["Content Automation", "Video AI", "Viral Growth"]}
                icon={<Video size={24} />}
              />
            </div>

            {/* --- DESARROLLOS IA PROPIOS --- */}
            <div className="mt-12 pt-8 border-t border-white/5">
              <h3 className="text-xl font-bold text-[#82ff1f] mb-6 flex items-center gap-2">
                <Zap size={20} /> Desarrollos IA Propios
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Nuria - Voice Agent */}
                <div className="p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-[#82ff1f]/10 rounded-lg">
                      <Mic size={18} className="text-[#82ff1f]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">Núria - Agente Rostisseria</h4>
                      <p className="text-xs text-zinc-400">Agente telefónico que gestiona pedidos retail, consulta stock en tiempo real y registra pedidos automáticamente</p>
                    </div>
                  </div>
                </div>

                {/* Jason ClickUp Manager */}
                <div className="p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-[#82ff1f]/10 rounded-lg">
                      <ClipboardList size={18} className="text-[#82ff1f]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">Jason ClickUp Manager</h4>
                      <p className="text-xs text-zinc-400">Agente de productividad que crea tareas en ClickUp por voz/texto, asigna responsables y automatiza proyectos</p>
                    </div>
                  </div>
                </div>

                {/* UGC Avatar Studio */}
                <div className="p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-[#82ff1f]/10 rounded-lg">
                      <Users size={18} className="text-[#82ff1f]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">UGC Avatar Studio</h4>
                      <p className="text-xs text-zinc-400">Generador de avatares consistentes fotorrealistas para marcas, thumbnails y creatividades estáticas</p>
                    </div>
                  </div>
                </div>

                {/* Editor de Fotos IA */}
                <div className="p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-[#82ff1f]/10 rounded-lg">
                      <Palette size={18} className="text-[#82ff1f]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">Editor de Fotos IA</h4>
                      <p className="text-xs text-zinc-400">Web app de edición: eliminación de objetos/fondos (Inpainting), restauración y mejora de calidad en segundos</p>
                    </div>
                  </div>
                </div>

                {/* Gestor de Partículas 3D */}
                <div className="p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-[#82ff1f]/10 rounded-lg">
                      <Zap size={18} className="text-[#82ff1f]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">Gestor de Partículas 3D</h4>
                      <p className="text-xs text-zinc-400">Control de partículas con las manos (Webcam). Vision Tech en el navegador con experiencia visual reactiva</p>
                    </div>
                  </div>
                </div>

                {/* Chleopatra - Historias IA */}
                <div className="p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-[#82ff1f]/10 rounded-lg">
                      <Brain size={18} className="text-[#82ff1f]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">Chleopatra - Historias IA</h4>
                      <p className="text-xs text-zinc-400">Plataforma EdTech que genera historias visuales educativas con voces clonadas y vídeos sintéticos</p>
                    </div>
                  </div>
                </div>

                {/* Aura Tasks AI */}
                <div className="p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-[#82ff1f]/10 rounded-lg">
                      <Target size={18} className="text-[#82ff1f]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">Aura Tasks AI</h4>
                      <p className="text-xs text-zinc-400">Super app de productividad con NLP avanzado, CTAs inteligentes y planificación automática por IA</p>
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
                      <h4 className="font-bold text-white text-sm mb-1">Musikeeo</h4>
                      <p className="text-xs text-zinc-400">Red social vertical para músicos: marketplace de segunda mano, servicios y pedidos para conciertos</p>
                    </div>
                  </div>
                </div>

                {/* Numa - Suma Salut */}
                <div className="p-5 bg-black/40 rounded-2xl border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-[#82ff1f]/10 rounded-lg">
                      <MessageSquare size={18} className="text-[#82ff1f]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">Numa - Asistente Suma Salut</h4>
                      <p className="text-xs text-zinc-400">Agente de atención al paciente 24/7: gestión de citas, triaje inteligente y resolución de dudas médicas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- CAPACIDADES TÉCNICAS (Learnings) --- */}
            <div className="bg-[#white]/5 border border-white/10 rounded-2xl p-6 mt-8">
              <h3 className="text-xl font-bold text-[#82ff1f] mb-4 flex items-center gap-2">
                <Brain size={20} /> Stack & Capacidades (Ready to Deploy)
              </h3>
              <p className="text-zinc-400 mb-6 text-sm">
                Más allá de los proyectos entregados, mantengo una formación continua y práctica en tecnologías emergentes. Estas son capacidades que he validado en entornos de prueba y estoy listo para implementar:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                  <h4 className="font-bold text-white mb-1">RAG (Retrieval Augmented Generation)</h4>
                  <p className="text-xs text-zinc-400">Implementación de bases de conocimiento vectoriales (Pinecone) para que los agentes respondan con datos privados de la empresa sin alucinar.</p>
                </div>
                <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                  <h4 className="font-bold text-white mb-1">Agentic Workflows</h4>
                  <p className="text-xs text-zinc-400">Diseño de sistemas donde un LLM "planificador" desglosa tareas complejas y asigna subtareas a agentes especializados (Investigador, Redactor, Revisor).</p>
                </div>
                <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                  <h4 className="font-bold text-white mb-1">Fine-Tuning</h4>
                  <p className="text-xs text-zinc-400">Entrenamiento ligero de modelos (OpenAI/Replicate) para adaptar el estilo y tono de respuesta a marcas específicas.</p>
                </div>
                <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                  <h4 className="font-bold text-white mb-1">Local LLMs & Privacy</h4>
                  <p className="text-xs text-zinc-400">Despliegue de modelos open-source (Llama 3, Mistral) para entornos donde la privacidad de los datos es crítica.</p>
                </div>
              </div>
            </div>
          </div>
        </ExpandableSection>

        {/* --- TRAYECTORIA --- */}
        <ExpandableSection id="career" number="02" title="Trayectoria Profesional">
          <div className="relative border-l border-white/10 ml-3 space-y-12 pl-8">
            <TimelineItem
              year="2025 - Present"
              title="Autónomo"
              role="Consultor de Negocio & IA"
              desc="Gestión de eventos de música en vivo, implementación de soluciones de IA para empresas y consultoría estratégica de marketing."
            />
            <TimelineItem
              year="2023 - 2025"
              title="Kmeleon"
              role="CMO & Marketing AI"
              desc="• Marketing & Sales (2025): IA, estrategias GTM y automatización. • CMO (2023-24): Estrategia de marca internacional."
            />
            <TimelineItem
              year="2024"
              title="DisrupTT"
              role="Netsuite Oracle Project Manager"
              desc="Oracle Netsuite implementation leadership. Coordinación de equipos y estrategias de marketing."
            />
            <TimelineItem
              year="2023 - 2024"
              title="Konektor"
              role="Growth Partner & BizDev"
              desc="• Growth Partner (2024): Expansión de negocio. • Business Dev (2023): Estrategias de venta consultiva con IA."
            />
            <TimelineItem
              year="2022 - 2023"
              title="Eme Growth Agency"
              role="Web / App Project Manager"
              desc="Liderazgo de equipos multidisciplinarios. Diseño web, automatización y relación con cliente (CSS, UX)."
            />
            <TimelineItem
              year="2021 - 2022"
              title="Growbox Digital"
              role="Marketing Account Manager"
              desc="Optimización del embudo de conversión, gestión de CRM y marketing automatizado."
            />
            <TimelineItem
              year="2020 - 2021"
              title="HTW Spain"
              role="Responsable de Marketing"
              desc="Creación de marca Emelson (éxito nacional). Diseño de catálogos y gestión web."
            />
            <TimelineItem
              year="2019 - 2020"
              title="Denetic"
              role="Business Manager"
              desc="Coordinación de equipos, CRM y desarrollo empresarial."
            />
            <TimelineItem
              year="2017 - 2019"
              title="Mondo Convenienza"
              role="Jefe de logística"
              desc="Coordinación y liderazgo de equipos de trabajo logístico."
            />
            <TimelineItem
              year="2016 - 2017"
              title="Reauxi"
              role="Marketing & Compras"
              desc="Gestión de bases de datos, negociación y atención al cliente."
            />
          </div>
        </ExpandableSection>

        {/* --- HITOS Y LOGROS --- */}
        <ExpandableSection id="achievements" number="04" title="Hitos & Logros">
          <AchievementsCarousel items={achievements} />
        </ExpandableSection>

        {/* --- SKILLS --- */}
        <ExpandableSection id="skills" number="05" title="Skills">

          {/* Core Skills - Destacados */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-zinc-400 mb-6 uppercase tracking-wider">Core Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

              {/* Project Management */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#82ff1f]/10 to-transparent border-2 border-[#82ff1f]/30 relative overflow-hidden group hover:border-[#82ff1f]/50 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#82ff1f]/10 blur-[40px] rounded-full"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-[#82ff1f] rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-[#82ff1f]/20">
                    <Target size={20} className="text-black" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white mb-2">Project Management</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">Visión estratégica para liderar equipos y traducir objetivos de negocio en sistemas funcionales.</p>
                </div>
              </div>

              {/* Marketing Strategy */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#82ff1f]/10 to-transparent border-2 border-[#82ff1f]/30 relative overflow-hidden group hover:border-[#82ff1f]/50 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#82ff1f]/10 blur-[40px] rounded-full"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-[#82ff1f] rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-[#82ff1f]/20">
                    <TrendingUp size={20} className="text-black" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white mb-2">Marketing Strategy</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">Diseño de estrategias Go-to-Market y Growth Hacking para escalar productos digitales.</p>
                </div>
              </div>

              {/* Business Development */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#82ff1f]/10 to-transparent border-2 border-[#82ff1f]/30 relative overflow-hidden group hover:border-[#82ff1f]/50 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#82ff1f]/10 blur-[40px] rounded-full"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-[#82ff1f] rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-[#82ff1f]/20">
                    <Briefcase size={20} className="text-black" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white mb-2">Business Development</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">Identificación de oportunidades, cierre de ventas B2B y construcción de relaciones estratégicas.</p>
                </div>
              </div>

              {/* AI Strategy & Execution */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#82ff1f]/10 to-transparent border-2 border-[#82ff1f]/30 relative overflow-hidden group hover:border-[#82ff1f]/50 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#82ff1f]/10 blur-[40px] rounded-full"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-[#82ff1f] rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-[#82ff1f]/20">
                    <Brain size={20} className="text-black" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white mb-2">AI Strategy & Execution</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">De la estrategia a la implementación técnica real. Ciclo completo de proyectos de IA aplicada.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Subcategorías de Skills */}
          <div className="space-y-8">

            {/* Gestión de Proyectos y Metodologías */}
            <div>
              <h3 className="text-sm font-bold text-[#82ff1f] mb-4 flex items-center gap-2">
                <ClipboardList size={16} /> Gestión de Proyectos y Metodologías
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Scrum</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Kanban</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Planificación y seguimiento</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Gestión de riesgos</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Coordinación de equipos</p>
                </div>
              </div>
            </div>

            {/* Cloud & IaC */}
            <div>
              <h3 className="text-sm font-bold text-[#82ff1f] mb-4 flex items-center gap-2">
                <Globe size={16} /> Cloud & IaC
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Paradigmas Cloud</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Terraform / IaC</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Despliegue y APIs</p>
                </div>
              </div>
            </div>

            {/* IA Conversacional y Automatización */}
            <div>
              <h3 className="text-sm font-bold text-[#82ff1f] mb-4 flex items-center gap-2">
                <MessageSquare size={16} /> IA Conversacional y Automatización
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">ChatBase</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">ElevenLabs / Retell</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">n8n, Make, Zapier</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Vapi</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Voiceflow</p>
                </div>
              </div>
            </div>

            {/* Desarrollo y Despliegues Operativos */}
            <div>
              <h3 className="text-sm font-bold text-[#82ff1f] mb-4 flex items-center gap-2">
                <Code size={16} /> Desarrollo y Despliegues Operativos
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Next.js</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Node.js</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">GitHub</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Integraciones API</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Version Control</p>
                </div>
              </div>
            </div>

            {/* Habilidades IA Avanzadas */}
            <div>
              <h3 className="text-sm font-bold text-[#82ff1f] mb-4 flex items-center gap-2">
                <Brain size={16} /> Habilidades IA Avanzadas
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Prompt Engineering</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">RAG & Vector DBs</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Fine-Tuning</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Agentic Workflows</p>
                </div>
                <div className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#82ff1f]/20 transition-all">
                  <p className="text-sm font-medium text-white">Local LLMs</p>
                </div>
              </div>
            </div>

          </div>
        </ExpandableSection>

        {/* --- FREELANCE & EMPRENDIMIENTO --- */}
        <ExpandableSection id="freelance" number="07" title="Emprendimiento & Freelance">
          <div className="space-y-12">

            {/* Proyectos Propios */}
            <div>
              <h3 className="text-xl font-bold text-[#82ff1f] mb-6 flex items-center gap-2">
                <Target size={20} /> Proyectos Propios & Startups
              </h3>
              <div className="flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory md:grid md:grid-cols-2 md:pb-0">
                <ProjectRow
                  className="min-w-[85vw] md:min-w-0 snap-center"
                  title="Aether Labs"
                  role="Founder"
                  desc="Consultora de Inteligencia Artificial y automatización. Mi vehículo principal para materializar soluciones técnicas: agentes de voz, chatbots y workflows complejos para empresas."
                  tags={["AI Agency", "Automation", "B2B"]}
                  link="https://aetherlabs.es"
                  icon={<Brain size={24} />}
                />
                <ProjectRow
                  className="min-w-[85vw] md:min-w-0 snap-center"
                  title="94 Music"
                  role="Founder & Community"
                  desc="Medio digital y agencia. Creación de contenido viral (+5M views, 16k comunidad) y gestión de booking. He organizado y sonorizado más de 100 eventos musicales."
                  tags={["Music Agency", "Viral Content", "Events"]}
                  link="https://instagram.com/the94music"
                  icon={<Music size={24} />}
                />
                <ProjectRow
                  className="min-w-[85vw] md:min-w-0 snap-center"
                  title="Condor Music"
                  role="Founder & Manager"
                  desc="Agencia 360º en Colombia. Gestioné la carrera de 4 artistas (La Payara, Savahna...), logrando giras de medios en TV/Radio nacional, producción de videoclips y conciertos."
                  tags={["Management", "Colombia", "Production"]}
                  icon={<Mic size={24} />}
                />
                <ProjectRow
                  className="min-w-[85vw] md:min-w-0 snap-center"
                  title="El Hombre de los Anillos"
                  role="Founder"
                  desc="Ecommerce de joyería masculina creado a coste cero. Estrategia de crecimiento orgánico que permitió ventas internacionales en 8 países y sostener el negocio."
                  tags={["Ecommerce", "Bootstrapping", "Sales"]}
                  icon={<ShoppingBag size={24} />}
                />
                <ProjectRow
                  className="min-w-[85vw] md:min-w-0 snap-center"
                  title="Lady Jarana"
                  role="Founder & Musician"
                  desc="Banda de Pop-Rock y Rumba 'Millenial'. Proyecto nacido en 2025: creación de marca, repertorio y cierre de 8 conciertos en los primeros meses de vida."
                  tags={["Music Band", "Entertainment", "Live"]}
                  icon={<Music size={24} />}
                />
                <ProjectRow
                  className="min-w-[85vw] md:min-w-0 snap-center"
                  title="Cataleya Flamenco"
                  role="Co-Founder"
                  desc="Fusión flamenco-latina para el sector Premium/Corporativo. Actuaciones en eventos de alto perfil (ej. Boda Andrea Valdiri). Repertorio a medida y elegancia."
                  tags={["Events", "Flamenco", "Premium"]}
                  icon={<Music size={24} />}
                />
              </div>
            </div>

            {/* Freelance */}
            <div>
              <h3 className="text-xl font-bold text-[#82ff1f] mb-6 flex items-center gap-2">
                <Briefcase size={20} /> Consultoría & Freelance
              </h3>
              <div className="flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory md:grid md:grid-cols-1 md:pb-0">
                <ProjectRow
                  className="min-w-[85vw] md:min-w-0 snap-center"
                  title="Konektor"
                  role="Growth & AI Partner"
                  desc="Mano derecha de dirección. Lideré el lanzamiento de 'Futura AI' (agentes de voz): benchmark, producto y funnels. Captación B2B para Metaverso y ventas consultivas."
                  tags={["Growth Strategy", "AI Sales", "Metaverso"]}
                  icon={<Briefcase size={24} />}
                />
                <ProjectRow
                  className="min-w-[85vw] md:min-w-0 snap-center"
                  title="Soma"
                  role="Launch Strategist"
                  desc="Estrategia integral para infoproducto: creación de contenido diario de alta conversión, llenado de eventos presenciales y cierre de ventas High-Ticket."
                  tags={["Launch", "Content", "Sales Closing"]}
                  icon={<Megaphone size={24} />}
                />
                <ProjectRow
                  className="min-w-[85vw] md:min-w-0 snap-center"
                  title="Deodi"
                  role="Business Consultant"
                  desc="Expansión 360º de negocio físico. Creación de ecommerce de cosmética (web+proveedores), rebranding completo del local y estrategia de captación digital."
                  tags={["Digital Transformation", "Ecommerce", "Branding"]}
                  icon={<Palette size={24} />}
                />
                <ProjectRow
                  className="min-w-[85vw] md:min-w-0 snap-center"
                  title="Suma Salut"
                  role="Tech & Design"
                  desc="Modernización operativa. Optimización web, diseño de identidad corporativa y desarrollo de chatbot IA para automatizar citas y atención al paciente."
                  tags={["Web Dev", "AI Chatbot", "Design"]}
                  icon={<Database size={24} />}
                />
              </div>
            </div>

          </div>
        </ExpandableSection>

        {/* --- STACK --- */}
        <ExpandableSection id="stack" number="06" title="Stack Tecnológico">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* AI */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#82ff1f] uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1f]"></span> AI & Automation
              </h3>
              <div className="flex flex-wrap gap-2">
                <TechBadge name="n8n" />
                <TechBadge name="Make" />
                <TechBadge name="OpenAI API" />
                <TechBadge name="Anthropic Claude" />
                <TechBadge name="Voiceflow" />
                <TechBadge name="Midjourney" />
                <TechBadge name="Google Vertex AI" />
                <TechBadge name="Gemini 1.5 Pro" />
                <TechBadge name="LangChain" />
              </div>
            </div>

            {/* PM */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#82ff1f] uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1f]"></span> Project Management
              </h3>
              <div className="flex flex-wrap gap-2">
                <TechBadge name="ClickUp" />
                <TechBadge name="Notion" />
                <TechBadge name="Jira" />
                <TechBadge name="Asana" />
                <TechBadge name="Linear" />
                <TechBadge name="Trello" />
                <TechBadge name="NetSuite" />
                <TechBadge name="Slack" />
                <TechBadge name="Zapier" />
                <TechBadge name="Airtable" />
              </div>
            </div>

            {/* Marketing */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#82ff1f] uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1f]"></span> Growth & Marketing
              </h3>
              <div className="flex flex-wrap gap-2">
                <TechBadge name="HubSpot" />
                <TechBadge name="Salesforce" />
                <TechBadge name="Google Analytics 4" />
                <TechBadge name="Semrush" />
                <TechBadge name="Meta Ads" />
                <TechBadge name="Google Ads" />
                <TechBadge name="TikTok Ads" />
                <TechBadge name="YouTube" />
                <TechBadge name="LinkedIn Sales Nav" />
              </div>
            </div>

            {/* Code */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#82ff1f] uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1f]"></span> Design & Code
              </h3>
              <div className="flex flex-wrap gap-2">
                <TechBadge name="Next.js" />
                <TechBadge name="React" />
                <TechBadge name="Tailwind CSS" />
                <TechBadge name="TypeScript" />
                <TechBadge name="Node.js" />
                <TechBadge name="Figma" />
                <TechBadge name="Webflow" />
                <TechBadge name="Vercel" />
                <TechBadge name="Supabase" />
                <TechBadge name="Framer" />
                <TechBadge name="Shopify" />
                <TechBadge name="WordPress" />
              </div>
            </div>
          </div>
        </ExpandableSection>

        {/* --- QUÉ BUSCO --- */}
        <ExpandableSection id="seeking" number="08" title="Mis Objetivos">
          <div className="max-w-4xl space-y-8 text-lg text-zinc-300 font-light leading-relaxed">
            <p>
              Llevo mucho tiempo trabajando por mi cuenta. El camino del emprendedor solitario curte, pero también agota. Ahora busco un cambio de etapa: <strong className="text-white">busco hogar</strong>.
            </p>
            <p>
              Quiero una empresa donde <span className="text-[#82ff1f]">estabilizarme a largo plazo</span> (años, no meses). Un lugar donde no me limite a cumplir tickets, sino donde pueda aportar mi visión, tomar la iniciativa y realmente sentir el proyecto como propio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-[#white]/5 border border-dashed border-white/10 hover:border-[#82ff1f]/30 transition-all">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  🚀 Startup
                </h4>
                <p className="text-sm">
                  Un proyecto que necesite a alguien todoterreno para <strong>impulsar el crecimiento</strong>, poner orden en el caos inicial y escalar operaciones.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#82ff1f]/5 border border-[#82ff1f]/20 hover:bg-[#82ff1f]/10 transition-all">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  🏢 Empresa Consolidada
                  <span className="text-[10px] bg-[#82ff1f] text-black px-2 py-0.5 rounded-full font-bold uppercase">Preferible</span>
                </h4>
                <p className="text-sm text-white">
                  Un entorno estable donde pueda encargarme de la <strong>operativa interna</strong>, optimizar procesos y asegurar la eficiencia. Donde se valore la resolución y la autonomía.
                </p>
              </div>
            </div>

            <p className="italic text-zinc-400 border-l-2 border-[#82ff1f] pl-4">
              "Busco algo más que un empleo; busco un equipo, una cultura y una 'familia' profesional con la que crecer."
            </p>
          </div>
        </ExpandableSection>

        {/* --- CONTACT CTA --- */}
        <section id="contact" className="py-20 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]"></div>
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
                <span className="text-[#82ff1f] text-sm font-bold tracking-wider uppercase">Disponible para Nuevos Retos</span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-heading font-light text-white mb-6 tracking-tight">
                Hablemos de tu proyecto
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                ¿Buscas alguien que entienda tanto la estrategia como la ejecución? Conectemos.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
              >
                <h3 className="text-2xl font-heading font-medium text-white mb-6">Envíame un mensaje</h3>
                <form
                  action="https://formsubmit.co/victortorresa94@gmail.com"
                  method="POST"
                  className="space-y-4"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://vtorres.net?submitted=true" />
                  <input type="hidden" name="_subject" value="Nuevo contacto desde vtorres.net" />

                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 focus:border-[#82ff1f]/50 focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 focus:border-[#82ff1f]/50 focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Empresa (opcional)</label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 focus:border-[#82ff1f]/50 focus:outline-none transition-colors"
                      placeholder="Tu empresa"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Mensaje</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-500 focus:border-[#82ff1f]/50 focus:outline-none transition-colors resize-none"
                      placeholder="Cuéntame en qué puedo ayudarte..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#82ff1f] text-black font-bold rounded-xl hover:bg-[#6ed617] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#82ff1f]/20"
                  >
                    <Mail size={20} />
                    Enviar mensaje
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
                      <h4 className="text-lg font-heading font-medium text-white mb-2">Email</h4>
                      <a
                        href="mailto:victortorresa94@gmail.com"
                        className="text-zinc-400 hover:text-[#82ff1f] transition-colors break-all"
                      >
                        victortorresa94@gmail.com
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
                      <h4 className="text-lg font-heading font-medium text-white mb-2">WhatsApp</h4>
                      <p className="text-zinc-400 mb-4 text-sm">Escríbeme directamente</p>
                      <a
                        href="https://wa.me/34644359569?text=Hola%20V%C3%ADctor,%20vengo%20de%20tu%20web%20y%20me%20gustar%C3%ADa%20hablar%20contigo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-[#82ff1f] hover:text-black hover:border-[#82ff1f] transition-all font-medium"
                      >
                        <MessageSquare size={18} />
                        Abrir WhatsApp
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
                      <h4 className="text-lg font-heading font-medium text-white mb-2">Llamada</h4>
                      <p className="text-zinc-400 mb-4 text-sm">Prefiero hablar por teléfono</p>
                      <a
                        href="tel:+34644359569"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-[#82ff1f] hover:text-black hover:border-[#82ff1f] transition-all font-medium"
                      >
                        <Mic size={18} />
                        +34 644 35 95 69
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
                      <h4 className="text-lg font-heading font-medium text-white mb-2">LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/in/v%C3%ADctor-torres-arana/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-[#82ff1f] transition-colors"
                      >
                        /in/victortorresarana
                      </a>
                    </div>
                  </div>
                </div>

              </motion.div>

            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="py-8 border-t border-white/5 bg-[#020202]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-zinc-600 text-sm">
                © 2025 Víctor Torres Arana. Built with Next.js & Tailwind.
              </p>
              <div className="flex items-center gap-6">
                <a href="#story" className="text-zinc-600 hover:text-white text-sm transition-colors">Inicio</a>
                <a href="/cv.pdf" className="text-zinc-600 hover:text-white text-sm transition-colors flex items-center gap-1">
                  <Download size={14} />
                  CV PDF
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div >

    </main >
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

function TechBadge({ name }: { name: string }) {
  return (
    <span className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-zinc-300 text-sm font-medium hover:text-black hover:bg-[#82ff1f] hover:border-[#82ff1f] transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(130,255,31,0.3)]">
      {name}
    </span>
  );
}



function ExpandableSection({ id, title, number, children, className }: { id?: string, title: string, number: string, children: React.ReactNode, className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id={id} className={`max-w-6xl mx-auto px-6 py-8 relative z-20 border-b border-white/5 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-between w-full pb-4 hover:border-[#82ff1f] transition-all duration-300 text-left"
      >
        <h2 className="font-heading text-3xl font-light text-white flex items-center gap-3">
          <span className="text-[#82ff1f]">{number}.</span> {title}
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
