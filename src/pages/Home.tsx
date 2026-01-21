import React from 'react';
import { Education } from '../components/sections/Education';
import { Experience } from '../components/sections/Experience';
import { Hero } from '../components/sections/Hero';
import { Projects } from '../components/sections/Projects';
import { Skills } from '../components/sections/Skills';

export const Home: React.FC = () =>
{
    return (
        <>
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Education />
        </>
    );
};
