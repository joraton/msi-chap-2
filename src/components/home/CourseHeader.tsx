'use client';

import { motion } from 'framer-motion';
import { BookOpen, Clock, Target, Users } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="text-blue-100 mb-6 sm:mb-8 text-sm sm:text-base">
          <span>Accueil</span>
          <span className="mx-1 sm:mx-2">{'>'}</span>
          <span>Cours</span>
          <span className="mx-1 sm:mx-2">{'>'}</span>
          <span className="text-white font-medium">Fonction SI et Gouvernance</span>
        </nav>

        {/* Main Header Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20"
        >
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            {/* Course Icon */}
            <div className="bg-white/20 p-3 sm:p-4 rounded-xl mx-auto sm:mx-0">
              <BookOpen size={40} className="text-white sm:w-12 sm:h-12" />
            </div>
            
            {/* Course Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                La Fonction SI et la Gouvernance
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-4 sm:mb-6 leading-relaxed">
                Découvrez l&apos;évolution de la fonction informatique vers les systèmes d&apos;information, 
                ses missions stratégiques et son rôle dans la gouvernance d&apos;entreprise.
              </p>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start">
                <div className="bg-green-500/20 border border-green-400/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
                  <Target size={14} className="sm:w-4 sm:h-4" />
                  <span className="font-medium text-sm sm:text-base">Expert</span>
                </div>
                <div className="bg-blue-500/20 border border-blue-400/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
                  <Clock size={14} className="sm:w-4 sm:h-4" />
                  <span className="font-medium text-sm sm:text-base">2h 30min</span>
                </div>
                <div className="bg-purple-500/20 border border-purple-400/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
                  <Users size={14} className="sm:w-4 sm:h-4" />
                  <span className="font-medium text-sm sm:text-base">4 sections</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}