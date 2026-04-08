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

const categoryStyles: Record<Skill[ 'category' ], { shell: string; accent: string }> = {
    backend: {
        shell: 'from-sky-50/80 via-white to-white',
        accent: 'bg-sky-300',
    },
    database: {
        shell: 'from-emerald-50/80 via-white to-white',
        accent: 'bg-emerald-300',
    },
    devops: {
        shell: 'from-amber-50/80 via-white to-white',
        accent: 'bg-amber-300',
    },
    frontend: {
        shell: 'from-rose-50/80 via-white to-white',
        accent: 'bg-rose-300',
    },
    tools: {
        shell: 'from-slate-50/80 via-white to-white',
        accent: 'bg-slate-300',
    },
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
        <SectionContainer id="skills" className="bg-[#f7faf8]">
            <SectionTitle subtitle="A compact map of the stack, organized by how the work tends to flow.">
                Technical Skills
            </SectionTitle>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {categoryOrder.map( ( category ) =>
                {
                    const categorySkills = skillsByCategory[ category ];
                    if ( !categorySkills || categorySkills.length === 0 ) return null;

                    return (
                        <article
                            key={category}
                            className={`rounded-3xl border border-slate-200/80 bg-gradient-to-br ${ categoryStyles[ category ].shell } p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]`}
                        >
                            <div className="mb-5 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <span className={`h-2.5 w-2.5 rounded-full ${ categoryStyles[ category ].accent }`} />
                                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                                        {categoryLabels[ category ]}
                                    </h3>
                                </div>
                                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-500 ring-1 ring-slate-200">
                                    {categorySkills.length}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {categorySkills.map( ( skill ) => (
                                    <span
                                        key={skill.name}
                                        className="rounded-full border border-white/70 bg-white/80 px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white"
                                    >
                                        {skill.name}
                                    </span>
                                ) )}
                            </div>
                        </article>
                    );
                } )}
            </div>
        </SectionContainer>
    );
};
