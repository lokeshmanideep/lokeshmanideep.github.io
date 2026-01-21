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
        <section id={id} className={`py-20 ${ className }`}>
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};
