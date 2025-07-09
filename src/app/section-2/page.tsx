'use client';

import { motion } from 'framer-motion';
import CourseNavigation from '@/components/navigation/CourseNavigation';
import { Target, Shield, Cog, Users, Database, Lightbulb } from 'lucide-react';

export default function Section2Page() {
  const missions = [
    {
      title: "Missions techniques",
      icon: Cog,
      color: "blue",
      items: [
        "Gestion des infrastructures informatiques",
        "Maintenance et évolution des systèmes",
        "Support technique aux utilisateurs",
        "Sécurité des systèmes d'information",
        "Veille technologique"
      ]
    },
    {
      title: "Missions organisationnelles",
      icon: Users,
      color: "green",
      items: [
        "Accompagnement du changement",
        "Formation des utilisateurs",
        "Définition des processus métier",
        "Coordination des projets SI",
        "Communication interne"
      ]
    },
    {
      title: "Missions stratégiques",
      icon: Target,
      color: "purple",
      items: [
        "Alignement SI/stratégie d'entreprise",
        "Pilotage de la transformation digitale",
        "Conseil à la direction générale",
        "Définition de la stratégie SI",
        "Innovation et prospective"
      ]
    }
  ];

  const defis = [
    {
      title: "Sécurité et conformité",
      description: "Assurer la protection des données et le respect des réglementations (RGPD, etc.)",
      icon: Shield,
      color: "red"
    },
    {
      title: "Gestion des données",
      description: "Exploiter le potentiel des données pour créer de la valeur business",
      icon: Database,
      color: "blue"
    },
    {
      title: "Innovation continue",
      description: "Intégrer les nouvelles technologies (IA, Cloud, IoT) dans la stratégie",
      icon: Lightbulb,
      color: "yellow"
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    red: 'bg-red-50 border-red-200 text-red-800',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-800'
  };

  const iconColorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    red: 'text-red-600',
    yellow: 'text-yellow-600'
  };

  return (
    <div>
      <CourseNavigation 
        currentSection="Section II - Missions de la fonction"
        previousHref="/section-1"
        nextHref="/section-3"
        previousTitle="Section I - Place"
        nextTitle="Section III - Organisation"
        progress={50}
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
              <Target className="text-purple-600" size={32} />
              <h1 className="text-4xl font-bold text-gray-800">
                Les missions de la fonction
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Évolution et diversification des responsabilités SI
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
            <p className="text-purple-700">
              Les missions de la fonction SI ont considérablement évolué, passant d'un rôle purement 
              technique à un rôle stratégique d'accompagnement de la transformation digitale.
            </p>
          </div>

          {/* Les trois types de missions */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Les trois dimensions des missions SI
          </h2>
          
          <div className="grid gap-8 mb-12">
            {missions.map((mission, index) => {
              const IconComponent = mission.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`p-6 rounded-lg border-2 ${colorClasses[mission.color as keyof typeof colorClasses]}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className={iconColorClasses[mission.color as keyof typeof iconColorClasses]} size={24} />
                    <h3 className="text-xl font-semibold">{mission.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {mission.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-sm mt-1">•</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Évolution des priorités */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Évolution des priorités
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-3">📊 Hier : Focus technique</h3>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• Gestion des équipements</li>
                  <li>• Maintenance des systèmes</li>
                  <li>• Support utilisateur</li>
                  <li>• Optimisation des performances</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-800 mb-3">🚀 Aujourd'hui : Vision stratégique</h3>
                <ul className="text-purple-700 space-y-1 text-sm">
                  <li>• Transformation digitale</li>
                  <li>• Innovation et prospective</li>
                  <li>• Alignement stratégique</li>
                  <li>• Création de valeur business</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Défis actuels */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Défis actuels de la fonction SI
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {defis.map((defi, index) => {
              const IconComponent = defi.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-lg border-2 ${colorClasses[defi.color as keyof typeof colorClasses]} hover:shadow-lg transition-shadow`}
                >
                  <div className="text-center">
                    <IconComponent className={`mx-auto mb-3 ${iconColorClasses[defi.color as keyof typeof iconColorClasses]}`} size={32} />
                    <h3 className="text-lg font-semibold mb-2">{defi.title}</h3>
                    <p className="text-sm">{defi.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Moyens mnémotechniques */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-green-800 mb-4">🧠 Moyen mnémotechnique : T.O.S</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">T</div>
                <div className="text-sm font-semibold text-blue-800">Technique</div>
                <div className="text-xs text-blue-600">Infrastructure & Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">O</div>
                <div className="text-sm font-semibold text-green-800">Organisationnel</div>
                <div className="text-xs text-green-600">Processus & Formation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">S</div>
                <div className="text-sm font-semibold text-purple-800">Stratégique</div>
                <div className="text-xs text-purple-600">Vision & Innovation</div>
              </div>
            </div>
          </div>

          {/* Points clés à retenir */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">💡 Points clés à retenir</h3>
            <ul className="text-yellow-700 space-y-2">
              <li>• Évolution d'un rôle technique vers un rôle stratégique</li>
              <li>• Trois dimensions : Technique, Organisationnelle, Stratégique (T.O.S)</li>
              <li>• Nouveaux défis : sécurité, données, innovation</li>
              <li>• Accompagnement de la transformation digitale</li>
              <li>• Création de valeur business par le SI</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}