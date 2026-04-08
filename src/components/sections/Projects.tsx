import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data/portfolio';
import type { Project } from '../../data/portfolio';
import { ProjectMedia } from '../ProjectMedia';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionTitle } from '../layout/SectionTitle';

const projectAccent = ( category: Project[ 'category' ] ) =>
{
    switch ( category )
    {
        case 'AI/ML':
            return 'from-sky-500/18 via-indigo-400/12 to-violet-300/18';
        case 'Full-stack':
            return 'from-emerald-400/18 via-cyan-300/10 to-sky-300/18';
        case 'Data Science':
            return 'from-amber-300/18 via-rose-200/10 to-pink-300/18';
        default:
            return 'from-slate-300/18 via-zinc-200/10 to-rose-200/18';
    }
};

export const Projects: React.FC = () =>
{
    const { projects } = portfolioData;
    const featuredProjects = projects.slice( 0, 3 );

    return (
        <SectionContainer
            id="projects"
            className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#f5f7fb_100%)]"
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(91,127,255,0.10),transparent_40%),radial-gradient(circle_at_top_right,rgba(244,182,194,0.16),transparent_34%)]" />

            <div className="relative mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                    <SectionTitle
                        subtitle="Selected work, presented with a little more breathing room and a calmer surface."
                    >
                        Featured Projects
                    </SectionTitle>
                </div>
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/40 transition-all duration-200 hover:border-slate-300 hover:text-slate-950"
                >
                    View All Projects
                    <span aria-hidden="true">→</span>
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {featuredProjects.map( ( project ) => (
                    <div
                        key={project.id}
                        className={`group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/85 shadow-[0_18px_60px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_26px_80px_rgba(15,23,42,0.08)] ${
                            project.id === featuredProjects[0]?.id ? 'md:col-span-2 md:p-8' : ''
                        }`}
                    >
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-900 via-sky-400 to-rose-200 opacity-80" />
                        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${ projectAccent( project.category ) } opacity-80`} />

                        <div className={`relative grid gap-0 ${ project.id === featuredProjects[0]?.id ? 'lg:grid-cols-[1.05fr_0.95fr]' : '' }`}>
                            <ProjectMedia
                                project={project}
                                className={`border-b border-slate-200/80 lg:border-b-0 lg:border-r lg:border-slate-200/80 ${
                                    project.id === featuredProjects[0]?.id ? 'h-64 lg:h-full lg:min-h-[23rem]' : 'h-64'
                                }`}
                            />

                            <div className="relative p-7 md:p-8">
                                <div className="mb-5 flex items-center justify-between gap-4">
                                    <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white shadow-sm shadow-slate-900/20">
                                        {project.category}
                                    </span>
                                    {project.date && (
                                        <span className="text-sm text-slate-500">{project.date}</span>
                                    )}
                                </div>

                                <h3 className="mb-4 text-2xl font-semibold tracking-tight text-slate-950 lg:text-[2rem] lg:leading-tight">
                                    {project.title}
                                </h3>

                                <p className="max-w-3xl text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
                                    {project.description}
                                </p>

                                <div className="mt-7 flex flex-wrap gap-2">
                                    {project.technologies.map( ( tech ) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors group-hover:border-slate-300 group-hover:bg-white"
                                        >
                                            {tech}
                                        </span>
                                    ) )}
                                </div>

                                <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-slate-200/80 pt-6 text-sm">
                                    {project.detailContent && (
                                        <Link
                                            to={`/projects/${ project.id }`}
                                            className="inline-flex items-center gap-2 font-semibold text-slate-950 transition-colors hover:text-slate-600"
                                        >
                                            Read More <span aria-hidden="true">→</span>
                                        </Link>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-600 transition-colors hover:text-slate-950"
                                        >
                                            View Code <span aria-hidden="true">→</span>
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-600 transition-colors hover:text-slate-950"
                                        >
                                            Live Demo <span aria-hidden="true">→</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) )}
            </div>
        </SectionContainer>
    );
};
