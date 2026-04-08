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
        <div className="mx-auto mb-8 max-w-3xl">
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[24px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,252,0.88))] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_24px_64px_rgba(15,23,42,0.08)]"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-lg font-medium text-slate-950 transition-colors group-hover:text-slate-700">
                            {content}
                        </p>
                        {caption && (
                            <p className="mt-2 text-sm leading-6 text-slate-500">{caption}</p>
                        )}
                    </div>
                    <svg
                        className="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-700"
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
