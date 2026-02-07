import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, RefreshCw, Heart } from 'lucide-react';
import clsx from 'clsx';

const FLOWERS = [
    { id: 'f1', name: 'Red Rose', color: 'bg-red-500', emoji: '🌹', price: 5 },
    { id: 'f2', name: 'Sunflower', color: 'bg-yellow-400', emoji: '🌻', price: 4 },
    { id: 'f3', name: 'Tulip', color: 'bg-pink-400', emoji: '🌷', price: 3 },
    { id: 'f4', name: 'Daisy', color: 'bg-white', emoji: '🌼', price: 2 },
    { id: 'f5', name: 'Lavender', color: 'bg-purple-400', emoji: '🪻', price: 3 },
    { id: 'f6', name: 'Hibiscus', color: 'bg-pink-500', emoji: '🌺', price: 4 },
];

const WRAPPERS = [
    { id: 'w1', name: 'Kraft Paper', color: 'bg-[#d2b48c]', texture: 'opacity-100' },
    { id: 'w2', name: 'Blush Pink', color: 'bg-pink-100', texture: 'opacity-80' },
    { id: 'w3', name: 'Midnight', color: 'bg-cozy-midnight', texture: 'opacity-90' },
    { id: 'w4', name: 'Clear Plastic', color: 'bg-blue-50', texture: 'opacity-30' },
];

const FlowerShop = () => {
    const [bouquet, setBouquet] = useState([]);
    const [wrapper, setWrapper] = useState(WRAPPERS[0]);
    const [step, setStep] = useState('flowers'); // flowers, wrapper, finish

    const addFlower = (flower) => {
        if (bouquet.length < 12) {
            setBouquet([...bouquet, { ...flower, uniqueId: Math.random() }]);
        }
    };

    const removeFlower = (uniqueId) => {
        setBouquet(bouquet.filter(f => f.uniqueId !== uniqueId));
    };

    const totalPrice = bouquet.reduce((acc, curr) => acc + curr.price, 0) + 5; // +5 base fee

    return (
        <div className="min-h-screen pt-24 px-4 bg-cozy-beige pb-20">
            <div className="container mx-auto max-w-6xl h-[85vh] flex flex-col md:flex-row gap-8">

                {/* Left Panel: Builder Controls */}
                <div className="md:w-1/3 bg-white rounded-3xl p-8 shadow-sm overflow-y-auto">
                    <h1 className="text-4xl font-serif text-cozy-dark mb-2">Bloom Bar</h1>
                    <p className="text-gray-500 mb-8">Craft your perfect arrangement.</p>

                    <div className="flex gap-4 mb-8 border-b pb-4">
                        <button
                            onClick={() => setStep('flowers')}
                            className={clsx("font-medium transition-colors", step === 'flowers' ? 'text-cozy-rosy' : 'text-gray-400')}
                        >
                            1. Pick Flowers
                        </button>
                        <button
                            onClick={() => setStep('wrapper')}
                            className={clsx("font-medium transition-colors", step === 'wrapper' ? 'text-cozy-rosy' : 'text-gray-400')}
                        >
                            2. Wrap It
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        {step === 'flowers' && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="grid grid-cols-2 gap-4"
                            >
                                {FLOWERS.map((flower) => (
                                    <button
                                        key={flower.id}
                                        onClick={() => addFlower(flower)}
                                        disabled={bouquet.length >= 12}
                                        className="p-4 rounded-xl border border-gray-100 hover:border-cozy-rosy hover:bg-cozy-rosy/5 transition-all text-center group disabled:opacity-50"
                                    >
                                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{flower.emoji}</div>
                                        <div className="font-serif text-cozy-dark">{flower.name}</div>
                                        <div className="text-sm text-gray-400">${flower.price}</div>
                                    </button>
                                ))}
                            </motion.div>
                        )}

                        {step === 'wrapper' && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="space-y-4"
                            >
                                {WRAPPERS.map((w) => (
                                    <button
                                        key={w.id}
                                        onClick={() => setWrapper(w)}
                                        className={clsx(
                                            "w-full p-4 rounded-xl flex items-center gap-4 border transition-all",
                                            wrapper.id === w.id ? "border-cozy-rosy bg-cozy-rosy/5" : "border-gray-100 hover:border-gray-200"
                                        )}
                                    >
                                        <div className={`w-8 h-8 rounded-full ${w.color} border border-gray-200 shadow-sm`} />
                                        <span className="font-serif text-lg">{w.name}</span>
                                        {wrapper.id === w.id && <Check className="ml-auto text-cozy-rosy" />}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="mt-8 pt-8 border-t">
                        <div className="flex justify-between items-center text-xl font-serif text-cozy-dark mb-6">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <button className="w-full py-4 bg-cozy-dark text-white rounded-xl font-medium hover:bg-opacity-90 transition-colors flex justify-center items-center gap-2">
                            <Heart className="w-5 h-5 fill-current" /> Finish Bouquet
                        </button>
                    </div>
                </div>

                {/* Right Panel: Live Preview */}
                <div className="flex-1 bg-[#FDFBF7] rounded-3xl p-8 shadow-inner flex flex-col items-center justify-center relative overflow-hidden border border-cozy-rosy/10">

                    <div className="absolute top-4 right-4 z-10">
                        <button
                            onClick={() => setBouquet([])}
                            className="p-2 text-gray-400 hover:text-cozy-rosy transition-colors"
                            title="Reset Bouquet"
                        >
                            <RefreshCw className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="relative mt-20">
                        {/* The Wrapper (Trapezoid Logic via clip-path or simple shapes) */}
                        <motion.div
                            layout
                            className={`w-64 h-80 relative z-10 ${wrapper.color} transition-colors duration-500 origin-bottom`}
                            style={{
                                clipPath: 'polygon(20% 100%, 80% 100%, 100% 0, 0 0)',
                            }}
                        >
                            {/* Wrapper texture overlay */}
                            <div className="absolute inset-0 bg-black opacity-[0.05] mix-blend-multiply pointer-events-none" />
                        </motion.div>

                        {/* The Flowers (Positioned absolute inside/above wrapper) */}
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-full h-full flex flex-wrap justify-center content-start py-4 px-2 pointer-events-none z-0">
                            <AnimatePresence>
                                {bouquet.map((flower, idx) => (
                                    <motion.div
                                        key={flower.uniqueId}
                                        initial={{ opacity: 0, y: 50, scale: 0 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                            rotate: (idx % 2 === 0 ? -10 : 10) + (Math.random() * 10 - 5)
                                        }}
                                        exit={{ opacity: 0, scale: 0, y: 20 }}
                                        className="text-6xl -mx-3 -mt-4 cursor-pointer pointer-events-auto hover:scale-110 transition-transform drop-shadow-lg"
                                        style={{ zIndex: 10 + idx }}
                                        onClick={() => removeFlower(flower.uniqueId)}
                                    >
                                        {flower.emoji}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Ribbon Tie */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-24 z-20 w-12 h-12 text-cozy-rosy drop-shadow-sm">
                            🎀
                        </div>
                    </div>

                    <p className="mt-12 text-center text-cozy-midnight/40 text-sm font-serif italic">
                        {bouquet.length === 0 ? "Start adding flowers..." : "Click a flower to remove it"}
                    </p>

                </div>

            </div>
        </div>
    );
};

export default FlowerShop;
