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
            <img
                src={content}
                alt={caption || "Project image"}
                className="w-full h-96 object-contain"
            />
            {caption && (
                <figcaption className="text-center text-sm text-gray-500 mt-3">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
};
