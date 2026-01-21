import React from 'react';
import ReactMarkdown from 'react-markdown';

interface TextBlockProps
{
    content: string;
}

export const TextBlock: React.FC<TextBlockProps> = ( { content } ) =>
{
    return (
        <div className="prose prose-gray max-w-none mb-8">
            <ReactMarkdown
                components={{
                    h2: ( { children } ) => (
                        <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
                            {children}
                        </h2>
                    ),
                    h3: ( { children } ) => (
                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                            {children}
                        </h3>
                    ),
                    p: ( { children } ) => (
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            {children}
                        </p>
                    ),
                    ul: ( { children } ) => (
                        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                            {children}
                        </ul>
                    ),
                    li: ( { children } ) => (
                        <li className="text-lg leading-relaxed">{children}</li>
                    ),
                    strong: ( { children } ) => (
                        <strong className="font-semibold text-gray-900">{children}</strong>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};
