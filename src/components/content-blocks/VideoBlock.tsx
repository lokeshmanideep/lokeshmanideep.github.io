import React from 'react';

interface VideoBlockProps
{
    url: string;
    caption?: string;
}

export const VideoBlock: React.FC<VideoBlockProps> = ( { url, caption } ) =>
{
    return (
        <figure className="mx-auto mb-12 max-w-4xl">
            <div className="aspect-video overflow-hidden rounded-[28px] border border-slate-200/80 bg-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.14)]">
                <iframe
                    src={url}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={caption || "Project video"}
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
