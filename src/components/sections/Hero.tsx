import React from 'react';
import { portfolioData } from '../../data/portfolio';

export const Hero: React.FC = () =>
{
    const { personal, socials } = portfolioData;

    const sections = [
        'Full-stack development',
        'Applied AI + RAG',
        'Product-minded engineering',
    ];

    return (
        <section className="relative isolate overflow-hidden px-6 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-36">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(92,120,255,0.12),transparent_24%),radial-gradient(circle_at_20%_20%,rgba(242,167,184,0.08),transparent_22%),radial-gradient(circle_at_80%_10%,rgba(183,226,211,0.12),transparent_20%)]"
            />
            <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-16">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 shadow-sm backdrop-blur">
                        Senior Software & AI Engineer
                    </div>

                    <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
                        {personal.name}
                    </h1>

                    <p className="mt-6 max-w-2xl text-2xl font-medium leading-tight text-slate-700 lg:text-3xl">
                        {personal.title}
                    </p>

                    <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
                        {personal.subtitle}
                    </p>

                    <div className="mt-10 space-y-5 max-w-3xl text-base leading-8 text-slate-600 lg:text-lg">
                        {personal.bio.map( ( paragraph, index ) => (
                            <p key={index}>{paragraph}</p>
                        ) )}
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href={`mailto:${ personal.email }`}
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition-all hover:border-slate-300 hover:bg-white hover:text-slate-950"
                        >
                            <svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {personal.email}
                        </a>
                        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
                            <svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {personal.location}
                        </span>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-3">
                        {socials.map( ( social ) => (
                            <a
                                key={social.platform}
                                href={social.url}
                                target={social.url.startsWith( 'mailto:' ) ? undefined : '_blank'}
                                rel={social.url.startsWith( 'mailto:' ) ? undefined : 'noopener noreferrer'}
                                className="group inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:bg-white hover:text-slate-950"
                            >
                                {social.platform === 'GitHub' && (
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                )}
                                {social.platform === 'LinkedIn' && (
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                )}
                                {social.platform === 'Google Scholar' && (
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
                                    </svg>
                                )}
                                {social.platform === 'Email' && (
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                )}
                                {social.platform}
                            </a>
                        ) )}
                    </div>
                </div>

                <aside className="relative">
                    <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-[var(--accent-soft)] blur-3xl" />
                    <div className="absolute -right-4 bottom-10 h-32 w-32 rounded-full bg-[rgba(242,167,184,0.12)] blur-3xl" />
                    <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-8 shadow-[var(--shadow)] backdrop-blur-xl">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex h-24 w-24 items-center justify-center rounded-[1.5rem] border border-slate-900/10 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-600 text-2xl font-semibold text-white shadow-xl shadow-slate-900/15">
                                LB
                            </div>
                            <div className="max-w-[12rem] text-right">
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                                    Based in
                                </p>
                                <p className="mt-2 text-lg font-medium text-slate-950">
                                    {personal.location}
                                </p>
                            </div>
                        </div>

                        <dl className="mt-10 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-[var(--line)] bg-white/75 p-4">
                                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    Experience
                                </dt>
                                <dd className="mt-3 text-2xl font-semibold text-slate-950">
                                    5+ years
                                </dd>
                            </div>
                            <div className="rounded-2xl border border-[var(--line)] bg-white/75 p-4">
                                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    Focus
                                </dt>
                                <dd className="mt-3 text-lg font-semibold leading-tight text-slate-950">
                                    {sections[ 0 ]}
                                </dd>
                            </div>
                            <div className="rounded-2xl border border-[var(--line)] bg-white/75 p-4">
                                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    Expertise
                                </dt>
                                <dd className="mt-3 text-lg font-semibold leading-tight text-slate-950">
                                    {sections[ 1 ]}
                                </dd>
                            </div>
                            <div className="rounded-2xl border border-[var(--line)] bg-white/75 p-4">
                                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    Style
                                </dt>
                                <dd className="mt-3 text-lg font-semibold leading-tight text-slate-950">
                                    {sections[ 2 ]}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </aside>
            </div>
        </section>
    );
};
