import { useMemo, useState } from 'react';
import type { Project } from '../data/portfolio';
import { getProjectMediaSources } from '../utils/projectMedia';

interface ProjectMediaProps {
    project: Project;
    className?: string;
}

export const ProjectMedia = ( { project, className = '' }: ProjectMediaProps ) =>
{
    const sources = useMemo( () => getProjectMediaSources( project ), [ project ] );
    const [ currentIndex, setCurrentIndex ] = useState( 0 );
    const currentSource = sources[ currentIndex ] || sources[ sources.length - 1 ];

    const advanceSource = () =>
    {
        if ( currentIndex < sources.length - 1 )
        {
            setCurrentIndex( currentIndex + 1 );
        }
    };

    return (
        <div className={`relative overflow-hidden bg-[rgba(248,250,252,0.72)] ${ className }`}>
            {currentSource.kind === 'embed' ? (
                <iframe
                    src={currentSource.src}
                    title={project.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <img
                    src={currentSource.src}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    onError={advanceSource}
                />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/14 via-transparent to-transparent" />
            {currentSource.kind === 'link' && (
                <span className="absolute left-4 top-4 inline-flex rounded-full border border-white/60 bg-white/78 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700 backdrop-blur">
                    {currentSource.label || 'Link Preview'}
                </span>
            )}
            {currentSource.kind === 'embed' && (
                <span className="absolute left-4 top-4 inline-flex rounded-full border border-white/50 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                    {currentSource.label || 'Embedded Media'}
                </span>
            )}
        </div>
    );
};
