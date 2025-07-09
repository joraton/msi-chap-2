'use client';

import { motion } from 'framer-motion';
import { Target, Rocket, Building2, Users, BarChart3, HelpCircle, Award } from 'lucide-react';
import SectionBlock from './SectionBlock';

const sections = [
  {
    title: "Introduction",
    description: "Concepts de base et évolution de la fonction informatique",
    icon: Rocket,
    href: "/introduction",
    color: "blue"
  },
  {
    title: "Section I - Place de la fonction",
    description: "Position organisationnelle et évolution des appellations",
    icon: Building2,
    href: "/section-1",
    color: "green"
  },
  {
    title: "Section II - Missions de la fonction",
    description: "RUN, BUILD, VISION et composantes clés du SI",
    icon: BarChart3,
    href: "/section-2",
    color: "purple"
  },
  {
    title: "Section III - Facteurs de contingence",
    description: "Taille, degré informationnel et maturité numérique",
    icon: Users,
    href: "/section-3",
    color: "indigo"
  },
  {
    title: "Quiz",
    description: "Évaluation interactive de vos connaissances",
    icon: HelpCircle,
    href: "/quiz",
    color: "orange"
  },
  {
    title: "Cas pratiques",
    description: "Exercices pratiques et cas d'application",
    icon: Award,
    href: "/questions-dscg",
    color: "red"
  },
  {
    title: "Vrai exercices DSCG",
    description: "Compilation des questions et corrections DSCG UE5",
    icon: Award,
    href: "/questions-dscg-cours",
    color: "emerald"
  },
  {
    title: "Exercices pratiques",
    description: "Cas d'étude, interviews et exercices approfondis",
    icon: Award,
    href: "/exercices-pratiques",
    color: "orange"
  }
];

export default function CoursePlan() {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Target className="text-blue-600" size={32} />
          <h2 className="text-3xl font-bold text-gray-800">
            Plan du cours
          </h2>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explorez chaque section du cours sur la fonction SI et la gouvernance. 
          Progressez à votre rythme et maîtrisez les concepts essentiels.
        </p>
      </motion.div>

      {/* Sections Grid */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {sections.map((section, index) => (
          <SectionBlock
            key={section.title}
            title={section.title}
            description={section.description}
            icon={section.icon}
            href={section.href}
            color={section.color}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Course Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
            <div className="text-gray-600">Sections au total</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">4h</div>
            <div className="text-gray-600">Durée estimée</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">Expert</div>
            <div className="text-gray-600">Niveau requis</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}