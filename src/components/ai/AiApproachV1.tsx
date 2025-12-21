import React from 'react';
import { Shield, Lightbulb, Zap, Database, UserCheck, FileSearch, EyeOff, MessageSquare, Mic, GitMerge, Brain, Users, Target } from 'lucide-react';
import AutomationBlock from '@/components/ai/AutomationBlock';
import AccordionGroup from '@/components/procesos/AccordionGroup';

const iconMap: Record<string, any> = {
    Shield, Database, UserCheck, FileSearch, EyeOff,
    MessageSquare, Mic, Zap, GitMerge, Brain,
    Lightbulb, Users, Target
};

interface AiApproachV1Props {
    content: any;
}

const AiApproachV1: React.FC<AiApproachV1Props> = ({ content }) => {
    if (!content) return null;

    const items = [
        {
            id: 'automation',
            title: content.automation.title,
            subtitle: content.automation.subtitle,
            icon: Zap,
            component: <AutomationBlock content={content.automation} />
        },
        {
            id: 'approach',
            title: content.approach.title,
            subtitle: content.approach.subtitle,
            icon: Lightbulb,
            component: (
                <div className="space-y-12">
                    <div className="p-6 bg-[#82ff1f]/5 border border-[#82ff1f]/20 rounded-xl">
                        <p className="text-xl text-white font-light">{content.approach.manifesto}</p>
                    </div>
                    <div className="text-2xl md:text-3xl font-medium text-white">
                        {content.approach.statement}
                    </div>
                    <div className="space-y-8">
                        {content.approach.steps.map((step: any, i: number) => (
                            <div key={i} className="flex items-start gap-6 border-b border-white/5 pb-6 last:border-0">
                                <span className="text-[#82ff1f] font-mono text-sm mt-1">{step.step}</span>
                                <p className="text-xl text-zinc-300 font-light">{step.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="pt-8 text-center border-t border-white/5">
                        <p className="text-lg text-zinc-400 font-light">
                            No implanto herramientas de IA. <span className="text-white font-medium">Implanto nuevas formas de trabajar.</span>
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 'governance',
            title: content.governance.title,
            subtitle: content.governance.subtitle,
            icon: Shield,
            component: (
                <div className="space-y-12">
                    <div className="p-6 bg-[#82ff1f]/5 border border-[#82ff1f]/20 rounded-xl">
                        <p className="text-xl text-white font-light">{content.governance.definition}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {content.governance.cards.map((card: any, i: number) => {
                            const Icon = iconMap[card.icon] || Shield;
                            return (
                                <div
                                    key={i}
                                    className="p-6 bg-zinc-900/30 border border-white/5 rounded-xl hover:border-[#82ff1f]/30 transition-all space-y-4"
                                >
                                    <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-[#82ff1f]">
                                        <Icon size={24} />
                                    </div>
                                    <h4 className="text-xl font-medium text-white">{card.title}</h4>
                                    <ul className="space-y-2">
                                        {card.items && card.items.map((item: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-2 text-zinc-400 text-sm">
                                                <span className="text-[#82ff1f] mt-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                    <div className="p-8 bg-[#82ff1f] rounded-2xl text-black text-center">
                        <p className="text-lg font-medium leading-tight">"{content.governance.role}"</p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <AccordionGroup
            title="Mi Enfoque (Legacy v1)"
            items={items}
        />
    );
};

export default AiApproachV1;
