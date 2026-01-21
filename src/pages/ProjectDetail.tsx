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
            <div className="min-h-screen flex items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Project Not Found
                    </h1>
                    <Link
                        to="/"
                        className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                    >
                        ← Back to Portfolio
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
        <div className="min-h-screen bg-white">
            {/* Header Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg shadow-sm z-50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8 py-4">
                    <Link
                        to="/"
                        className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
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
                        Back to Portfolio
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <article className="pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    {/* Project Header */}
                    <header className="mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {project.title}
                        </h1>

                        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        {project.date && (
                            <p className="text-sm text-gray-500 mb-6">{project.date}</p>
                        )}

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map( ( tech ) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg"
                                >
                                    {tech}
                                </span>
                            ) )}
                        </div>

                        {/* Links */}
                        {( project.githubUrl || project.liveUrl ) && (
                            <div className="flex gap-4">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                                    >
                                        View Code →
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                                    >
                                        Live Demo →
                                    </a>
                                )}
                            </div>
                        )}
                    </header>

                    {/* Content Blocks */}
                    {project.detailContent ? (
                        <div className="space-y-0">
                            {project.detailContent.map( ( block, index ) =>
                                renderContentBlock( block, index )
                            )}
                        </div>
                    ) : (
                        <div className="py-12 text-center">
                            <p className="text-gray-500 text-lg">
                                Detailed project documentation coming soon.
                            </p>
                        </div>
                    )}
                </div>
            </article>
        </div>
    );
};
