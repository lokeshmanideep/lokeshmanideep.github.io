import React from 'react';

interface SectionContainerProps
{
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ( {
    children,
    id,
    className = ''
} ) =>
{
    return (
        <section id={id} className={`relative isolate overflow-hidden py-20 lg:py-24 scroll-mt-28 ${ className }`}>
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(92,120,255,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(242,167,184,0.06),transparent_24%)]"
            />
            <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
                <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] px-6 py-8 shadow-[var(--shadow)] backdrop-blur-xl lg:px-10 lg:py-12">
                    {children}
                </div>
            </div>
        </section>
    );
};
