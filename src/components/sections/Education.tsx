import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionTitle } from '../layout/SectionTitle';

export const Education: React.FC = () =>
{
    const { education } = portfolioData;

    return (
        <SectionContainer id="education" className="bg-gray-50">
            <SectionTitle>Education</SectionTitle>

            <div className="space-y-6">
                {education.map( ( edu ) => (
                    <div key={edu.id} className="bg-white rounded-xl p-8 border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900">
                            {edu.degree} in {edu.field}
                        </h3>
                        <p className="text-lg text-gray-600 font-medium mt-2">
                            {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-3">
                            <span>{edu.duration}</span>
                            <span>•</span>
                            <span>{edu.location}</span>
                        </div>
                    </div>
                ) )}
            </div>
        </SectionContainer>
    );
};
