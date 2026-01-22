import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data/portfolio';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionTitle } from '../layout/SectionTitle';

export const Projects: React.FC = () =>
{
    const { projects } = portfolioData;
    // Show only first 2 projects as featured
    const featuredProjects = projects.slice( 0, 2 );

    return (
        <SectionContainer id="projects" className="bg-gray-50">
            <div className="flex items-center justify-between mb-12">
                <SectionTitle>Featured Projects</SectionTitle>
                <Link
                    to="/projects"
                    className="text-gray-900 hover:text-gray-600 font-medium transition-colors"
                >
                    View All Projects →
                </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {featuredProjects.map( ( project ) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
                    >
                        {/* Title */}
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            {project.title}
                        </h3>

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
                        <div className="flex gap-6 text-sm flex-wrap">
                            {project.detailContent && (
                                <Link
                                    to={`/projects/${ project.id }`}
                                    className="text-gray-900 hover:text-gray-600 font-semibold transition-colors"
                                >
                                    Read More →
                                </Link>
                            )}
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
                    </div>
                ) )}
            </div>
        </SectionContainer>
    );
};
