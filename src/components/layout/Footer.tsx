import React from 'react';
import { portfolioData } from '../../data/portfolio';

export const Footer: React.FC = () =>
{
    const { personal, socials } = portfolioData;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-white font-semibold mb-1">{personal.name}</p>
                        <p className="text-sm">{personal.email}</p>
                    </div>

                    <div className="flex gap-6">
                        {socials.map( ( social ) => (
                            <a
                                key={social.platform}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors text-sm"
                            >
                                {social.platform}
                            </a>
                        ) )}
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
                    <p>© {currentYear} {personal.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
