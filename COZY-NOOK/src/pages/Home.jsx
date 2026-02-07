import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Book, Flower2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-cozy-beige">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-cozy-dark/10 to-cozy-beige z-0" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif text-cozy-dark mb-6"
                    >
                        Welcome to Cozy Nook
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-cozy-midnight/80 mb-12 max-w-2xl mx-auto"
                    >
                        A sanctuary for your mind. Sip coffee, get lost in a book, or create something beautiful with flowers.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col md:flex-row gap-6 justify-center"
                    >
                        <Link to="/cafe" className="btn-primary flex items-center gap-2 text-lg px-8 py-3">
                            <Coffee /> Visit Cafe
                        </Link>
                        <Link to="/bookstore" className="btn-primary flex items-center gap-2 text-lg px-8 py-3 bg-cozy-rosy hover:bg-cozy-rosy/80">
                            <Book /> Bookstore
                        </Link>
                        <Link to="/flowers" className="btn-primary flex items-center gap-2 text-lg px-8 py-3 bg-cozy-midnight hover:bg-cozy-midnight/80">
                            <Flower2 /> Flower Shop
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "The Cafe",
                                desc: "Artisan coffee, fresh cookies, and soothing drinks tailored to your mood.",
                                icon: Coffee,
                                link: "/cafe",
                                color: "text-cozy-dark"
                            },
                            {
                                title: "The Bookstore",
                                desc: "Curated reads, focus timers, and a quiet space to explore new worlds.",
                                icon: Book,
                                link: "/bookstore",
                                color: "text-cozy-rosy"
                            },
                            {
                                title: "Flower Shop",
                                desc: "Hand-pick flowers and craft the perfect bouquet for yourself or a loved one.",
                                icon: Flower2,
                                link: "/flowers",
                                color: "text-cozy-midnight"
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-cozy-rosy/10"
                            >
                                <feature.icon className={`w-12 h-12 ${feature.color} mb-6`} />
                                <h3 className="text-2xl font-serif text-cozy-dark mb-4">{feature.title}</h3>
                                <p className="text-gray-600 mb-6">{feature.desc}</p>
                                <Link to={feature.link} className={`flex items-center gap-2 font-medium ${feature.color} hover:underline`}>
                                    Explore <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
