'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

interface CourseNavigationProps {
  currentSection: string;
  previousHref?: string;
  nextHref?: string;
  previousTitle?: string;
  nextTitle?: string;
  progress: number;
}

export default function CourseNavigation({
  currentSection,
  previousHref,
  nextHref,
  previousTitle,
  nextTitle,
  progress
}: CourseNavigationProps) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              <Home size={16} />
              Plan du cours
            </Link>
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Accueil
              </Link>
              <span>&gt;</span>
              <span>Cours</span>
              <span>&gt;</span>
              <span className="text-gray-800 font-medium">{currentSection}</span>
            </nav>
          </div>
          
          {/* Progress */}
          <div className="text-sm text-gray-600">
            Progression: {Math.round(progress)}%
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="pb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="border-t border-gray-100">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            {previousHref ? (
              <Link href={previousHref}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <ChevronLeft size={16} />
                  <span className="hidden sm:inline">{previousTitle || 'Précédent'}</span>
                </motion.button>
              </Link>
            ) : (
              <div></div>
            )}
            
            {nextHref ? (
              <Link href={nextHref}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span className="hidden sm:inline">{nextTitle || 'Suivant'}</span>
                  <ChevronRight size={16} />
                </motion.button>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}