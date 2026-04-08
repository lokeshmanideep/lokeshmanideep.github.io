import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionTitle } from '../layout/SectionTitle';

export const Education: React.FC = () =>
{
    const { education } = portfolioData;

    return (
        <SectionContainer id="education" className="bg-[#fbfcfe]">
            <SectionTitle subtitle="Formal training and the academic foundation behind the product and engineering work.">
                Education
            </SectionTitle>

            <div className="space-y-5">
                {education.map( ( edu, index ) => (
                    <article
                        key={edu.id}
                        className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.04)] md:p-10"
                    >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
                        <div className="flex flex-col gap-6 md:flex-row md:items-start">
                            <div className="flex flex-none items-center gap-4 md:w-72">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                                    <img
                                        src={edu.institution.includes( 'Illinois' ) ? '/uiclogo.png' : '/nitk_logo.png'}
                                        alt={edu.institution}
                                        className="h-10 w-10 object-contain"
                                    />
                                </div>
                            </div>

                            <div className="min-w-0 flex-1">
                                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                    <div className="max-w-3xl">
                                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                                            Academic milestone {String( index + 1 ).padStart( 2, '0' )}
                                        </p>
                                        <h3 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-[2.05rem]">
                                            {edu.degree} in {edu.field}
                                        </h3>
                                        <p className="mt-2 text-lg font-medium text-slate-600">
                                            {edu.institution}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 lg:justify-end">
                                        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                                            {edu.duration}
                                        </span>
                                        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                                            {edu.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                ) )}
            </div>
        </SectionContainer>
    );
};
