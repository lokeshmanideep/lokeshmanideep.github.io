import React from 'react';
import type { Skill } from '../../data/portfolio';
import { portfolioData } from '../../data/portfolio';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionTitle } from '../layout/SectionTitle';

const categoryLabels: Record<Skill[ 'category' ], string> = {
    backend: 'Backend',
    frontend: 'Frontend',
    database: 'Databases',
    devops: 'DevOps & Cloud',
    tools: 'Tools'
};

export const Skills: React.FC = () =>
{
    const { skills } = portfolioData;

    // Group skills by category
    const skillsByCategory = skills.reduce( ( acc, skill ) =>
    {
        if ( !acc[ skill.category ] )
        {
            acc[ skill.category ] = [];
        }
        acc[ skill.category ].push( skill );
        return acc;
    }, {} as Record<Skill[ 'category' ], Skill[]> );

    const categoryOrder: Skill[ 'category' ][] = [ 'backend', 'database', 'devops', 'frontend', 'tools' ];

    return (
        <SectionContainer id="skills" className="bg-white">
            <SectionTitle>Technical Skills</SectionTitle>

            <div className="space-y-10">
                {categoryOrder.map( ( category ) =>
                {
                    const categorySkills = skillsByCategory[ category ];
                    if ( !categorySkills || categorySkills.length === 0 ) return null;

                    return (
                        <div key={category}>
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">
                                {categoryLabels[ category ]}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {categorySkills.map( ( skill ) => (
                                    <span
                                        key={skill.name}
                                        className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                                    >
                                        {skill.name}
                                    </span>
                                ) )}
                            </div>
                        </div>
                    );
                } )}
            </div>
        </SectionContainer>
    );
};
