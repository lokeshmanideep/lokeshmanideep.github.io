import React from 'react';
import { portfolioData } from '../../data/portfolio';

export const Footer: React.FC = () =>
{
    const { personal, socials } = portfolioData;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="px-6 pb-10 pt-6 lg:px-8 lg:pb-12">
            <div className="mx-auto max-w-7xl rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] px-6 py-8 shadow-[var(--shadow)] backdrop-blur-xl lg:px-10 lg:py-10">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                            Portfolio
                        </p>
                        <p className="mt-3 text-lg font-semibold text-slate-950">
                            {personal.name}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                            {personal.email}
                        </p>
                        <p className="mt-1 text-sm leading-7 text-slate-500">
                            {personal.location}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {socials.map( ( social ) => (
                            <a
                                key={social.platform}
                                href={social.url}
                                target={social.url.startsWith( 'mailto:' ) ? undefined : '_blank'}
                                rel={social.url.startsWith( 'mailto:' ) ? undefined : 'noopener noreferrer'}
                                className="inline-flex items-center rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-white hover:text-slate-950"
                            >
                                {social.platform}
                            </a>
                        ) )}
                    </div>
                </div>

                <div className="mt-8 border-t border-[var(--line)] pt-6 text-center text-sm text-slate-500">
                    <p>© {currentYear} {personal.name}. Built with a calm, editorial rhythm.</p>
                </div>
            </div>
        </footer>
    );
};
