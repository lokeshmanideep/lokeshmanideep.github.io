import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionTitle } from '../layout/SectionTitle';

export const Experience: React.FC = () =>
{
    const { experience } = portfolioData;

    return (
        <SectionContainer id="experience" className="bg-white">
            <SectionTitle>Experience</SectionTitle>

            <div className="space-y-12">
                {experience.map( ( exp ) => (
                    <div key={exp.id} className="border-l-2 border-gray-200 pl-8 relative">
                        {/* Timeline dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-900 border-4 border-white"></div>

                        {/* Company and Position */}
                        <div className="mb-4">
                            <h3 className="text-2xl font-semibold text-gray-900">
                                {exp.position}
                            </h3>
                            <p className="text-lg text-gray-600 font-medium mt-1">
                                {exp.company}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
                                <span>{exp.duration}</span>
                                <span>•</span>
                                <span>{exp.location}</span>
                            </div>
                        </div>

                        {/* Description */}
                        <ul className="space-y-2 mb-4">
                            {exp.description.map( ( item, index ) => (
                                <li key={index} className="text-gray-600 flex">
                                    <span className="mr-2 text-gray-400">•</span>
                                    <span>{item}</span>
                                </li>
                            ) )}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {exp.technologies.map( ( tech ) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                >
                                    {tech}
                                </span>
                            ) )}
                        </div>
                    </div>
                ) )}
            </div>
        </SectionContainer>
    );
};
