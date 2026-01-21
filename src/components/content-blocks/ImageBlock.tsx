import React from 'react';

interface ImageBlockProps
{
    content: string;
    caption?: string;
}

export const ImageBlock: React.FC<ImageBlockProps> = ( { content, caption } ) =>
{
    return (
        <figure className="mb-12">
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                <img
                    src={content}
                    alt={caption || "Project image"}
                    className="w-full h-auto"
                />
            </div>
            {caption && (
                <figcaption className="text-center text-sm text-gray-500 mt-3">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
};
