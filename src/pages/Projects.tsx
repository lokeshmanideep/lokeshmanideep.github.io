import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectMedia } from '../components/ProjectMedia';
import { Footer } from '../components/layout/Footer';
import type { Project } from '../data/portfolio';
import { portfolioData } from '../data/portfolio';

type CategoryFilter = "All" | "AI/ML" | "Full-stack" | "Data Science" | "Other";

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
    const [ selectedCategory, setSelectedCategory ] = useState<CategoryFilter>( "All" );
    const { projects } = portfolioData;

    const categories: CategoryFilter[] = [ "All", "AI/ML", "Full-stack", "Data Science", "Other" ];
    const categoryCounts = categories.reduce( ( acc, category ) =>
    {
        acc[ category ] = category === "All"
            ? projects.length
            : projects.filter( ( project ) => project.category === category ).length;
        return acc;
    }, {} as Record<CategoryFilter, number> );

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter( ( p ) => p.category === selectedCategory );

    return (
        <>
            <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#f5f7fb_100%)] pt-24 pb-20">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top_left,rgba(91,127,255,0.10),transparent_35%),radial-gradient(circle_at_top_right,rgba(190,231,211,0.18),transparent_32%),radial-gradient(circle_at_50%_0,rgba(244,182,194,0.10),transparent_28%)]" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                        <div className="max-w-3xl">
                            <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 shadow-sm shadow-slate-200/40">
                                Curated Portfolio
                            </div>
                            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 lg:text-6xl lg:leading-[0.95]">
                                All Projects
                            </h1>
                            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl lg:leading-9">
                                A selected collection of systems, AI work, and full-stack projects.
                            </p>
                        </div>

                        <div className="rounded-[28px] border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.05)] backdrop-blur-sm">
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Projects</p>
                                    <p className="mt-2 text-3xl font-semibold text-slate-950">{projects.length}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Categories</p>
                                    <p className="mt-2 text-3xl font-semibold text-slate-950">{categories.length - 1}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Detail Views</p>
                                    <p className="mt-2 text-3xl font-semibold text-slate-950">
                                        {projects.filter( ( project ) => Boolean( project.detailContent ) ).length}
                                    </p>
                                </div>
                            </div>
                            <p className="mt-5 text-sm leading-6 text-slate-500">
                                The emphasis here is on hierarchy, soft surfaces, and focused reading rather than dense black-and-white blocks.
                            </p>
                        </div>
                    </div>

                    <div className="sticky top-20 z-20 mb-10 border-y border-slate-200/70 bg-[rgba(248,250,252,0.78)] py-4 backdrop-blur-md">
                        <div className="flex flex-wrap gap-3">
                            {categories.map( ( category ) => (
                                <button
                                    type="button"
                                    key={category}
                                    onClick={() => setSelectedCategory( category )}
                                    className={`inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${ selectedCategory === category
                                        ? 'border-slate-950 bg-slate-950 text-white shadow-lg shadow-slate-950/15'
                                        : 'border-slate-200 bg-white/90 text-slate-600 hover:border-slate-300 hover:text-slate-950'
                                        }`}
                                >
                                    {category}
                                    <span className="ml-2 text-xs opacity-70">
                                        ({categoryCounts[ category ]})
                                    </span>
                                </button>
                            ) )}
                        </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        {filteredProjects.map( ( project, index ) => (
                            <div
                                key={project.id}
                                className={`group relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-white/90 shadow-[0_18px_60px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_26px_80px_rgba(15,23,42,0.08)] ${ index === 0 ? 'lg:col-span-2' : ''
                                    }`}
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-900 via-sky-400 to-rose-200 opacity-80" />
                                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${ projectAccent( project.category ) } opacity-80`} />

                                <div className={`relative grid gap-0 ${ index === 0 ? 'lg:grid-cols-[1.05fr_0.95fr]' : '' }`}>
                                    <ProjectMedia
                                        project={project}
                                        className={`border-b border-slate-200/80 lg:border-b-0 lg:border-r lg:border-slate-200/80 ${ index === 0 ? 'h-64 lg:h-full lg:min-h-[23rem]' : 'h-64' }`}
                                    />

                                    <div className="relative p-7 lg:p-8">
                                        <div className="mb-5 flex items-center justify-between gap-4">
                                            <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white shadow-sm shadow-slate-900/20">
                                                {project.category}
                                            </span>
                                            {project.date && (
                                                <p className="text-sm text-slate-500">{project.date}</p>
                                            )}
                                        </div>

                                        <h3 className="text-2xl font-semibold tracking-tight text-slate-950 lg:text-[2rem] lg:leading-tight">
                                            {project.title}
                                        </h3>

                                        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
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
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-medium text-slate-600 transition-colors hover:text-slate-950"
                                                >
                                                    View Code <span aria-hidden="true">→</span>
                                                </a>
                                            )}
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-semibold text-slate-950 transition-colors hover:text-slate-700"
                                                >
                                                    Live Demo <span aria-hidden="true">→</span>
                                                </a>
                                            )}
                                            {project.detailContent && (
                                                <Link
                                                    to={`/projects/${ project.id }`}
                                                    className="ml-auto inline-flex items-center gap-2 font-semibold text-slate-950 transition-colors hover:text-slate-600"
                                                >
                                                    Read More <span aria-hidden="true">→</span>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) )}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-lg text-slate-500">
                                No projects found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};
