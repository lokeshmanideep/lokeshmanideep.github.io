import React from 'react';

interface ListBlockProps
{
    items: string[];
    caption?: string;
}

export const ListBlock: React.FC<ListBlockProps> = ( { items, caption } ) =>
{
    return (
        <div className="mx-auto mb-8 max-w-3xl rounded-[24px] border border-slate-200/80 bg-[rgba(248,250,252,0.72)] px-6 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            {caption && (
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">{caption}</p>
            )}
            <ul className="space-y-3">
                {items.map( ( item, index ) => (
                    <li key={index} className="flex items-start text-slate-600">
                        <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                        <span className="text-lg leading-8">{item}</span>
                    </li>
                ) )}
            </ul>
        </div>
    );
};
