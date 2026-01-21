import React from 'react';

interface ListBlockProps
{
    items: string[];
    caption?: string;
}

export const ListBlock: React.FC<ListBlockProps> = ( { items, caption } ) =>
{
    return (
        <div className="mb-8">
            {caption && (
                <p className="text-sm font-medium text-gray-700 mb-3">{caption}</p>
            )}
            <ul className="space-y-3">
                {items.map( ( item, index ) => (
                    <li key={index} className="flex items-start text-gray-700">
                        <span className="mr-3 text-gray-400 mt-1">•</span>
                        <span className="text-lg leading-relaxed">{item}</span>
                    </li>
                ) )}
            </ul>
        </div>
    );
};
