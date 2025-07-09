'use client';

import { motion } from 'framer-motion';
import CourseNavigation from '@/components/navigation/CourseNavigation';
import { Building2, TrendingUp, Users, Briefcase } from 'lucide-react';

export default function Section1Page() {
  const appellations = [
    {
      title: "Service Informatique",
      description: "Cette appellation, la première rencontrée correspond aux débuts de la fonction au sein des organisations. Elle correspond à la dimension technique prépondérante à l'époque, où les équipements jouaient un rôle essentiel.",
      color: "blue",
      era: "Années 1960-1970"
    },
    {
      title: "Direction Informatique",
      description: "Cette appellation traduit la montée en puissance au sein des entreprises, matérialisée par une place au sein des comités directeurs.",
      color: "green",
      era: "Années 1980-1990"
    },
    {
      title: "Direction de l'Organisation et de l'Information (DOSI)",
      description: "L'ajout du terme organisation traduit le lien majeur entre le système d'information et les structures de la firme. Toute modification au sein d'un service a un impact immédiat sur le SI.",
      color: "purple",
      era: "Années 1990-2000"
    },
    {
      title: "Direction des Systèmes d'Information (DSI)",
      description: "L'appellation actuelle, la plus répandue. Elle reflète l'importance de l'information et des systèmes qui la traitent.",
      color: "orange",
      era: "Années 2000-2010"
    },
    {
      title: "Direction Numérique (ou Digitale)",
      description: "Une appellation à la mode qui reflète les nouvelles attributions et priorités du SI. Les technologies permettent une transformation en profondeur des pratiques.",
      color: "red",
      era: "Années 2010+"
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800',
    red: 'bg-red-50 border-red-200 text-red-800'
  };

  return (
    <div>
      <CourseNavigation 
        currentSection="Section I - Place de la fonction"
        previousHref="/introduction"
        nextHref="/section-2"
        previousTitle="Introduction"
        nextTitle="Section II - Missions"
        progress={33.3}
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
              <Building2 className="text-green-600" size={32} />
              <h1 className="text-4xl font-bold text-gray-800">
                La place de la fonction
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Évolution organisationnelle et appellations de la fonction SI
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
            <p className="text-green-700">
              La place de la fonction est multiple et a évolué au fil du temps pour refléter 
              l'importance croissante des systèmes d'information dans les organisations.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <TrendingUp className="text-blue-600" size={24} />
            Évolution des appellations
          </h2>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            L'évolution des appellations est le moyen d'accompagner les changements dans les attributions 
            d'une fonction. Le passage de direction informatique à direction des systèmes d'information 
            est le reflet d'une technicité en régression au profit des enjeux informationnels.
          </p>

          {/* Timeline des appellations */}
          <div className="space-y-6 mb-12">
            {appellations.map((appellation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-lg border-2 ${colorClasses[appellation.color as keyof typeof colorClasses]}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold">{appellation.title}</h3>
                  <span className="text-sm font-medium px-3 py-1 bg-white rounded-full">
                    {appellation.era}
                  </span>
                </div>
                <p className="text-sm leading-relaxed">{appellation.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Place au sein de l'organigramme */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Users className="text-purple-600" size={24} />
            Place au sein de l'organigramme
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="text-blue-600" size={20} />
                <h3 className="text-lg font-semibold text-blue-800">Position hiérarchique</h3>
              </div>
              <p className="text-blue-700 text-sm">
                La fonction SI occupe désormais une place stratégique au sein des comités de direction, 
                reflétant son importance dans la prise de décision.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="text-purple-600" size={20} />
                <h3 className="text-lg font-semibold text-purple-800">Évolution du rôle</h3>
              </div>
              <p className="text-purple-700 text-sm">
                D'un rôle purement technique, la fonction évolue vers un rôle de conseil stratégique 
                et d'accompagnement de la transformation digitale.
              </p>
            </div>
          </div>

          {/* Points clés à retenir */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">💡 Points clés à retenir</h3>
            <ul className="text-yellow-700 space-y-2">
              <li>• L'évolution des appellations reflète les changements d'attributions</li>
              <li>• Passage d'une dimension technique à une dimension informationnelle</li>
              <li>• Montée en puissance organisationnelle (comités directeurs)</li>
              <li>• Lien étroit entre SI et organisation de l'entreprise</li>
              <li>• Émergence de la transformation numérique</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}