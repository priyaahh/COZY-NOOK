import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Book, Clock, Play, Pause, RotateCcw, Moon, Sun, Coffee } from 'lucide-react';
import clsx from 'clsx';

const THEMES = {
    default: {
        bg: 'bg-cozy-beige',
        text: 'text-cozy-dark',
        accent: 'bg-cozy-rosy',
        card: 'bg-white',
        name: 'Cozy Day'
    },
    dark: {
        bg: 'bg-cozy-dark',
        text: 'text-cozy-beige',
        accent: 'bg-cozy-moss',
        card: 'bg-cozy-midnight',
        name: 'Midnight'
    },
    sepia: {
        bg: 'bg-[#f4ecd8]',
        text: 'text-[#5c4b37]',
        accent: 'bg-[#d2b48c]',
        card: 'bg-[#fffdf5]',
        name: 'Vintage'
    }
};

const POMODORO_TIMES = {
    focus: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60
};

const Timer = ({ theme }) => {
    const [timeLeft, setTimeLeft] = useState(POMODORO_TIMES.focus);
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState('focus'); // focus, shortBreak, longBreak

    useEffect(() => {
        let interval = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const toggleTimer = () => setIsActive(!isActive);
    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(POMODORO_TIMES[mode]);
    };

    const changeMode = (newMode) => {
        setMode(newMode);
        setIsActive(false);
        setTimeLeft(POMODORO_TIMES[newMode]);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className={clsx("p-8 rounded-2xl shadow-sm text-center transition-colors duration-500", theme.card)}>
            <h3 className={clsx("text-2xl font-serif mb-6", theme.text)}>Focus Timer</h3>

            <div className="flex justify-center gap-2 mb-8">
                {[
                    { id: 'focus', label: 'Focus' },
                    { id: 'shortBreak', label: 'Short Break' },
                    { id: 'longBreak', label: 'Long Break' }
                ].map((m) => (
                    <button
                        key={m.id}
                        onClick={() => changeMode(m.id)}
                        className={clsx(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all",
                            mode === m.id
                                ? theme.accent + " text-white"
                                : "bg-opacity-10 " + theme.text + " Hover:bg-opacity-20 bg-gray-500"
                        )}
                    >
                        {m.label}
                    </button>
                ))}
            </div>

            <div className={clsx("text-7xl font-mono mb-8 font-bold", theme.text)}>
                {formatTime(timeLeft)}
            </div>

            <div className="flex justify-center gap-4">
                <button
                    onClick={toggleTimer}
                    className={clsx("w-16 h-16 rounded-full flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95", theme.accent)}
                >
                    {isActive ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                </button>
                <button
                    onClick={resetTimer}
                    className={clsx("w-16 h-16 rounded-full flex items-center justify-center transition-colors bg-opacity-10 hover:bg-opacity-20 bg-gray-500", theme.text)}
                >
                    <RotateCcw className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

const BOOKS = [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", cover: "📚" },
    { id: 2, title: "Kafka on the Shore", author: "Haruki Murakami", cover: "🐈" },
    { id: 3, title: "Before the Coffee Gets Cold", author: "Toshikazu Kawaguchi", cover: "☕" },
    { id: 4, title: "Circe", author: "Madeline Miller", cover: "✨" },
];

const Bookstore = () => {
    const [currentTheme, setCurrentTheme] = useState('default');
    const theme = THEMES[currentTheme];

    return (
        <div className={clsx("min-h-screen pt-24 px-4 pb-20 transition-colors duration-500", theme.bg)}>
            <div className="container mx-auto max-w-6xl">

                {/* Header & Theme Switcher */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    <div>
                        <h1 className={clsx("text-5xl font-serif mb-2 transition-colors duration-500", theme.text)}>Book Nook</h1>
                        <p className={clsx("text-opacity-80 transition-colors duration-500", theme.text)}>Find your next read or focus on your current one.</p>
                    </div>

                    <div className={clsx("flex gap-2 p-1 rounded-full border border-opacity-20", theme.text, "border-current")}>
                        {Object.entries(THEMES).map(([key, t]) => (
                            <button
                                key={key}
                                onClick={() => setCurrentTheme(key)}
                                className={clsx(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                    currentTheme === key
                                        ? theme.accent + " text-white"
                                        : "hover:bg-opacity-10 hover:bg-gray-500"
                                )}
                            >
                                {t.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content: Recommendations */}
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className={clsx("text-3xl font-serif mb-6 transition-colors duration-500", theme.text)}>Curated for You</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {BOOKS.map((book) => (
                                <motion.div
                                    key={book.id}
                                    whileHover={{ y: -5 }}
                                    className={clsx("p-6 rounded-xl shadow-sm flex items-start gap-4 transition-colors duration-500", theme.card)}
                                >
                                    <div className="text-4xl bg-gray-100 p-4 rounded-lg">{book.cover}</div>
                                    <div>
                                        <h3 className={clsx("text-xl font-serif font-bold mb-1 transition-colors duration-500", theme.text)}>{book.title}</h3>
                                        <p className={clsx("text-sm opacity-70 transition-colors duration-500", theme.text)}>{book.author}</p>
                                        <button className={clsx("mt-4 text-sm font-medium hover:underline", theme.text)}>
                                            Read more
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Community Recommendation Input */}
                        <div className={clsx("p-8 rounded-2xl border-2 border-dashed border-opacity-30 mt-12 transition-colors duration-500", theme.text, "border-current")}>
                            <h3 className="text-xl font-serif mb-4">Recommend a Book</h3>
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Book Title..."
                                    className={clsx("flex-1 px-4 py-3 rounded-lg bg-transparent border border-opacity-20 focus:outline-none focus:border-opacity-100 transition-all", theme.text, "border-current placeholder-current placeholder-opacity-50")}
                                />
                                <button className={clsx("px-6 py-3 rounded-lg text-white font-medium transition-transform active:scale-95", theme.accent)}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar: Timer */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <Timer theme={theme} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Bookstore;
