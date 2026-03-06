import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Book, Flower2, ArrowRight, Sparkles, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import HoverCard from '../components/HoverCard';

// Sample data for hover cards
const featuredItems = [
    {
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
        title: "Lavender Latte",
        description: "A soothing blend of espresso and lavender-infused milk",
        price: "$5.50",
        category: "Signature Drink",
        revealTitle: "The Secret Ingredient",
        revealContent: (
            <>
                <p>Our signature lavender is sourced from local farms and steeped for 24 hours to extract the perfect aroma.</p>
                <p className="mt-3">Perfect for: Quiet reading sessions & morning contemplation</p>
            </>
        )
    },
    {
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
        title: "The Hobbit Hole",
        description: "A cozy fantasy adventure for all ages",
        price: "$14.99",
        category: "Bestseller",
        revealTitle: "Why Readers Love It",
        revealContent: (
            <>
                <p>Join Bilbo on an unforgettable journey through Middle-earth.</p>
                <p className="mt-3">Rating: ★★★★★ 4.9/5 based on 10,000+ reviews</p>
            </>
        )
    },
    {
        image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=300&fit=crop",
        title: "Sunshine Bouquet",
        description: "Yellow roses, Gerbera daisies, and lemon leaves",
        price: "$45.00",
        category: "Popular Choice",
        revealTitle: "Care Instructions",
        revealContent: (
            <>
                <p>Trim stems at an angle, change water every 2 days, and keep away from direct sunlight.</p>
                <p className="mt-3">Freshness guarantee: 7 days</p>
            </>
        )
    }
];

const Home = () => {
    return (
        <div className="min-h-screen bg-[#e8f2e9] vintage-texture">
            {/* Hero Section */}
            <section
                className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-[80px] bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/cozy_bg_nook.png')",
                    backgroundColor: "#e8f2e9",
                    backgroundSize: "100vw 85vh",
                    backgroundPosition: "center bottom"
                }}
            >
                {/* The text container mapped roughly to the white card coordinates in the background image */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center w-[90%] md:w-[60%] max-w-[650px] mt-[-20px] md:mt-[-40px]">
                    <div className="font-sans text-cozy-moss text-xs font-semibold tracking-[3px] uppercase mb-4 mt-8">✦ A Quiet Escape From The Ordinary ✦</div>

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-[6.5rem] lg:text-[7rem] leading-none font-serif font-bold text-cozy-dark mb-4 drop-shadow-sm"
                    >
                        Cozy<em className="font-script font-normal text-cozy-rosy px-2 not-italic">Nook</em>
                    </motion.h1>


                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4 bg-[#f4f9f4]">
                <div className="container mx-auto text-center mb-12">
                    <div className="inline-block font-sans text-[0.8rem] tracking-[3px] font-medium uppercase text-cozy-dark mb-4 px-5 py-1.5 border border-cozy-dark rounded-[30px]">Welcome</div>
                    <h2 className="font-sans text-xs font-semibold tracking-[3px] uppercase text-cozy-dark leading-[1.3] mb-4">✦ Your forever dream space ✦</h2>
                    <p className="font-sans text-[1.05rem] text-cozy-dark mt-5 max-w-[550px] mx-auto leading-[1.7]">A bookstore, bakery & flower shop — all under one roof. Come for the books, stay for the croissants, leave with flowers.</p>
                </div>
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-cozy-moss border-2 border-cozy-moss mx-4 lg:mx-10 mb-16">
                        {[
                            {
                                title: "The Bindery",
                                desc: "Curated shelves of second-hand & new books. Get a fresh recommendation every hour — timed drops, like a bookish surprise box.",
                                icon: "/images/books_icon.jpg",
                                link: "/bookstore",
                                color: "bg-white",
                                hoverLine: "before:bg-cozy-moss"
                            },
                            {
                                title: "The Nook Café",
                                desc: "Sourdough loaves, flaky croissants, fig tarts & specialty coffee. Fresh from the oven every morning. Daily specials change with the weather.",
                                icon: "/images/bakery_icon.jpg",
                                link: "/cafe",
                                color: "bg-white",
                                hoverLine: "before:bg-cozy-gold"
                            },
                            {
                                title: "Petal Studio",
                                desc: "Hand-pick stems, choose your wrapping, add a ribbon & a note. Build your own bouquet or let us arrange something seasonal for you.",
                                icon: "/images/floral_icon.jpg",
                                link: "/flowers",
                                color: "bg-white",
                                hoverLine: "before:bg-cozy-rosy"
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -6 }}
                                className={`group ${feature.color} p-12 lg:p-[60px_50px] cursor-pointer relative overflow-hidden transition-all duration-400 before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[6px] before:transition-[height] before:duration-400 hover:before:h-full ${feature.hoverLine}`}
                            >
                                <div className="mb-6 relative z-10 transition-transform duration-400 group-hover:scale-110 h-20 w-20 flex mix-blend-multiply">
                                    <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                                </div>
                                <h3 className="text-[2.2rem] font-serif font-semibold text-cozy-dark mb-3 relative z-10 transition-colors duration-400 group-hover:text-white">{feature.title}</h3>
                                <p className="font-sans text-[0.95rem] text-cozy-dark leading-[1.7] relative z-10 transition-colors duration-400 group-hover:text-white/90">{feature.desc}</p>
                                <Link to={feature.link} className={`inline-block mt-6 font-sans text-[0.85rem] font-medium tracking-[2px] uppercase text-cozy-dark border-b border-cozy-dark pb-1 relative z-10 transition-colors duration-400 group-hover:text-white group-hover:border-white hover:opacity-80`}>
                                    Explore →
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Hover Cards */}
            <section className="py-20 px-4 bg-gradient-to-b from-[#e8f2e9] to-[#f4f9f4] vintage-texture">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-serif text-vintage-dark-brown mb-4">✦ Discover Our Favorites ✦</h2>
                        <p className="text-vintage-mauve/70 max-w-xl mx-auto italic font-serif">
                            Hover over each card to reveal hidden details about our most beloved items
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {featuredItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                            >
                                <HoverCard
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    category={item.category}
                                    revealTitle={item.revealTitle}
                                    revealContent={item.revealContent}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
