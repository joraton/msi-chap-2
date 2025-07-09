'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseNavigation from '@/components/navigation/CourseNavigation';
import { CheckCircle, XCircle, RotateCcw, Trophy, Brain } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quelle est l'appellation la plus récente de la fonction SI ?",
    options: [
      "Service Informatique",
      "Direction Informatique",
      "Direction Numérique (ou Digitale)",
      "Direction des Systèmes d'Information"
    ],
    correctAnswer: 2,
    explanation: "La Direction Numérique (ou Digitale) est l'appellation la plus récente, reflétant les nouvelles attributions et priorités du SI dans la transformation digitale.",
    category: "Place de la fonction"
  },
  {
    id: 2,
    question: "Que signifie l'acronyme mnémotechnique T.O.S pour les missions SI ?",
    options: [
      "Technique, Opérationnel, Stratégique",
      "Technique, Organisationnel, Stratégique",
      "Technologie, Organisation, Sécurité",
      "Transformation, Optimisation, Support"
    ],
    correctAnswer: 1,
    explanation: "T.O.S signifie Technique, Organisationnel, Stratégique - les trois dimensions principales des missions de la fonction SI.",
    category: "Missions de la fonction"
  },
  {
    id: 3,
    question: "Quel est le principal avantage d'une structure SI centralisée ?",
    options: [
      "Proximité avec les utilisateurs",
      "Réactivité aux besoins métier",
      "Cohérence des choix technologiques",
      "Autonomie des divisions"
    ],
    correctAnswer: 2,
    explanation: "La structure centralisée permet une cohérence des choix technologiques et des économies d'échelle, même si elle peut être moins réactive aux besoins locaux.",
    category: "Organisation de la fonction"
  },
  {
    id: 4,
    question: "Quelle évolution caractérise le passage de 'Direction Informatique' à 'Direction des Systèmes d'Information' ?",
    options: [
      "Augmentation du budget IT",
      "Technicité en régression au profit des enjeux informationnels",
      "Centralisation des équipes",
      "Focus sur la sécurité"
    ],
    correctAnswer: 1,
    explanation: "Ce passage reflète une technicité en régression au profit des enjeux informationnels, montrant l'évolution vers une approche plus stratégique.",
    category: "Place de la fonction"
  },
  {
    id: 5,
    question: "Que signifie l'acronyme C.D.H pour les types d'organisation SI ?",
    options: [
      "Contrôle, Développement, Hybride",
      "Centralisée, Décentralisée, Hybride",
      "Coordination, Direction, Hiérarchie",
      "Cloud, Data, Hardware"
    ],
    correctAnswer: 1,
    explanation: "C.D.H signifie Centralisée, Décentralisée, Hybride - les trois types principaux d'organisation de la fonction SI.",
    category: "Organisation de la fonction"
  },
  {
    id: 6,
    question: "Quel est un défi actuel majeur de la fonction SI ?",
    options: [
      "Gestion des équipements",
      "Maintenance des systèmes",
      "Sécurité et conformité (RGPD)",
      "Support utilisateur"
    ],
    correctAnswer: 2,
    explanation: "La sécurité et conformité, notamment avec le RGPD, représentent un défi majeur actuel, au-delà des missions techniques traditionnelles.",
    category: "Missions de la fonction"
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const getScoreColor = (score: number) => {
    if (score >= 5) return 'text-green-600';
    if (score >= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = (score: number) => {
    if (score === 6) return 'Parfait ! Vous maîtrisez parfaitement le sujet ! 🏆';
    if (score >= 5) return 'Excellent ! Très bonne compréhension du cours ! 🎉';
    if (score >= 4) return 'Bien ! Quelques points à revoir mais c\'est solide ! 👍';
    if (score >= 3) return 'Correct ! Il serait bon de relire certaines sections ! 📚';
    return 'À revoir ! Nous vous conseillons de reprendre le cours ! 📖';
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div>
        <CourseNavigation 
          currentSection="Quiz - Résultats"
          previousHref="/section-3"
          nextHref="/questions-dscg"
          previousTitle="Section III - Organisation"
          nextTitle="Questions DSCG"
          progress={83.3}
        />
        
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Trophy className="mx-auto text-yellow-500 mb-6" size={64} />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Résultats du Quiz</h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className={`text-6xl font-bold mb-4 ${getScoreColor(score)}`}>
                {score}/{questions.length}
              </div>
              <div className="text-xl text-gray-600 mb-6">
                {getScoreMessage(score)}
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600">{score}</div>
                  <div className="text-sm text-green-700">Bonnes réponses</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="text-2xl font-bold text-red-600">{questions.length - score}</div>
                  <div className="text-sm text-red-700">Erreurs</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">{Math.round((score / questions.length) * 100)}%</div>
                  <div className="text-sm text-blue-700">Score</div>
                </div>
              </div>
            </div>

            {/* Détail des réponses */}
            <div className="text-left space-y-4 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Détail des réponses</h2>
              {questions.map((question, index) => {
                const isCorrect = selectedAnswers[index] === question.correctAnswer;
                return (
                  <div key={question.id} className={`p-4 rounded-lg border-2 ${
                    isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                  }`}>
                    <div className="flex items-start gap-3 mb-2">
                      {isCorrect ? 
                        <CheckCircle className="text-green-600 mt-1" size={20} /> :
                        <XCircle className="text-red-600 mt-1" size={20} />
                      }
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 mb-1">
                          Question {index + 1}: {question.question}
                        </div>
                        <div className={`text-sm ${
                          isCorrect ? 'text-green-700' : 'text-red-700'
                        }`}>
                          Votre réponse: {question.options[selectedAnswers[index]]}
                        </div>
                        {!isCorrect && (
                          <div className="text-sm text-green-700 mt-1">
                            Bonne réponse: {question.options[question.correctAnswer]}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={resetQuiz}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto"
            >
              <RotateCcw size={20} />
              Recommencer le quiz
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const isCorrect = selectedAnswers[currentQuestion] === question.correctAnswer;

  return (
    <div>
      <CourseNavigation 
        currentSection={`Quiz - Question ${currentQuestion + 1}/${questions.length}`}
        previousHref="/section-3"
        nextHref="/questions-dscg"
        previousTitle="Section III - Organisation"
        nextTitle="Questions DSCG"
        progress={75 + (currentQuestion / questions.length) * 8.3}
      />
      
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain className="text-orange-600" size={32} />
              <h1 className="text-4xl font-bold text-gray-800">Quiz d'évaluation</h1>
            </div>
            <p className="text-xl text-gray-600">
              Testez vos connaissances sur la fonction SI
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} sur {questions.length}</span>
              <span>{question.category}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {question.question}
              </h2>
              
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ";
                  
                  if (!isAnswered) {
                    buttonClass += "border-gray-200 hover:border-blue-300 hover:bg-blue-50";
                  } else {
                    if (index === question.correctAnswer) {
                      buttonClass += "border-green-500 bg-green-50 text-green-800";
                    } else if (index === selectedAnswers[currentQuestion]) {
                      buttonClass += "border-red-500 bg-red-50 text-red-800";
                    } else {
                      buttonClass += "border-gray-200 bg-gray-50 text-gray-500";
                    }
                  }
                  
                  return (
                    <button
                      key={index}
                      onClick={() => !isAnswered && handleAnswerSelect(index)}
                      disabled={isAnswered}
                      className={buttonClass}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-semibold">{String.fromCharCode(65 + index)}.</span>
                        <span>{option}</span>
                        {isAnswered && index === question.correctAnswer && (
                          <CheckCircle className="text-green-600 ml-auto" size={20} />
                        )}
                        {isAnswered && index === selectedAnswers[currentQuestion] && index !== question.correctAnswer && (
                          <XCircle className="text-red-600 ml-auto" size={20} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Explanation */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`p-6 rounded-lg border-2 mb-8 ${
                  isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  {isCorrect ? 
                    <CheckCircle className="text-green-600 mt-1" size={24} /> :
                    <XCircle className="text-red-600 mt-1" size={24} />
                  }
                  <div>
                    <h3 className={`font-semibold mb-2 ${
                      isCorrect ? 'text-green-800' : 'text-red-800'
                    }`}>
                      {isCorrect ? 'Correct !' : 'Incorrect'}
                    </h3>
                    <p className={`text-sm ${
                      isCorrect ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          {showExplanation && (
            <div className="text-center">
              <button
                onClick={nextQuestion}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}