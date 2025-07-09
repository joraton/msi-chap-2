'use client';

import { motion } from 'framer-motion';
import CourseNavigation from '@/components/navigation/CourseNavigation';
import { Network, Users, Layers, GitBranch, Building, Zap } from 'lucide-react';

export default function Section3Page() {
  const structures = [
    {
      title: "Structure centralisée",
      description: "Toutes les ressources SI sont regroupées au sein d&apos;une direction unique",
      avantages: [
        "Cohérence des choix technologiques",
        "Économies d&apos;échelle",
        "Expertise technique concentrée",
        "Contrôle unifié des coûts"
      ],
      inconvenients: [
        "Éloignement des besoins métier",
        "Rigidité organisationnelle",
        "Délais de réponse plus longs"
      ],
      color: "blue",
      icon: Building
    },
    {
      title: "Structure décentralisée",
      description: "Les ressources SI sont réparties dans les différentes divisions/métiers",
      avantages: [
        "Proximité avec les utilisateurs",
        "Réactivité aux besoins métier",
        "Spécialisation sectorielle",
        "Autonomie des divisions"
      ],
      inconvenients: [
        "Risque d&apos;hétérogénéité",
        "Coûts plus élevés",
        "Difficultés d&apos;intégration"
      ],
      color: "green",
      icon: GitBranch
    },
    {
      title: "Structure hybride",
      description: "Combinaison des deux approches selon les domaines et les besoins",
      avantages: [
        "Équilibre centralisation/proximité",
        "Flexibilité organisationnelle",
        "Optimisation par domaine",
        "Mutualisation sélective"
      ],
      inconvenients: [
        "Complexité de gouvernance",
        "Risque de conflits",
        "Coordination nécessaire"
      ],
      color: "purple",
      icon: Network
    }
  ];

  const roles = [
    {
      title: "DSI (Directeur des Systèmes d&apos;Information)",
    description: "Responsable de la stratégie SI et de l&apos;alignement avec les objectifs business",
      missions: [
        "Définition de la stratégie SI",
        "Pilotage de la transformation digitale",
        "Relation avec la direction générale",
        "Gouvernance des projets SI"
      ],
      color: "red"
    },
    {
      title: "Responsable Infrastructure",
      description: "En charge de la gestion et de l&apos;évolution des infrastructures techniques",
      missions: [
        "Gestion des serveurs et réseaux",
        "Sécurité des systèmes",
        "Performance et disponibilité",
        "Évolution technologique"
      ],
      color: "blue"
    },
    {
      title: "Chef de Projet SI",
      description: "Pilote les projets de développement et d&apos;évolution du SI",
      missions: [
        "Planification des projets",
        "Coordination des équipes",
        "Suivi budgétaire",
        "Gestion des risques"
      ],
      color: "green"
    },
    {
      title: "Analyste Métier",
      description: "Interface entre les besoins utilisateurs et les solutions techniques",
      missions: [
        "Analyse des besoins",
        "Spécifications fonctionnelles",
        "Tests et recette",
        "Formation utilisateurs"
      ],
      color: "orange"
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    red: 'bg-red-50 border-red-200 text-red-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800'
  };

  const iconColorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    red: 'text-red-600',
    orange: 'text-orange-600'
  };

  return (
    <div>
      <CourseNavigation 
        currentSection="Section III - Organisation de la fonction"
        previousHref="/section-2"
        nextHref="/quiz"
        previousTitle="Section II - Missions"
        nextTitle="Quiz"
        progress={66.6}
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
              <Network className="text-orange-600" size={32} />
              <h1 className="text-4xl font-bold text-gray-800">
                Organisation de la fonction
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Structures organisationnelles et rôles clés du SI
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
            <p className="text-orange-700">
              L&apos;organisation de la fonction SI dépend de nombreux facteurs : taille de l&apos;entreprise,
        secteur d&apos;activité, culture organisationnelle et stratégie digitale.
            </p>
          </div>

          {/* Types de structures */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-2">
            <Layers className="text-blue-600" size={24} />
            Types de structures organisationnelles
          </h2>
          
          <div className="space-y-8 mb-12">
            {structures.map((structure, index) => {
              const IconComponent = structure.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`p-6 rounded-lg border-2 ${colorClasses[structure.color as keyof typeof colorClasses]}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className={iconColorClasses[structure.color as keyof typeof iconColorClasses]} size={24} />
                    <h3 className="text-xl font-semibold">{structure.title}</h3>
                  </div>
                  <p className="text-sm mb-4">{structure.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">✅ Avantages</h4>
                      <ul className="text-sm space-y-1">
                        {structure.avantages.map((avantage, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-green-600 mt-1">•</span>
                            <span>{avantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">❌ Inconvénients</h4>
                      <ul className="text-sm space-y-1">
                        {structure.inconvenients.map((inconvenient, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-red-600 mt-1">•</span>
                            <span>{inconvenient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Facteurs de choix */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Zap className="text-yellow-600" size={24} />
            Facteurs de choix d&apos;organisation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">📊 Facteurs internes</h3>
              <ul className="text-blue-700 space-y-2 text-sm">
                <li>• Taille et complexité de l&apos;organisation</li>
                <li>• Culture d&apos;entreprise</li>
                <li>• Maturité SI existante</li>
                <li>• Ressources disponibles</li>
                <li>• Stratégie de croissance</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🌍 Facteurs externes</h3>
              <ul className="text-green-700 space-y-2 text-sm">
                <li>• Secteur d&apos;activité</li>
                <li>• Réglementation</li>
                <li>• Concurrence</li>
                <li>• Évolutions technologiques</li>
                <li>• Contraintes géographiques</li>
              </ul>
            </div>
          </div>

          {/* Rôles et responsabilités */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Users className="text-purple-600" size={24} />
            Rôles et responsabilités clés
          </h2>
          
          <div className="grid gap-6 mb-8">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-lg border-2 ${colorClasses[role.color as keyof typeof colorClasses]}`}
              >
                <h3 className="text-lg font-semibold mb-2">{role.title}</h3>
                <p className="text-sm mb-3">{role.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Missions principales :</h4>
                  <ul className="text-sm space-y-1">
                    {role.missions.map((mission, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="mt-1">•</span>
                        <span>{mission}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tendances actuelles */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">🚀 Tendances organisationnelles actuelles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Nouvelles approches</h4>
                <ul className="text-purple-600 space-y-1 text-sm">
                  <li>• Organisations agiles et DevOps</li>
                  <li>• Équipes produit cross-fonctionnelles</li>
                  <li>• Centre d&apos;excellence (CoE)</li>
                  <li>• Modèle bimodal (run/build)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Nouveaux rôles</h4>
                <ul className="text-blue-600 space-y-1 text-sm">
                  <li>• Chief Digital Officer (CDO)</li>
                  <li>• Data Scientist</li>
                  <li>• DevOps Engineer</li>
                  <li>• Product Owner SI</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Moyen mnémotechnique */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">🧠 Moyen mnémotechnique : C.D.H</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">C</div>
                <div className="text-sm font-semibold text-blue-800">Centralisée</div>
                <div className="text-xs text-blue-600">Cohérence & Contrôle</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">D</div>
                <div className="text-sm font-semibold text-green-800">Décentralisée</div>
                <div className="text-xs text-green-600">Proximité & Réactivité</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">H</div>
                <div className="text-sm font-semibold text-purple-800">Hybride</div>
                <div className="text-xs text-purple-600">Équilibre & Flexibilité</div>
              </div>
            </div>
          </div>

          {/* Points clés à retenir */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">💡 Points clés à retenir</h3>
            <ul className="text-yellow-700 space-y-2">
              <li>• Trois types d&apos;organisation : Centralisée, Décentralisée, Hybride (C.D.H)</li>
              <li>• Le choix dépend de facteurs internes et externes</li>
              <li>• Évolution vers des organisations plus agiles</li>
              <li>• Nouveaux rôles liés à la transformation digitale</li>
              <li>• Importance de l&apos;alignement avec la stratégie business</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}