import React from 'react';

interface VideoBlockProps
{
    url: string;
    caption?: string;
}

export const VideoBlock: React.FC<VideoBlockProps> = ( { url, caption } ) =>
{
    return (
        <figure className="mb-12">
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-900 aspect-video">
                <iframe
                    src={url}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={caption || "Project video"}
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
