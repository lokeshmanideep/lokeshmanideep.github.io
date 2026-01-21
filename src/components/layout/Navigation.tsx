import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () =>
{
    const [ isScrolled, setIsScrolled ] = useState( false );
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect( () =>
    {
        const handleScroll = () =>
        {
            setIsScrolled( window.scrollY > 50 );
        };

        window.addEventListener( 'scroll', handleScroll );
        return () => window.removeEventListener( 'scroll', handleScroll );
    }, [] );

    const scrollToSection = ( id: string ) =>
    {
        if ( !isHomePage )
        {
            // Navigate to home first, then scroll
            window.location.href = `/#${ id }`;
            return;
        }
        const element = document.getElementById( id );
        if ( element )
        {
            element.scrollIntoView( { behavior: 'smooth' } );
        }
    };

    const navItems = [
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'education', label: 'Education' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ isScrolled
                ? 'bg-white/80 backdrop-blur-lg shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link
                        to="/"
                        className="text-lg font-semibold text-gray-900 transition-colors"
                        style={{ fontFamily: 'Agustina Regular, sans-serif' }}
                    >
                        Home
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map( ( item ) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection( item.id )}
                                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                {item.label}
                            </button>
                        ) )}
                        <Link
                            to="/projects"
                            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Projects
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
