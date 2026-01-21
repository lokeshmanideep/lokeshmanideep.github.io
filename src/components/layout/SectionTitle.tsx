import React from 'react';

interface SectionTitleProps
{
    children: React.ReactNode;
    subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ( { children, subtitle } ) =>
{
    return (
        <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-2">
                {children}
            </h2>
            {subtitle && (
                <p className="text-lg text-gray-500 mt-2">
                    {subtitle}
                </p>
            )}
        </div>
    );
};
