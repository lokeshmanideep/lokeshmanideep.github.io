import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { Navigation } from '../components/layout/Navigation';
import { portfolioData } from '../data/portfolio';

type CategoryFilter = "All" | "AI/ML" | "Full-stack" | "Data Science" | "Other";

export const Projects: React.FC = () =>
{
    const [ selectedCategory, setSelectedCategory ] = useState<CategoryFilter>( "All" );
    const { projects } = portfolioData;

    const categories: CategoryFilter[] = [ "All", "AI/ML", "Full-stack", "Data Science", "Other" ];

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter( ( p ) => p.category === selectedCategory );

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-white pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            All Projects
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl">
                            A comprehensive collection of my work across AI/ML, full-stack development, and data science.
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-12">
                        <div className="flex flex-wrap gap-3">
                            {categories.map( ( category ) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory( category )}
                                    className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${ selectedCategory === category
                                        ? 'bg-gray-900 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {category}
                                    <span className="ml-2 text-sm opacity-70">
                                        ({category === "All" ? projects.length : projects.filter( p => p.category === category ).length})
                                    </span>
                                </button>
                            ) )}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {filteredProjects.map( ( project ) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
                            >
                                {/* Category Badge */}
                                <div className="mb-4">
                                    <span className="px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-full">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                    {project.title}
                                </h3>

                                {/* Date */}
                                {project.date && (
                                    <p className="text-sm text-gray-500 mb-4">{project.date}</p>
                                )}

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Highlights */}
                                <ul className="space-y-2 mb-6">
                                    {project.highlights.map( ( highlight, index ) => (
                                        <li key={index} className="text-sm text-gray-600 flex items-start">
                                            <span className="mr-2 text-gray-400 mt-0.5">✓</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ) )}
                                </ul>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map( ( tech ) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg"
                                        >
                                            {tech}
                                        </span>
                                    ) )}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm"
                                        >
                                            View Code →
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm"
                                        >
                                            Live Demo →
                                        </a>
                                    )}
                                    {project.detailContent && (
                                        <Link
                                            to={`/projects/${ project.id }`}
                                            className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm ml-auto"
                                        >
                                            Read More →
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ) )}
                    </div>

                    {/* No Results */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">
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
