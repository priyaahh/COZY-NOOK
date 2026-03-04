import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/cozynook_logo.png';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/bookstore', label: '📚 Bookstore' },
        { path: '/cafe', label: '🥐 Bakery' },
        { path: '/flowers', label: '🌸 Flower Shop' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-[1000] bg-cozy-dark flex items-center justify-between px-6 md:px-10 py-3.5 border-b-2 border-cozy-gold transition-all duration-300">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                    <Link to="/" className="font-serif text-[2.2rem] font-semibold text-cozy-cream tracking-[1px] flex items-center gap-3">
                        <img src={logo} alt="Cozy Nook Logo" className="w-12 h-12 object-contain brightness-0 invert" />
                        <div className="flex items-baseline max-sm:hidden">
                            Cozy<span className="font-script text-cozy-gold text-[1.25em] font-normal leading-none ml-[2px] tracking-normal mb-[-4px]">Nook</span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex list-none gap-[30px] items-center m-0 p-0">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`text-[1.1rem] font-serif font-semibold tracking-[1px] uppercase transition-colors duration-200 hover:text-cozy-gold ${isActive ? 'text-cozy-gold' : 'text-white'
                                        }`}
                                >
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
                        className="text-cozy-cream hover:text-cozy-gold focus:outline-none"
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>

                {/* Mobile Nav Dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-cozy-dark border-b-2 border-cozy-gold shadow-lg md:hidden flex flex-col pt-4 pb-6 px-6 gap-4">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-[1.1rem] font-serif font-semibold tracking-[1px] uppercase transition-colors duration-200 hover:text-cozy-gold py-2 border-b border-cozy-moss/30 ${isActive ? 'text-cozy-gold' : 'text-white'
                                        }`}
                                >
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
