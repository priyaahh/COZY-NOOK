import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Delete, GripHorizontal } from 'lucide-react';
import clsx from 'clsx';

const Calculator = ({ onClose }) => {
    const [display, setDisplay] = useState('0');
    const [equation, setEquation] = useState('');

    const handleNumber = (num) => {
        setDisplay(display === '0' ? num : display + num);
        setEquation(equation + num);
    };

    const handleOperator = (op) => {
        setDisplay('0');
        setEquation(equation + ' ' + op + ' ');
    };

    const calculate = () => {
        try {
            // eslint-disable-next-line no-eval
            const result = eval(equation);
            setDisplay(String(result));
            setEquation(String(result));
        } catch (e) {
            setDisplay('Error');
            setEquation('');
        }
    };

    const clear = () => {
        setDisplay('0');
        setEquation('');
    };

    const buttons = [
        ['C', clear], ['/', () => handleOperator('/')], ['*', () => handleOperator('*')], ['-', () => handleOperator('-')],
        ['7', () => handleNumber('7')], ['8', () => handleNumber('8')], ['9', () => handleNumber('9')], ['+', () => handleOperator('+')],
        ['4', () => handleNumber('4')], ['5', () => handleNumber('5')], ['6', () => handleNumber('6')], ['=', calculate],
        ['1', () => handleNumber('1')], ['2', () => handleNumber('2')], ['3', () => handleNumber('3')],
        ['0', () => handleNumber('0')], ['.', () => handleNumber('.')]
    ];

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            drag
            dragMomentum={false}
            className="fixed top-24 right-8 z-50 bg-white rounded-2xl shadow-xl w-72 overflow-hidden border border-cozy-rosy/20"
        >
            {/* Header */}
            <div className="bg-cozy-dark p-3 flex justify-between items-center cursor-move handle">
                <GripHorizontal className="text-cozy-beige/50 w-5 h-5" />
                <span className="text-cozy-beige font-serif font-medium">Cozy Calc</span>
                <button onClick={onClose} className="text-cozy-beige/70 hover:text-white transition-colors">
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Display */}
            <div className="bg-cozy-beige/30 p-4 text-right">
                <div className="text-cozy-midnight/50 text-sm h-5">{equation}</div>
                <div className="text-3xl font-mono text-cozy-dark font-bold truncate">{display}</div>
            </div>

            {/* Keypad */}
            <div className="grid grid-cols-4 gap-2 p-4 bg-white">
                {buttons.map(([label, action], idx) => (
                    <button
                        key={idx}
                        onClick={action}
                        className={clsx(
                            "h-12 rounded-lg font-medium transition-all active:scale-95 flex items-center justify-center",
                            label === '=' ? "bg-cozy-rosy text-white row-span-2 h-full" :
                                label === 'C' ? "bg-red-100 text-red-600 hover:bg-red-200" :
                                    ['/', '*', '-', '+'].includes(label) ? "bg-cozy-beige text-cozy-dark hover:bg-cozy-rosy/20" :
                                        "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-100",
                            label === '0' && "col-span-2"
                        )}
                        style={{
                            gridRow: label === '=' ? 'span 2' : 'auto',
                            gridColumn: label === '0' ? 'span 2' : 'auto'
                        }}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </motion.div>
    );
};

export default Calculator;
