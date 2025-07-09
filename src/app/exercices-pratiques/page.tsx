'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, BookOpen, Users, Building, Briefcase, Shield, AlertTriangle } from 'lucide-react';
import CourseNavigation from '@/components/navigation/CourseNavigation';

interface Exercise {
  id: string;
  title: string;
  type: 'cas' | 'exercice' | 'interview';
  content: string;
  questions?: string[];
  icon: any;
}

const exercises: Exercise[] = [
  {
    id: 'cas1',
    title: 'CAS 1 : Interview d\'un DG - Crise de l\'informatique',
    type: 'cas',
    icon: Building,
    content: `"Il y a quelques années, nous avons connu une crise de l'informatique. Pour y remédier, nous avons décidé d'infogérer et nous avons vendu notre filiale informatique à un prestataire. J'étais le client, à l'époque. Cela se passait mal avec la Direction informatique : les systèmes ne fonctionnaient pas bien, la mise en œuvre de nouveaux logiciels était très lourde. Tout le monde s'était alors réjoui de se séparer de cette filiale qui ne marchait pas. Nous disions : "nous allons avoir affaire à des professionnels". Hélas, la situation ne s'est pas améliorée.. Nous avons des relations très difficiles avec le prestataire en charge de l'infogérance. Nous sommes dans une lutte financière qui consomme du temps, des équipes : le Directeur des systèmes d'information passe un tiers de son temps à négocier les prix avec le prestataire.\n\nAussi, quand j'ai pris la Direction générale, j'ai décidé de tout changer. J'ai commencé par remplacer le Directeur des systèmes d'information par un opérationnel de très bon niveau. Pour réorganiser la Direction des systèmes d'information, j'ai choisi quelqu'un qui n'était pas du tout informaticien, mais qui était réputé pour ses qualités d'écoute. Le précédent Directeur des systèmes d'information écoutait, mais ses équipes étaient uniquement organisées autour des projets. En particulier, dans l'organisation il n'y avait aucune entité dédiée au contrôle du prestataire. La première mission que j'ai confiée à ce nouveau Directeur des systèmes d'information a été de réorganiser la Direction des systèmes d'information : création d'un département exploitation (suivi de l'infogérance) et recrutement de compétences à l'extérieur. Cela a été bien perçu par les opérationnels. Maintenant, cela marche mieux. Nous ne cherchons pas à lancer de nouveaux projets. La priorité est de s'assurer que les projets se terminent bien et répondent aux besoins des opérationnels. Le Directeur des systèmes d'information est un bon gestionnaire, mais je m'aperçois qu'il a des difficultés à tenir les budgets. Pour l'aider, je lui apporte mon soutien dans les crises, j'effectue des arbitrages et je l'aide à trouver des solutions."\n\n**Direction des systèmes d'information :** "En mars 200X, j'ai été nommé Directeur des systèmes d'information. Je ne suis pas issu de ce métier, je viens des métiers traditionnels de l'entreprise. Pourquoi est-on venu me chercher ? A l'époque, la DSI était perçue comme trop technologique et soupçonnée de choisir uniquement les projets qui l'intéressaient : préoccupée davantage par les projets que par l'exploitation, éloignée du terrain, ne se souciant pas des utilisateurs. La DG a décidé de remplacer le Directeur des systèmes d'information par un opérationnel. J'ai accepté le challenge. Nous avons souffert d'une externalisation mal pensée. Nous avons perdu la maîtrise technique et fonctionnelle de nos systèmes. Le curseur n'a pas été placé au bon endroit. Notre filiale informatique n'avait pas une bonne image, mais le prestataire n'en a pas une meilleure maintenant. Ma priorité, c'est de remettre de l'ordre dans le contrat d'infogérance et d'améliorer la relation avec les métiers. Ma première action a consisté à créer une task force pour gérer le contrat et à désigner des responsables d'exploitation. Les systèmes d'information sont loin de contribuer à la performance ou de permettre de se différencier dans le métier, et nous n'en sommes pas encore aux débats de ce type, tant s'en faut. Je serai crédible dans ce domaine lorsque les projets marcheront bien. Si nous pouvons apporter une différenciation, ce ne peut être qu'en interaction avec les DM. Le DG m'aide à prendre de la hauteur, nous préparons les dossiers ensemble, cela permet de trouver les bonnes idées. Il joue également un rôle d'aiguillon qui permet de fixer les priorités. Nous faisons un point hebdomadaire d'une heure."`,
    questions: [
      "Identifiez la nature des liens entre les différentes directions.",
      "Quelles activités la DSI doit-elle mettre en avant prioritairement ?"
    ]
  },
  {
    id: 'cas2',
    title: 'CAS 2 : Problématiques de gouvernance SI',
    type: 'cas',
    icon: Users,
    content: `**Directeur des systèmes d'information :** "Nous consacrons un comité exécutif par an aux systèmes d'information, composé du PDG, du Directeur général adjoint et de moi. Ce comité gère principalement les arbitrages budgétaires. Je cherche de mon côté à systématiser et officialiser des comités informatiques avec les directeurs opérationnels pour éviter d'avoir recours systématiquement au comité exécutif pour les arbitrages. Les initiatives que nous avons lancées pour faciliter l'appropriation par les utilisateurs des systèmes d'information ont peu de succès en pratique. Par exemple, nous avions créé un département qui devait faciliter l'utilisation des systèmes d'information dans l'entreprise, composé de personnes qui ont beaucoup d'expérience, et qui devait fournir une structure de maîtrise d'ouvrage et assister les utilisateurs en ciblant les faiblesses du système. Mais on n'est pas allé jusqu'au bout du raisonnement, ce département est maintenant trop axé sur un reporting standard et ne remplit pas son rôle premier de facilitation de l'appropriation des systèmes par les utilisateurs. On est en train de mettre en place des critères métiers pour les initiateurs de projets. Ces critères, crées sur mon initiative et validés par la Direction générale, se feront en amont et en aval des projets pour le suivi des bénéfices, pour que les indicateurs de taux de succès de projets s'améliorent, et c'est tout ce qu'on veut. C'est aux responsables opérationnels de s'assurer de la captation des bénéfices, mais ils n'effectuent pas actuellement de suivi formel ou ne l'appliquent pas à la totalité des projets ; certains veulent leur propre structure SI et font de la résistance ou d'autres ont le sentiment de ne pas être suffisamment servis par le schéma actuel, que la Direction des systèmes d'information n'est pas suffisamment à leur écoute pour les aider à résoudre leurs problèmes."\n\n**Direction métier :** " Le Directeur des systèmes d'information s'est historiquement placé dans un mode de fonctionnement personnel avec la Direction générale, comme tous les métiers, ce qui créé des écarts avec ce que les métiers voulaient. Sur le projet X, je me suis fâché avec le Directeur des systèmes d'information car je lui ai dit que le projet était fait à notre demande parce que nous en avions besoin, et pas pour alimenter les équipes informatiques. Le fonctionnement où on a une Direction des systèmes d'information qui vend des outils aux utilisateurs, c'est un peu n'importe quoi : je veux bien de nouveaux outils, mais parce qu'ils répondent à mes besoins. La Direction des systèmes d'information doit construire une base de données qui marche, et doit nous aider à faire de bons développements dont nous sommes demandeurs : je n'ai pas besoin d'une Direction des systèmes d'information qui me dise ce dont j'ai besoin, je veux savoir comment je peux réaliser ce dont j'ai envie. Par exemple, nous avions besoin d'un outil de prévision X, et la Direction des systèmes d'information a développé un outil en interne, très lourd, à la place d'un progiciel qui fait référence sur le marché. Cela me donne l'impression que la Direction des systèmes d'information ne cherche pas à répondre à mes besoins, mais plutôt à nous proposer l'outil le plus perfectionné, le plus complet, et qui ne correspond pas à ce dont nous avons besoin. Le vrai coût des projets nous échappe : tout semble s'arrêter au périmètre de la Direction des systèmes d'information."`,
    questions: [
      "Identifiez la nature des liens mis en place dans le cadre de ce descriptif ?",
      "Quelles activités le DSI doit il mettre en avant dans ce contexte ?"
    ]
  }
];

