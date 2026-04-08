import React from 'react';
import ReactMarkdown from 'react-markdown';

interface TextBlockProps
{
    content: string;
}

export const TextBlock: React.FC<TextBlockProps> = ( { content } ) =>
{
    return (
        <div className="mx-auto mb-10 max-w-3xl">
            <ReactMarkdown
                components={{
                    h2: ( { children } ) => (
                        <h2 className="mt-14 mb-5 text-3xl font-semibold tracking-tight text-slate-950 lg:text-4xl">
                            {children}
                        </h2>
                    ),
                    h3: ( { children } ) => (
                        <h3 className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-slate-950">
                            {children}
                        </h3>
                    ),
                    p: ( { children } ) => (
                        <p className="mb-6 text-lg leading-8 text-slate-600">
                            {children}
                        </p>
                    ),
                    ul: ( { children } ) => (
                        <ul className="mb-6 space-y-3 pl-5 text-slate-600">
                            {children}
                        </ul>
                    ),
                    li: ( { children } ) => (
                        <li className="text-lg leading-8">{children}</li>
                    ),
                    strong: ( { children } ) => (
                        <strong className="font-semibold text-slate-950">{children}</strong>
                    ),
                    a: ( { children, href } ) => (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-sky-700 underline decoration-sky-300 decoration-1 underline-offset-4 transition-colors hover:text-sky-900"
                        >
                            {children}
                        </a>
                    ),
                    blockquote: ( { children } ) => (
                        <blockquote className="my-8 rounded-2xl border border-sky-100 bg-sky-50/70 px-6 py-5 text-slate-600">
                            <div className="text-sm uppercase tracking-[0.2em] text-sky-700">Note</div>
                            <div className="mt-3 space-y-4">{children}</div>
                        </blockquote>
                    ),
                    code: ( { children } ) => (
                        <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.92em] text-slate-800">
                            {children}
                        </code>
                    ),
                    pre: ( { children } ) => (
                        <pre className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950 p-5 text-slate-100 shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
                            {children}
                        </pre>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};
