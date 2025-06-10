'use client';

import { InputHTMLAttributes, forwardRef, useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-slate-200 mb-2">
            {label}
          </label>
        )}
        <motion.div 
          className="relative"
          animate={{
            scale: isFocused ? 1.01 : 1
          }}
          transition={{ duration: 0.2 }}
        >
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
              w-full px-4 py-2.5 rounded-lg
              bg-slate-800/50 border
              text-white placeholder:text-slate-400
              transition-all duration-200
              focus:outline-none focus:ring-2
              ${icon ? 'pl-10' : ''}
              ${error
                ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
                : 'border-brand-purple/20 focus:border-brand-teal focus:ring-brand-teal/20 hover:border-brand-teal/30'
              }
              ${className}
            `}
            {...props}
          />
        </motion.div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-400"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input'; 