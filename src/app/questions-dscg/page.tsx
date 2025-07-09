'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseNavigation from '@/components/navigation/CourseNavigation';
import { GraduationCap, FileText, CheckCircle, Eye, EyeOff, Lightbulb, Target } from 'lucide-react';

interface DSCGQuestion {
  id: number;
  title: string;
  context: string;
  question: string;
  points: number;
  expectedAnswer: string[];
  methodology: string[];
  tips: string[];
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
}

const dscgQuestions: DSCGQuestion[] = [
  {
    id: 1,
    title: "Évolution organisationnelle de la fonction SI",
    context: "L'entreprise TechCorp, spécialisée dans la distribution de matériel informatique, connaît une forte croissance. Créée il y a 15 ans avec un simple 'Service Informatique', elle compte aujourd'hui 500 employés répartis sur 3 sites. Le directeur général souhaite faire évoluer l'organisation de la fonction SI pour accompagner cette croissance.",
    question: "Analysez l'évolution nécessaire de la fonction SI chez TechCorp. Proposez une nouvelle organisation en justifiant vos choix par rapport aux enjeux de croissance et de multi-sites.",
    points: 15,
    expectedAnswer: [
      "Analyse de l'évolution : passage d'un Service Informatique à une Direction des SI",
      "Justification par la croissance (500 employés) et la complexité multi-sites",
      "Proposition d'organisation hybride : centralisation stratégique + décentralisation opérationnelle",
      "Définition des rôles : DSI central, responsables SI locaux, équipes spécialisées",
      "Mise en place d'une gouvernance SI adaptée au multi-sites",
      "Prise en compte des enjeux de coordination et de cohérence technologique"
    ],
    methodology: [
      "Analyser la situation actuelle (taille, complexité, besoins)",
      "Identifier les enjeux de l'évolution organisationnelle",
      "Proposer une structure adaptée en justifiant les choix",
      "Définir les rôles et responsabilités",
      "Anticiper les difficultés de mise en œuvre"
    ],
    tips: [
      "Utilisez le modèle C.D.H (Centralisée, Décentralisée, Hybride)",
      "Pensez aux facteurs internes (taille, culture) et externes (secteur)",
      "Justifiez toujours vos choix par des arguments business"
    ],
    difficulty: 'Moyen'
  },
  {
    id: 2,
    title: "Missions et transformation digitale",
    context: "La société FinanceConseil, cabinet de conseil en gestion de patrimoine, emploie 80 consultants. Traditionnellement peu digitalisée, elle fait face à une concurrence accrue de fintechs innovantes. Le PDG souhaite engager une transformation digitale et redéfinir les missions de sa petite équipe IT (3 personnes) actuellement focalisée sur la maintenance.",
    question: "Redéfinissez les missions de la fonction SI pour accompagner la transformation digitale de FinanceConseil. Proposez un plan d'évolution des compétences et d'organisation sur 2 ans.",
    points: 20,
    expectedAnswer: [
      "Évolution des missions : de techniques vers stratégiques (modèle T.O.S)",
      "Nouvelles missions stratégiques : pilotage transformation digitale, innovation",
      "Missions organisationnelles : accompagnement changement, formation utilisateurs",
      "Maintien missions techniques : sécurité, infrastructure cloud",
      "Plan d'évolution des compétences : recrutement, formation, partenariats",
      "Organisation sur 2 ans : phase 1 (stabilisation), phase 2 (transformation)",
      "Indicateurs de suivi et mesure du ROI de la transformation"
    ],
    methodology: [
      "Analyser les missions actuelles vs besoins futurs",
      "Utiliser le modèle T.O.S pour structurer les nouvelles missions",
      "Proposer un plan de montée en compétences réaliste",
      "Définir des phases de mise en œuvre",
      "Prévoir les indicateurs de suivi"
    ],
    tips: [
      "Rappelez-vous : T.O.S = Technique, Organisationnel, Stratégique",
      "Dans la finance, la sécurité et la conformité sont critiques",
      "Pensez aux partenariats externes pour compléter les compétences"
    ],
    difficulty: 'Difficile'
  },
  {
    id: 3,
    title: "Choix d'organisation SI multi-filiales",
    context: "Le groupe IndustrialCorp possède 5 filiales dans différents secteurs (automobile, aéronautique, énergie). Chaque filiale a développé ses propres systèmes et équipes IT. Le groupe souhaite optimiser les coûts IT tout en préservant l'agilité métier de chaque filiale.",
    question: "Proposez une organisation SI groupe optimisant les synergies tout en préservant l'autonomie métier des filiales. Analysez les avantages et risques de votre proposition.",
    points: 18,
    expectedAnswer: [
      "Diagnostic de l'existant : organisation décentralisée avec redondances",
      "Proposition d'organisation hybride : centre de services partagés + autonomie métier",
      "Mutualisation : infrastructure, sécurité, achats IT, gouvernance",
      "Autonomie préservée : applications métier, support utilisateur local",
      "Avantages : économies d'échelle, cohérence, expertise mutualisée",
      "Risques : résistance au changement, complexité de gouvernance",
      "Plan de conduite du changement et communication"
    ],
    methodology: [
      "Analyser l'organisation actuelle et ses limites",
      "Identifier les domaines de mutualisation possibles",
      "Définir le niveau d'autonomie à préserver",
      "Évaluer les avantages et risques",
      "Proposer un plan de mise en œuvre"
    ],
    tips: [
      "Pensez au modèle hybride pour équilibrer synergies et autonomie",
      "Identifiez ce qui peut être mutualisé vs ce qui doit rester local",
      "N'oubliez pas les aspects humains et culturels"
    ],
    difficulty: 'Difficile'
  },
  {
    id: 4,
    title: "Évolution des appellations et positionnement",
    context: "StartupTech, entreprise de 200 personnes spécialisée dans l'IoT, a grandi rapidement. Son 'Responsable Informatique' historique souhaite faire évoluer son titre et son positionnement pour mieux refléter les enjeux digitaux de l'entreprise et obtenir une place au comité de direction.",
    question: "Justifiez l'évolution de l'appellation et du positionnement de la fonction SI chez StartupTech. Proposez un argumentaire pour le comité de direction.",
    points: 12,
    expectedAnswer: [
      "Analyse de l'évolution des appellations : de technique vers stratégique",
      "Proposition : 'Directeur Numérique' ou 'Chief Digital Officer'",
      "Justification par les enjeux IoT et transformation digitale",
      "Argumentaire business : création de valeur, innovation, compétitivité",
      "Positionnement au comité de direction : vision stratégique",
      "Nouvelles responsabilités : stratégie digitale, innovation, partenariats"
    ],
    methodology: [
      "Analyser l'évolution historique des appellations",
      "Identifier les enjeux spécifiques de l'entreprise",
      "Proposer une appellation adaptée",
      "Construire un argumentaire business",
      "Définir le nouveau périmètre de responsabilités"
    ],
    tips: [
      "Rappelez l'évolution : Service IT → Direction IT → DSI → Direction Numérique",
      "Dans l'IoT, le digital est au cœur du business model",
      "Argumentez en termes de valeur créée, pas de coûts"
    ],
    difficulty: 'Facile'
  }
];

