import React from 'react';

interface SectionTitleProps
{
    children: React.ReactNode;
    subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ( { children, subtitle } ) =>
{
    return (
        <div className="mb-12 lg:mb-14 max-w-3xl">
            <div className="mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent-rose)] to-[var(--accent-mint)] opacity-90" />
            <h2 className="text-3xl lg:text-4xl font-semibold leading-tight text-slate-950">
                {children}
            </h2>
            {subtitle && (
                <p className="mt-4 text-base lg:text-lg leading-8 text-slate-600">
                    {subtitle}
                </p>
            )}
        </div>
    );
};
