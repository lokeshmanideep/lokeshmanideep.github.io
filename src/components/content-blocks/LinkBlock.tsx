import React from 'react';

interface LinkBlockProps
{
    url: string;
    content: string;
    caption?: string;
}

export const LinkBlock: React.FC<LinkBlockProps> = ( { url, content, caption } ) =>
{
    return (
        <div className="mb-8">
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 bg-white"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                            {content}
                        </p>
                        {caption && (
                            <p className="text-sm text-gray-500 mt-1">{caption}</p>
                        )}
                    </div>
                    <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </div>
            </a>
        </div>
    );
};