export default function QuestionsDSCGPage() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showMethodology, setShowMethodology] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile': return 'bg-green-100 text-green-800 border-green-200';
      case 'Moyen': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Difficile': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const resetView = () => {
    setSelectedQuestion(null);
    setShowAnswer(false);
    setShowMethodology(false);
  };

  return (
    <div>
      <CourseNavigation 
        currentSection="Questions DSCG"
        previousHref="/quiz"
        nextHref="/"
        previousTitle="Quiz"
        nextTitle="Accueil"
        progress={100}
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
              <GraduationCap className="text-purple-600" size={32} />
              <h1 className="text-4xl font-bold text-gray-800">
                Questions DSCG
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Cas pratiques et exercices d'application pour l'examen DSCG
            </p>
          </div>

          {selectedQuestion === null ? (
            /* Liste des questions */
            <div>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
                <p className="text-purple-700">
                  Ces exercices reproduisent le format et le niveau d'exigence des questions DSCG. 
                  Chaque cas pratique inclut une méthodologie et des conseils pour optimiser votre préparation.
                </p>
              </div>

              <div className="grid gap-6">
                {dscgQuestions.map((question, index) => (
                  <motion.div
                    key={question.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => setSelectedQuestion(question.id)}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Cas {question.id} : {question.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {question.context}
                          </p>
                        </div>
                        <div className="ml-4 flex flex-col items-end gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                            getDifficultyColor(question.difficulty)
                          }`}>
                            {question.difficulty}
                          </span>
                          <span className="text-sm font-semibold text-purple-600">
                            {question.points} points
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <FileText size={16} />
                            Cas pratique
                          </span>
                          <span className="flex items-center gap-1">
                            <Target size={16} />
                            Méthodologie incluse
                          </span>
                        </div>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Commencer
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Conseils généraux */}
              <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                  <Lightbulb className="text-yellow-500" size={20} />
                  Conseils pour réussir les questions DSCG
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">📝 Méthodologie</h4>
                    <ul className="text-blue-600 space-y-1 text-sm">
                      <li>• Lisez attentivement le contexte</li>
                      <li>• Identifiez les enjeux clés</li>
                      <li>• Structurez votre réponse</li>
                      <li>• Justifiez vos propositions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-700 mb-2">🎯 Points clés</h4>
                    <ul className="text-purple-600 space-y-1 text-sm">
                      <li>• Utilisez le vocabulaire technique</li>
                      <li>• Référencez les modèles du cours</li>
                      <li>• Proposez des solutions concrètes</li>
                      <li>• Anticipez les difficultés</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Question sélectionnée */
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {(() => {
                  const question = dscgQuestions.find(q => q.id === selectedQuestion)!;
                  return (
                    <div>
                      {/* Header de la question */}
                      <div className="flex items-center justify-between mb-6">
                        <button
                          onClick={resetView}
                          className="text-purple-600 hover:text-purple-700 font-medium"
                        >
                          ← Retour à la liste
                        </button>
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                            getDifficultyColor(question.difficulty)
                          }`}>
                            {question.difficulty}
                          </span>
                          <span className="text-sm font-semibold text-purple-600">
                            {question.points} points
                          </span>
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Cas {question.id} : {question.title}
                      </h2>

                      {/* Contexte */}
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                        <h3 className="text-lg font-semibold text-blue-800 mb-3">📋 Contexte</h3>
                        <p className="text-blue-700 leading-relaxed">{question.context}</p>
                      </div>

                      {/* Question */}
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                        <h3 className="text-lg font-semibold text-purple-800 mb-3">❓ Question</h3>
                        <p className="text-purple-700 leading-relaxed font-medium">{question.question}</p>
                      </div>

                      {/* Boutons d'action */}
                      <div className="flex flex-wrap gap-4 mb-8">
                        <button
                          onClick={() => setShowMethodology(!showMethodology)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                        >
                          <Target size={20} />
                          {showMethodology ? 'Masquer' : 'Voir'} la méthodologie
                        </button>
                        <button
                          onClick={() => setShowAnswer(!showAnswer)}
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                        >
                          {showAnswer ? <EyeOff size={20} /> : <Eye size={20} />}
                          {showAnswer ? 'Masquer' : 'Voir'} la correction
                        </button>
                      </div>

                      {/* Méthodologie */}
                      <AnimatePresence>
                        {showMethodology && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6"
                          >
                            <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                              <Target className="text-blue-600" size={20} />
                              Méthodologie recommandée
                            </h3>
                            <ol className="text-yellow-700 space-y-2">
                              {question.methodology.map((step, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="font-semibold text-blue-600 min-w-[24px]">{index + 1}.</span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ol>
                            
                            <div className="mt-4 pt-4 border-t border-yellow-300">
                              <h4 className="font-semibold text-yellow-800 mb-2">💡 Tips spécifiques</h4>
                              <ul className="text-yellow-700 space-y-1">
                                {question.tips.map((tip, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-yellow-600 mt-1">•</span>
                                    <span className="text-sm">{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Correction */}
                      <AnimatePresence>
                        {showAnswer && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-green-50 border border-green-200 rounded-lg p-6"
                          >
                            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                              <CheckCircle className="text-green-600" size={20} />
                              Éléments de correction attendus
                            </h3>
                            <div className="space-y-3">
                              {question.expectedAnswer.map((element, index) => (
                                <div key={index} className="flex items-start gap-3">
                                  <span className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-0.5">
                                    {index + 1}
                                  </span>
                                  <p className="text-green-700 flex-1">{element}</p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </div>
  );
}