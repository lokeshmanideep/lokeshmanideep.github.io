import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () =>
{
    const [ isScrolled, setIsScrolled ] = useState( false );
    const location = useLocation();

    useEffect( () =>
    {
        const handleScroll = () =>
        {
            setIsScrolled( window.scrollY > 50 );
        };

        window.addEventListener( 'scroll', handleScroll );
        return () => window.removeEventListener( 'scroll', handleScroll );
    }, [] );

    useEffect( () =>
    {
        if ( !location.hash )
        {
            return;
        }

        const id = location.hash.slice( 1 );
        const element = document.getElementById( id );
        if ( element )
        {
            requestAnimationFrame( () =>
            {
                element.scrollIntoView( {
                    behavior: 'smooth',
                    block: 'start',
                } );
            } );
        }
    }, [ location.hash, location.pathname ] );

    const navItems = [
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
    ];

    return (
        <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
            <div
                className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 lg:px-6 ${ isScrolled
                    ? 'border-[var(--line-strong)] bg-[var(--surface-strong)] shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl'
                    : 'border-transparent bg-white/50 backdrop-blur-md'
                    }`}
            >
                <Link
                    to="/"
                    className="text-lg font-semibold text-gray-900 transition-colors"
                    style={{ fontFamily: 'Agustina Regular, sans-serif' }}
                >

                    Lokesh Manideep
                </Link>

                <div className="hidden items-center gap-2 md:flex">
                    {navItems.map( ( item ) => (
                        <Link
                            key={item.id}
                            to={`/#${ item.id }`}
                            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-900/5 hover:text-slate-950"
                        >
                            {item.label}
                        </Link>
                    ) )}
                    <Link
                        to="/education"
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-900/5 hover:text-slate-950 ${ location.pathname === '/education' ? 'bg-slate-900 text-white hover:bg-slate-900' : 'text-slate-600' }`}
                    >
                        Education
                    </Link>
                    <Link
                        to="/projects"
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-900/5 hover:text-slate-950 ${ location.pathname === '/projects' ? 'bg-slate-900 text-white hover:bg-slate-900' : 'text-slate-600' }`}
                    >
                        Projects
                    </Link>
                </div>
            </div>
        </nav>
    );
};
