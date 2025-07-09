'use client';

import { motion } from 'framer-motion';
import { LucideIcon, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface SectionBlockProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
  delay?: number;
}

export default function SectionBlock({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  color, 
  delay = 0 
}: SectionBlockProps) {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-500',
      hover: 'hover:bg-blue-600',
      border: 'border-blue-200',
      text: 'text-blue-600'
    },
    green: {
      bg: 'bg-green-500',
      hover: 'hover:bg-green-600',
      border: 'border-green-200',
      text: 'text-green-600'
    },
    purple: {
      bg: 'bg-purple-500',
      hover: 'hover:bg-purple-600',
      border: 'border-purple-200',
      text: 'text-purple-600'
    },
    orange: {
      bg: 'bg-orange-500',
      hover: 'hover:bg-orange-600',
      border: 'border-orange-200',
      text: 'text-orange-600'
    },
    red: {
      bg: 'bg-red-500',
      hover: 'hover:bg-red-600',
      border: 'border-red-200',
      text: 'text-red-600'
    },
    indigo: {
      bg: 'bg-indigo-500',
      hover: 'hover:bg-indigo-600',
      border: 'border-indigo-200',
      text: 'text-indigo-600'
    }
  };

  const currentColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Link href={href}>
        <div className={`bg-white rounded-xl shadow-md border-2 ${currentColor.border} p-6 transition-all duration-300 hover:shadow-lg cursor-pointer`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Icon Circle */}
              <div className={`${currentColor.bg} p-3 rounded-full text-white transition-colors duration-300 group-hover:${currentColor.hover}`}>
                <Icon size={24} />
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {description}
                </p>
              </div>
            </div>
            
            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${currentColor.bg} ${currentColor.hover} text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2`}
            >
              Commencer
              <ChevronRight size={16} />
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}