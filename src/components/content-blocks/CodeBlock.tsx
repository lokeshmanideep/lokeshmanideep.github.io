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
        <figure className="mb-12">
            <div className="rounded-xl overflow-hidden border border-gray-200">
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
                <figcaption className="text-center text-sm text-gray-500 mt-3">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
};
