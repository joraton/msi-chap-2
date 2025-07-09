'use client';

import { motion } from 'framer-motion';
import CourseNavigation from '@/components/navigation/CourseNavigation';
import { BookOpen, Lightbulb, Target } from 'lucide-react';

export default function IntroductionPage() {
  return (
    <div>
      <CourseNavigation 
        currentSection="Introduction"
        nextHref="/section-1"
        nextTitle="Section I - Place de la fonction"
        progress={16.6}
      />
      
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="text-blue-600" size={32} />
              <h1 className="text-4xl font-bold text-gray-800">
                Introduction
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Découvrez l'évolution de la fonction informatique vers les systèmes d'information
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <div className="flex items-start gap-3">
                <Lightbulb className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Contexte historique</h3>
                  <p className="text-blue-700">
                    Avec le développement de son importance pour les organisations, la fonction Informatique, 
                    telle qu'elle était désignée initialement, a progressivement acquis une place reflétant 
                    son importance pour l'organisation.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Évolution de la fonction</h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Son contenu s'est structuré progressivement autour de grandes missions, et même si de nombreuses 
              entreprises ne peuvent pas disposer d'une telle fonction, il existe des solutions alternatives 
              grâce au recours à des prestataires externes.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Transformation organisationnelle</h3>
                <p className="text-green-700 text-sm">
                  La fonction informatique évolue d'un rôle purement technique vers une dimension stratégique 
                  au cœur des décisions d'entreprise.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Enjeux informationnels</h3>
                <p className="text-purple-700 text-sm">
                  L'accent se déplace de la technique vers la gestion de l'information et son impact 
                  sur la performance organisationnelle.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <Target className="text-yellow-600 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Objectifs d'apprentissage</h3>
                  <ul className="text-yellow-700 space-y-2">
                    <li>• Comprendre l'évolution historique de la fonction informatique</li>
                    <li>• Identifier les enjeux de la transformation numérique</li>
                    <li>• Analyser l'impact organisationnel des systèmes d'information</li>
                    <li>• Maîtriser les concepts de gouvernance SI</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Plan du chapitre</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">1</div>
                <div>
                  <h4 className="font-medium text-gray-800">La place de la fonction</h4>
                  <p className="text-sm text-gray-600">Position organisationnelle et évolution des appellations</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold">2</div>
                <div>
                  <h4 className="font-medium text-gray-800">Les missions de la fonction</h4>
                  <p className="text-sm text-gray-600">RUN, BUILD, VISION et composantes clés</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold">3</div>
                <div>
                  <h4 className="font-medium text-gray-800">Les facteurs de contingence</h4>
                  <p className="text-sm text-gray-600">Taille, degré informationnel et maturité numérique</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}