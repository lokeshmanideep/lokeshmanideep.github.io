import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionTitle } from '../layout/SectionTitle';

export const Experience: React.FC = () =>
{
    const { experience } = portfolioData;

    return (
        <SectionContainer id="experience" className="bg-[#f8fafc]">
            <SectionTitle>
                Experience
            </SectionTitle>

            <div className="space-y-8">
                {experience.map( ( exp, index ) => (
                    <article
                        key={exp.id}
                        className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)] backdrop-blur-sm md:p-10"
                    >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
                        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-sky-200 via-slate-200 to-rose-100" />

                        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                            <div className="max-w-3xl">
                                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                                    Role {String( index + 1 ).padStart( 2, '0' )}
                                </p>
                                <h3 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-[2.1rem]">
                                    {exp.position}
                                </h3>
                                <p className="mt-2 text-lg font-medium text-slate-600">
                                    {exp.company}
                                </p>
                            </div>

                            <div className="grid gap-2 text-sm text-slate-500 md:min-w-48 md:justify-items-end">
                                <span className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1.5 font-medium text-slate-700">
                                    {exp.duration}
                                </span>
                                <span className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1.5 font-medium text-slate-700">
                                    {exp.location}
                                </span>
                            </div>
                        </div>

                        <div className="mt-8 space-y-3">
                            {exp.description.map( ( item, index ) => (
                                <div key={index} className="flex gap-3 text-slate-600">
                                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-slate-300" />
                                    <span className="leading-7">{item}</span>
                                </div>
                            ) )}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {exp.technologies.map( ( tech ) => (
                                <span
                                    key={tech}
                                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                                >
                                    {tech}
                                </span>
                            ) )}
                        </div>
                    </article>
                ) )}
            </div>
        </SectionContainer>
    );
};
