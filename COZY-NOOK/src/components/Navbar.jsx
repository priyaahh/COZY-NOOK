import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Book, Flower2, Home } from 'lucide-react';
import clsx from 'clsx';
import logo from '../assets/cozynook_logo.png';

const Navbar = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/cafe', label: 'Cafe', icon: Coffee },
        { path: '/bookstore', label: 'Bookstore', icon: Book },
        { path: '/flowers', label: 'Flowers', icon: Flower2 },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-cozy-rosy/20 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-serif font-bold text-cozy-dark flex items-center gap-2">
                            <img src={logo} alt="Cozy Nook Logo" className="w-16 h-16 object-contain" />
                            <span>Cozy Nook</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={clsx(
                                            'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                                            isActive
                                                ? 'bg-cozy-rosy/10 text-cozy-dark'
                                                : 'text-cozy-midnight hover:text-cozy-rosy'
                                        )}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
