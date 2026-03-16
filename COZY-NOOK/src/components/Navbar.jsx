import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home as HomeIcon, Book, Coffee, Flower2 } from 'lucide-react';
import logo from '../assets/cozynook_logo.png';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {
            path: '/',
            label: 'Home',
            iconComponent: HomeIcon,
            baseClass: 'border-[var(--color-cozy-moss)] text-[var(--color-cozy-moss)] hover:bg-[var(--color-cozy-moss)]',
            activeClass: 'bg-[var(--color-cozy-moss)] border-[var(--color-cozy-moss)] text-white'
        },
        {
            path: '/bookstore',
            label: 'Books',
            icon: '/images/books_icon.jpg',
            baseClass: 'border-[var(--color-cozy-blue)] text-[var(--color-cozy-blue)] hover:bg-[var(--color-cozy-blue)]',
            activeClass: 'bg-[var(--color-cozy-blue)] border-[var(--color-cozy-blue)] text-white'
        },
        {
            path: '/cafe',
            label: 'Bakery',
            icon: '/images/bakery_icon.jpg',
            baseClass: 'border-[var(--color-cozy-gold)] text-[var(--color-cozy-gold)] hover:bg-[var(--color-cozy-gold)]',
            activeClass: 'bg-[var(--color-cozy-gold)] border-[var(--color-cozy-gold)] text-white'
        },
        {
            path: '/flowers',
            label: 'Blooms',
            icon: '/images/floral_icon.jpg',
            baseClass: 'border-[var(--color-cozy-rosy)] text-[var(--color-cozy-rosy)] hover:bg-[var(--color-cozy-rosy)]',
            activeClass: 'bg-[var(--color-cozy-rosy)] border-[var(--color-cozy-rosy)] text-white'
        },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[var(--color-cozy-cream)] flex items-center justify-between px-6 md:px-10 py-3.5 border-b-2 border-[var(--color-cozy-moss)] transition-all duration-300">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                    <Link to="/" className="font-serif text-[2.2rem] font-semibold text-[var(--color-cozy-dark)] tracking-[1px] flex items-center gap-3">
                        <img src={logo} alt="Cozy Nook Logo" className="w-12 h-12 object-contain filter drop-shadow-sm" style={{ filter: 'brightness(0) saturate(100%) invert(32%) sepia(34%) saturate(718%) hue-rotate(43deg) brightness(96%) contrast(85%)' }} />
                        <div className="flex items-baseline max-sm:hidden">
                            Cozy<span className="font-script text-[var(--color-cozy-rosy)] font-normal leading-none ml-[2px] tracking-normal mb-[-4px]">Nook</span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex list-none gap-[24px] items-center m-0 p-0">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`border-2 px-4 py-1 font-sans font-semibold text-[1rem] tracking-[1.5px] uppercase rounded-[40px] transition-all duration-200 flex items-center gap-2
                                    ${isActive
                                            ? `${item.activeClass} text-white`
                                            : `${item.baseClass} hover:text-white`
                                        }`}
                                >
                                    {item.icon && (
                                        <img
                                            src={item.icon}
                                            alt=""
                                            className="w-6 h-6 object-cover rounded mix-blend-multiply"
                                        />
                                    )}
                                    {item.iconComponent && (
                                        <item.iconComponent className="w-6 h-6" strokeWidth={2.2} />
                                    )}
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[var(--color-cozy-dark)] hover:text-[var(--color-cozy-rosy)] focus:outline-none"
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>

                {/* Mobile Nav Dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-[var(--color-cozy-cream)] border-b-2 border-[var(--color-cozy-moss)] shadow-lg md:hidden flex flex-col pt-4 pb-6 px-6 gap-4">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`bg-transparent border-2 px-5 sm:px-7 py-2.5 font-sans font-bold text-[1.2rem] tracking-[2px] uppercase rounded-[50px] transition-all shadow-none flex items-center justify-center gap-4 ${isActive ? item.activeClass : item.baseClass}`}
                                >
                                    {item.icon && <img src={item.icon} alt="" className="w-9 h-9 object-cover rounded mix-blend-multiply" />}
                                    {item.iconComponent && <item.iconComponent className="w-9 h-9" strokeWidth={2.5} />}
                                    {item.label}
                                </Link>
                            );
                        })}

                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
