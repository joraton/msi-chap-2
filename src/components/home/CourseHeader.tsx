'use client';

import { motion } from 'framer-motion';
import { BookOpen, Clock, Target, Users } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-blue-100 mb-8">
          <span>Accueil</span>
          <span className="mx-2">{'>'}</span>
          <span>Cours</span>
          <span className="mx-2">{'>'}</span>
          <span className="text-white font-medium">Fonction SI et Gouvernance</span>
        </nav>

        {/* Main Header Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="flex items-start gap-6">
            {/* Course Icon */}
            <div className="bg-white/20 p-4 rounded-xl">
              <BookOpen size={48} className="text-white" />
            </div>
            
            {/* Course Info */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">
                La Fonction SI et la Gouvernance
              </h1>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Découvrez l'évolution de la fonction informatique vers les systèmes d'information, 
                ses missions stratégiques et son rôle dans la gouvernance d'entreprise.
              </p>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-green-500/20 border border-green-400/30 px-4 py-2 rounded-full flex items-center gap-2">
                  <Target size={16} />
                  <span className="font-medium">Expert</span>
                </div>
                <div className="bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-full flex items-center gap-2">
                  <Clock size={16} />
                  <span className="font-medium">2h 30min</span>
                </div>
                <div className="bg-purple-500/20 border border-purple-400/30 px-4 py-2 rounded-full flex items-center gap-2">
                  <Users size={16} />
                  <span className="font-medium">4 sections</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}