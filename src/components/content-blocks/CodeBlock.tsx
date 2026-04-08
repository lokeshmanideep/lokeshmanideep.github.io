import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps
{
    content: string;
    language?: string;
    caption?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ( {
    content,
    language = 'typescript',
    caption
} ) =>
{
    return (
        <figure className="mx-auto mb-12 max-w-4xl">
            <div className="overflow-hidden rounded-[28px] border border-slate-200/80 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <SyntaxHighlighter
                    language={language}
                    style={vscDarkPlus}
                    customStyle={{
                        margin: 0,
                        padding: '1.5rem',
                        fontSize: '0.875rem',
                        lineHeight: '1.5',
                    }}
                    showLineNumbers
                >
                    {content}
                </SyntaxHighlighter>
            </div>
            {caption && (
                <figcaption className="mt-4 text-center text-sm text-slate-500">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
};
