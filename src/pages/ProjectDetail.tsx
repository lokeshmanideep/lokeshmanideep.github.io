import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CodeBlock } from '../components/content-blocks/CodeBlock';
import { ImageBlock } from '../components/content-blocks/ImageBlock';
import { LinkBlock } from '../components/content-blocks/LinkBlock';
import { ListBlock } from '../components/content-blocks/ListBlock';
import { TextBlock } from '../components/content-blocks/TextBlock';
import { VideoBlock } from '../components/content-blocks/VideoBlock';
import type { ContentBlock } from '../data/portfolio';
import { portfolioData } from '../data/portfolio';

export const ProjectDetail: React.FC = () =>
{
    const { projectId } = useParams<{ projectId: string }>();
    const project = portfolioData.projects.find( ( p ) => p.id === projectId );

    if ( !project )
    {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#f8fafc_0%,#f5f7fb_100%)] px-6">
                <div className="rounded-[28px] border border-slate-200/80 bg-white/85 px-8 py-10 text-center shadow-[0_18px_60px_rgba(15,23,42,0.05)] backdrop-blur-sm">
                    <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-950">
                        Project Not Found
                    </h1>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950"
                    >
                        <span aria-hidden="true">←</span>
                        Back to Portfolio
                    </Link>
                </div>
            </div>
        );
    }

    const renderContentBlock = ( block: ContentBlock, index: number ) =>
    {
        switch ( block.type )
        {
            case 'text':
                return <TextBlock key={index} content={block.content} />;
            case 'image':
                return (
                    <ImageBlock
                        key={index}
                        content={block.content}
                        caption={block.caption}
                    />
                );
            case 'video':
                return (
                    <VideoBlock
                        key={index}
                        url={block.url || block.content}
                        caption={block.caption}
                    />
                );
            case 'code':
                return (
                    <CodeBlock
                        key={index}
                        content={block.content}
                        language={block.language}
                        caption={block.caption}
                    />
                );
            case 'list':
                return (
                    <ListBlock
                        key={index}
                        items={block.items || []}
                        caption={block.caption}
                    />
                );
            case 'link':
                return (
                    <LinkBlock
                        key={index}
                        url={block.url || '#'}
                        content={block.content}
                        caption={block.caption}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#f5f7fb_100%)]">
            <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-48 bg-[radial-gradient(circle_at_top_left,rgba(91,127,255,0.10),transparent_34%),radial-gradient(circle_at_top_right,rgba(244,182,194,0.12),transparent_30%)]" />

            <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-[rgba(248,250,252,0.78)] backdrop-blur-md">
                <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm shadow-slate-200/40 transition-colors hover:border-slate-300 hover:text-slate-950"
                    >
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Back to Projects
                    </Link>
                </div>
            </nav>

            <article className="relative pt-28 pb-20 lg:pt-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                        <header className="max-w-3xl">
                            <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-white shadow-sm shadow-slate-900/20">
                                {project.category}
                            </span>

                            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 lg:text-6xl lg:leading-[0.95]">
                                {project.title}
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-slate-600 lg:text-xl lg:leading-9">
                                {project.description}
                            </p>

                            <div className="mt-7 flex flex-wrap gap-2">
                                {project.technologies.map( ( tech ) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600"
                                    >
                                        {tech}
                                    </span>
                                ) )}
                            </div>
                        </header>

                        <aside className="rounded-[28px] border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.05)] backdrop-blur-sm">
                            <div className="grid gap-5">
                                {project.date && (
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                                            Timeline
                                        </p>
                                        <p className="mt-2 text-base font-medium text-slate-900">
                                            {project.date}
                                        </p>
                                    </div>
                                )}

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                                        Focus
                                    </p>
                                    <p className="mt-2 text-base leading-7 text-slate-600">
                                        {project.highlights[ 0 ] || 'Selected work summary'}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                                        Links
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-3">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950"
                                            >
                                                View Code <span aria-hidden="true">→</span>
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-full border border-slate-900/15 bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                                            >
                                                Live Demo <span aria-hidden="true">→</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <section className="mt-10 rounded-[32px] border border-slate-200/80 bg-white/88 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.05)] backdrop-blur-sm lg:p-10">
                        {project.detailContent ? (
                            <div className="space-y-0">
                                {project.detailContent.map( ( block, index ) =>
                                    renderContentBlock( block, index )
                                )}
                            </div>
                        ) : (
                            <div className="py-16 text-center">
                                <p className="text-lg text-slate-500">
                                    Detailed project documentation coming soon.
                                </p>
                            </div>
                        )}
                    </section>
                </div>
            </article>
        </div>
    );
};