export default function ExercicesPratiquesPage() {
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredExercises = selectedType === 'all' 
    ? exercises 
    : exercises.filter(exercise => exercise.type === selectedType);

  const toggleExpand = (exerciseId: string) => {
    setExpandedExercise(expandedExercise === exerciseId ? null : exerciseId);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'cas': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'exercice': return 'bg-green-100 text-green-800 border-green-200';
      case 'interview': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'cas': return 'Cas pratique';
      case 'exercice': return 'Exercice';
      case 'interview': return 'Interview';
      default: return type;
    }
  };

  return (
    <div>
      <CourseNavigation 
        currentSection="Exercices pratiques"
        previousHref="/questions-dscg-cours"
        nextHref="/quiz"
        previousTitle="Cas pratiques"
        nextTitle="Quiz"
        progress={85}
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
              <BookOpen className="text-orange-600" size={32} />
              <h1 className="text-4xl font-bold text-gray-800">
                Exercices pratiques
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Cas d'étude, exercices et interviews pour approfondir vos connaissances
            </p>
          </div>

          {/* Filtres */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedType === 'all'
                    ? 'bg-orange-100 text-orange-800 border-orange-200'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
              >
                Tous ({exercises.length})
              </button>
              <button
                onClick={() => setSelectedType('cas')}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedType === 'cas'
                    ? 'bg-blue-100 text-blue-800 border-blue-200'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
              >
                Cas pratiques ({exercises.filter(e => e.type === 'cas').length})
              </button>
            </div>
          </div>

          {/* Liste des exercices */}
          <div className="space-y-6">
            {filteredExercises.map((exercise, index) => {
              const IconComponent = exercise.icon;
              const isExpanded = expandedExercise === exercise.id;
              
              return (
                <motion.div
                  key={exercise.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleExpand(exercise.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="flex-shrink-0">
                          <IconComponent className="text-gray-600" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-800">
                              {exercise.title}
                            </h3>
                            <span className={`px-2 py-1 text-xs font-medium rounded border ${getTypeColor(exercise.type)}`}>
                              {getTypeLabel(exercise.type)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {isExpanded ? (
                          <ChevronUp className="text-gray-400" size={20} />
                        ) : (
                          <ChevronDown className="text-gray-400" size={20} />
                        )}
                      </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <div className="p-6">
                        <div className="prose max-w-none mb-6">
                          <div className="whitespace-pre-wrap text-gray-700">
                            {exercise.content}
                          </div>
                        </div>
                        
                        {exercise.questions && exercise.questions.length > 0 && (
                          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                            <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                              <Shield size={16} />
                              Questions d'analyse
                            </h4>
                            <ul className="space-y-2">
                              {exercise.questions.map((question, qIndex) => (
                                <li key={qIndex} className="text-orange-700">
                                  <span className="font-medium">{qIndex + 1}.</span> {question}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}