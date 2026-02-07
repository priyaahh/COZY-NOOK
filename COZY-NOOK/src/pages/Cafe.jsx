import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Cookie, GlassWater, Plus, ShoppingBag } from 'lucide-react';

const MENU_ITEMS = [
    {
        id: 'c1',
        name: 'Espresso',
        description: 'Rich, bold, and purely authentic Italian espresso.',
        price: '$3.50',
        category: 'coffee',
        image: '☕'
    },
    {
        id: 'c2',
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and a thick layer of foam.',
        price: '$4.50',
        category: 'coffee',
        image: '🍵'
    },
    {
        id: 'c3',
        name: 'Latte',
        description: 'Espresso with steamed milk and a light layer of foam.',
        price: '$4.75',
        category: 'coffee',
        image: '🥛'
    },
    {
        id: 'k1',
        name: 'Choc Chip Cookie',
        description: 'Warm, gooey, and packed with premium chocolate chunks.',
        price: '$2.50',
        category: 'cookies',
        image: '🍪'
    },
    {
        id: 'k2',
        name: 'Oatmeal Raisin',
        description: 'Chewy oatmeal cookie with sweet raisins and cinnamon.',
        price: '$2.25',
        category: 'cookies',
        image: '🍘'
    },
    {
        id: 'd1',
        name: 'Iced Matcha',
        description: 'Premium ceremonial grade matcha served over ice.',
        price: '$5.00',
        category: 'drinks',
        image: '🥤'
    },
    {
        id: 'd2',
        name: 'Berry Lemonade',
        description: 'Freshly squeezed lemonade with mixed berry compote.',
        price: '$4.00',
        category: 'drinks',
        image: '🍹'
    }
];

const CategoryFilter = ({ active, onSelect }) => {
    const categories = [
        { id: 'all', label: 'All', icon: ShoppingBag },
        { id: 'coffee', label: 'Coffee', icon: Coffee },
        { id: 'cookies', label: 'Cookies', icon: Cookie },
        { id: 'drinks', label: 'Cool Drinks', icon: GlassWater },
    ];

    return (
        <div className="flex gap-4 justify-center mb-12 flex-wrap">
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => onSelect(cat.id)}
                    className={`
            flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300
            ${active === cat.id
                            ? 'bg-cozy-dark text-cozy-beige shadow-lg scale-105'
                            : 'bg-white text-cozy-midnight hover:bg-white/80'}
          `}
                >
                    <cat.icon className="w-4 h-4" />
                    {cat.label}
                </button>
            ))}
        </div>
    );
};

const Cafe = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [cart, setCart] = useState([]);

    const filteredItems = activeCategory === 'all'
        ? MENU_ITEMS
        : MENU_ITEMS.filter(item => item.category === activeCategory);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <div className="min-h-screen pt-24 px-4 bg-cozy-beige pb-20">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-serif text-cozy-dark mb-4">The Cozy Cafe</h1>
                    <p className="text-cozy-midnight/70 max-w-2xl mx-auto">
                        Take a break and indulge in our carefully curated selection of comforts.
                    </p>
                </div>

                <CategoryFilter active={activeCategory} onSelect={setActiveCategory} />

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={item.id}
                                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                            >
                                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                                    {item.image}
                                </div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-serif text-cozy-dark">{item.name}</h3>
                                    <span className="font-medium text-cozy-moss">{item.price}</span>
                                </div>
                                <p className="text-gray-500 text-sm mb-6">{item.description}</p>
                                <button
                                    onClick={() => addToCart(item)}
                                    className="w-full py-3 bg-cozy-beige text-cozy-dark rounded-xl flex items-center justify-center gap-2 hover:bg-cozy-dark hover:text-cozy-beige transition-colors duration-300 font-medium"
                                >
                                    <Plus className="w-4 h-4" /> Add to Tray
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Simple Floating Cart Indicator */}
                <AnimatePresence>
                    {cart.length > 0 && (
                        <motion.div
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            exit={{ y: 100 }}
                            className="fixed bottom-8 right-8 bg-cozy-dark text-white px-6 py-4 rounded-full shadow-xl flex items-center gap-4 z-50"
                        >
                            <ShoppingBag className="w-5 h-5" />
                            <span className="font-medium">{cart.length} items on tray</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Cafe;
