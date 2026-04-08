import React from 'react';

interface ImageBlockProps
{
    content: string;
    caption?: string;
}

export const ImageBlock: React.FC<ImageBlockProps> = ( { content, caption } ) =>
{
    return (
        <figure className="mx-auto mb-12 max-w-4xl">
            <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,252,0.92))] p-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                <img
                    src={content}
                    alt={caption || "Project image"}
                    className="h-96 w-full rounded-[20px] object-contain"
                />
            </div>
            {caption && (
                <figcaption className="mt-4 text-center text-sm text-slate-500">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
};
