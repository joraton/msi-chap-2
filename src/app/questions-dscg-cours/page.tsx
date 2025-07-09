'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, BookOpen, FileText, Award } from 'lucide-react';
import CourseNavigation from '@/components/navigation/CourseNavigation';

interface Question {
  id: string;
  session: string;
  dossier: string;
  question: string;
  correction: string;
}

const questions: Question[] = [
  {
    id: 'q1-2021',
    session: 'DSCG UE5 – SESSION 2021',
    dossier: 'DOSSIER 1 – SCHÉMA DIRECTEUR DU SYSTÈME D&apos;INFORMATION',
    question: 'Q1 : Vous décrirez simplement 2 types d&apos;organisations SI possibles pour supporter la future Direction des Systèmes d&apos;information en cohérence avec le contexte.',
    correction: 'Les organisations les plus communes pour répondre au contexte de l&apos;énoncé sont:\n\n• **Un système d&apos;Information fusionné entre les 3 organismes** : Cela implique de centraliser les éléments du système d&apos;information (infrastructure, progiciels, membres de la DSI) sur un seul site. Un organisme sera choisi pour héberger cette organisation, et le réseau sera interconnecté vers ce "siège" de la DSI. Le projet consistera à sélectionner et regrouper les solutions au sein d&apos;un même SI.\n\n• **Un Système d&apos;Information divisé entre les 3 organismes** : Cela consiste à conserver une Direction des Systèmes d&apos;Information répartie entre les trois organismes, mais avec un Système d&apos;Information unique. Les infrastructures restent interconnectées, les membres de la DSI ne sont pas obligatoirement regroupés, et les fournitures de services sont partiellement fusionnées (certains outils métiers seront regroupés, d&apos;autres pourront rester séparés).\n\n• **Un Système d&apos;Information indépendant entre les 3 organismes** : Consiste à conserver des Systèmes d&apos;Information séparés. La loi Elan permet le regroupement des organismes au sein d&apos;une SAC sans obligation de fusion. Chaque DSI reste indépendante, et un service complémentaire de "reporting groupe" peut être mis en œuvre au sein de la SAC pour les aspects réglementaires.\n\n• **Un système d&apos;information externalisé** : Il peut être externalisé auprès d&apos;un prestataire externe ou d&apos;un Centre de Service Partagé (CSP). Cette organisation libère de certaines contraintes d&apos;investissement (par exemple, via le SaaS) mais exige une réorganisation profonde des membres de la DSI vers des rôles plus axés sur la "consommation des services".'
  },
  {
    id: 'q2-2021',
    session: 'DSCG UE5 – SESSION 2021',
    dossier: 'DOSSIER 1 – SCHÉMA DIRECTEUR DU SYSTÈME D&apos;INFORMATION',
    question: 'Q2 : Après avoir rappelé la définition d&apos;un schéma directeur (SD), il vous est demandé d&apos;établir un schéma directeur de cette transformation dans un des cas présentés à la question 1.',
    correction: 'Le **schéma directeur du Système d&apos;Information (SDSI)** est un document de synthèse qui définit le Système d&apos;information actuel, le Système d&apos;information cible, et les transformations à opérer pour répondre aux objectifs fixés. Il est établi par la Direction informatique et validé par la Direction Générale. Son but est d&apos;aligner la stratégie du Système d&apos;Information sur la stratégie de l&apos;organisation. Un Schéma directeur est nécessaire quand la DSI opère une transformation significative de son organisation ou des composants internes de son SI.'
  },
  {
    id: 'q4-2021',
    session: 'DSCG UE5 – SESSION 2021',
    dossier: 'DOSSIER 1 – SCHÉMA DIRECTEUR DU SYSTÈME D&apos;INFORMATION',
    question: 'Q4 : Vous définissez dans le contexte du projet de transformation un facteur clé de succès et un risque identifié distinct.',
    correction: 'Chaque élément peut être un risque ou un facteur clé de succès:\n\n• **Analyse et audit correctement menés** : Sont la base d&apos;une bonne définition du projet et d&apos;identification des transformations.\n\n• **Coopération des différentes DSI existantes** : Indispensable pour travailler ensemble dans la nouvelle DSI.\n\n• **Choix de la solution progiciel pour le nouveau SI** : Doit remporter l&apos;adhésion des utilisateurs et fournir les services requis.\n\n• **Qualité de prestation des intervenants** : Choix des membres du projet et des prestataires/fournisseurs en fonction de leurs expériences et compétences.\n\n• **Coopération des utilisateurs** : Adhésion des utilisateurs finaux à la nouvelle organisation et aux choix de la DSI, et définition des nouveaux rôles.'
  },
  {
    id: 'q6-2023',
    session: 'DSCG UE5 – SESSION 2023',
    dossier: 'DOSSIER 2 – DIRECTION DE PROJET',
    question: 'Q6 : Pour piloter l&apos;ensemble de vos projets au sein du programme de bascule des clients de l&apos;ESN, vous décidez d&apos;organiser un Comité de pilotage mensuel. Quels sont les participants à convier à ce comité ?',
    correction: 'Les membres à convier à un Comité de pilotage (Copil) de niveau "programme de projet" sont:\n\n• Le **chef ou le directeur de projet** (votre rôle), qui animera le comité.\n\n• Le **sponsor du projet**, qui finance le budget du programme (généralement un directeur opérationnel au sein d&apos;une ESN).\n\n• Les **membres de l&apos;équipe** (un membre sachant sur un sujet peut intervenir, ou votre chef de projet).\n\n• Le **donneur d&apos;ordre du programme** (votre client), généralement un manager opérationnel délégué par la direction générale.'
  },
  {
    id: 'q9-2023',
    session: 'DSCG UE5 – SESSION 2023',
    dossier: 'DOSSIER 2 – DIRECTION DE PROJET',
    question: 'Q9 : Après avoir défini la notion d&apos;urbanisation du Système d&apos;information, présenter un minimum de trois éléments de révision des documents d&apos;urbanisation dans le cadre des bascules de GED chez vos clients.',
    correction: 'L&apos;**urbanisation du système d&apos;information** consiste à s&apos;assurer que chaque évolution ou transformation du SI conserve de la cohérence vis-à-vis des objectifs métiers et opérationnels de l&apos;entreprise. Cette discipline est inscrite dans le respect de la stratégie du Système d&apos;information et vise à assurer la direction de la transformation continue du SI, tout en conservant un SI applicatif homogène.\n\nDans le cadre des bascules de GED, la révision des documents d&apos;urbanisation impacte plusieurs éléments:\n\n• **Éléments d&apos;infrastructure Technique** : La nouvelle application de GED aura son propre Dossier d&apos;Architecture Technique (DAT), qui fait partie de l&apos;urbanisation du SI.\n\n• **Éléments d&apos;interface** : Les interfaces ou technologies pouvant évoluer avec la nouvelle GED nécessitent de décrire les flux entre les applications du SI qui seront orientés vers la nouvelle GED.\n\n• **Éléments de sécurité** : L&apos;urbanisation du SI doit veiller au respect des profils et sessions de connexion des utilisateurs pour accéder au service, la GED étant liée à des utilisateurs.\n\n• **Éléments de processus** : La nouvelle GED peut apporter de nouvelles fonctionnalités applicatives à cataloguer dans l&apos;urbanisation du SI, renseignées sous forme de cartographie des processus.\n\n• **Éléments d&apos;architecture applicative** : La nouvelle GED est une application à part entière remplaçant l&apos;ancienne, avec ses versions, serveurs applicatifs principaux et secondaires (base de données, stockage) à identifier dans la mise à jour de l&apos;urbanisation.'
  },
  {
    id: 'q1-2014',
    session: 'DSCG UE5 – SESSION 2014',
    dossier: 'DOSSIER 1 : GOUVERNANCE DU SYSTEME D&apos;INFORMATION',
    question: 'Question 1 : Rédiger une note d&apos;une trentaine de lignes présentant le concept d&apos;alignement stratégique du système d&apos;information et son application à cette société.',
    correction: 'Le **concept d&apos;alignement stratégique du système d&apos;information** exprime la démarche visant à faire correspondre les objectifs du système d&apos;information avec ceux de l&apos;organisation (stratégie globale et stratégie métier). Il y a une interaction constante entre les deux démarches jusqu&apos;à ce qu&apos;elles soient cohérentes. Le SI doit intégrer les objectifs stratégiques et peut même générer de nouvelles opportunités pour modifier la stratégie de l&apos;entreprise.'
  },
  {
    id: 'q2-2014',
    session: 'DSCG UE5 – SESSION 2014',
    dossier: 'DOSSIER 1 : GOUVERNANCE DU SYSTEME D&apos;INFORMATION',
    question: 'Question 2 : Quel commentaire peut-on faire à la lecture de l&apos;organigramme de l&apos;entreprise (annexe 1) en matière de management du système d&apos;information ?',
    correction: 'L&apos;organigramme de l&apos;entreprise (Albatros) montre que le système d&apos;information avait initialement pour objectif de répondre aux besoins de la direction financière, puis des autres directions. L&apos;informatique est donc sous la responsabilité de Michel Durand. Le terme "informatique" lui-même indique une préoccupation principalement technique à l&apos;époque. L&apos;entreprise ne s&apos;est dotée que de compétences techniques pour le fonctionnement du réseau et des applications. Cette organisation atteint ses limites car le service informatique actuel ne peut plus gérer les évolutions requises, ni en volume ni en compétences, face aux défis du management des systèmes d&apos;information dans son secteur.'
  },
  {
    id: 'q3-2014',
    session: 'DSCG UE5 – SESSION 2014',
    dossier: 'DOSSIER 1 : GOUVERNANCE DU SYSTEME D&apos;INFORMATION',
    question: 'Question 3 : Quelles sont les modifications à envisager dans l&apos;organigramme et les conséquences en termes de ressources humaines ?',
    correction: 'Face aux défis, une **Direction des Systèmes d&apos;Information (DSI) doit être créée**. Un Directeur des Systèmes d&apos;Information (DSI) compétent doit être recruté pour porter le projet de reconfiguration du SI et gérer la relation avec les prestataires.\n\nDeux positionnements sont possibles pour la DSI:\n\n• **Au même niveau que la direction financière et les autres directions** : Elle aurait une fonction de support, répondant aux demandes des métiers et de la direction générale.\n\n• **Remontée sous la Direction générale** : Cela mettrait en évidence sa nature transversale, lui donnant plus d&apos;autonomie pour initier et porter les projets.\n\nLe DSI recruté devra avoir des compétences technologiques, communicationnelles, managériales et de gestion. La responsable informatique actuelle et les techniciens devront être intégrés à la nouvelle DSI. La direction générale doit s&apos;impliquer pour accompagner le changement et surmonter les résistances.'
  },
  {
    id: 'q1-2019-urb',
    session: 'DSCG UE5 – SESSION 2019',
    dossier: 'DOSSIER 1 : URBANISATION DU SI',
    question: 'Q1 : Pourquoi une démarche d&apos;urbanisation du SI est-elle, dans ce cas, opportune et pertinente ?',
    correction: 'L&apos;**urbanisation** est une approche "top-down" qui vise à faciliter l&apos;évolutivité et l&apos;adéquation des SI avec les processus, à identifier et partager les fonctions transverses, et à renforcer la cohérence du SI, tout en préservant le patrimoine informationnel.\n\nPour SOLIDOR, cette démarche est **opportune** car c&apos;est le bon moment pour déployer ses outils CRM et P&T, adossés à son ERP existant, afin de renforcer sa relation client et moderniser ses outils de suivi des flux face à l&apos;arrivée de nouveaux concurrents. Elle est **pertinente** car l&apos;entreprise a construit son SI progressivement. L&apos;urbanisation permet de conserver les applications existantes qui ont fait leurs preuves, tout en intégrant de façon fluide les nouvelles applications métiers (CRM et P&T) pour répondre aux nouveaux besoins.'
  },
  {
    id: 'q1-2019-align',
    session: 'DSCG UE5 – SESSION 2019',
    dossier: 'DOSSIER 2 : ALIGNEMENT STRATÉGIQUE DU SI',
    question: 'Q1 : En vous basant sur le modèle d&apos;alignement stratégique, que vous rappellerez simplement, il vous est demandé d&apos;analyser l&apos;adéquation entre la stratégie de SOLIDOR et sa stratégie SI.',
    correction: 'Le **modèle d&apos;alignement stratégique**, élaboré par Henderson et Venkatraman en 1993, vise la mise en cohérence de la stratégie des SI et de la stratégie générale de l&apos;entreprise. C&apos;est un processus dynamique d&apos;adaptation permanente. Il repose sur la cohérence entre quatre domaines:\n\n1. La **stratégie de l&apos;entreprise** (objectifs, produits, marchés, compétences distinctives).\n2. La **stratégie de développement technologique** (domaine technologique, compétences, gouvernance).\n3. L&apos;**infrastructure et les processus de l&apos;entreprise** (administrative, processus d&apos;affaire, managériaux).\n4. L&apos;**infrastructure et les processus des SI** (architecture, portefeuille d&apos;applications, processus de développement, contrôle).\n\nL&apos;alignement stratégique chez SOLIDOR montre une stratégie d&apos;entreprise alignée avec le développement technologique, un développement technologique et infrastructure/processus SI en cohérence, mais des difficultés au niveau de l&apos;infrastructure et processus de l&apos;entreprise qui nécessitent une harmonisation des processus managériaux.'
  },
  {
    id: 'q4-2019',
    session: 'DSCG UE5 – SESSION 2019',
    dossier: 'DOSSIER 2 : ALIGNEMENT STRATÉGIQUE DU SI',
    question: 'Q4 : Quelles suggestions pourriez-vous faire à la DSI de SOLIDOR notamment en termes de suivi de la qualité de ses activités ?',
    correction: 'Une fois le SI urbanisé et les nouvelles solutions implémentées, SOLIDOR doit s&apos;assurer de la qualité de ses activités amont et aval. La DSI peut adopter une **démarche d&apos;audit** pour diagnostiquer les faiblesses résiduelles (risques internes/externes) et définir des pistes d&apos;amélioration. L&apos;auditeur peut se concentrer sur la sécurité physique, la confidentialité et la traçabilité des accès, le respect des consignes de sécurité SI et les indicateurs de performance.'
  },
  {
    id: 'q1-2020',
    session: 'DSCG UE5 – SESSION 2020',
    dossier: 'Cabinet « CECL20 »',
    question: 'Q1 : Pourquoi la nomination d&apos;un « DPO » pour un cabinet d&apos;expertise comptable est-elle obligatoire ?',
    correction: 'La nomination d&apos;un DPO est obligatoire pour les experts-comptables car ils manipulent un **grand volume de données personnelles très sensibles** (ex: gestion des bulletins de paie, évolutions de carrière).'
  },
  {
    id: 'q2-2020',
    session: 'DSCG UE5 – SESSION 2020',
    dossier: 'Cabinet « CECL20 »',
    question: 'Q2 : Pourquoi le législateur donne-t-il la possibilité de mutualiser la fonction de « DPO » entre plusieurs entreprises ?',
    correction: 'La fonction de DPO peut être mutualisée pour **mutualiser les coûts salariaux** et réaliser des **économies d&apos;échelle**, notamment lorsque l&apos;entreprise est de taille modeste.'
  },
  {
    id: 'q3-2020',
    session: 'DSCG UE5 – SESSION 2020',
    dossier: 'Cabinet « CECL20 »',
    question: 'Q3 : Quel est le rôle du « DPO » vis-à-vis de la direction ?',
    correction: 'Le DPO doit assurer le rôle de **relais auprès du chef d&apos;entreprise ou des responsables de traitement des données** pour les informer sur les obligations du RGPD et réduire les risques de non-conformité. Il doit aussi les informer sur les éventuelles sanctions en cas de non-conformité.'
  },
  {
    id: 'q8-2020',
    session: 'DSCG UE5 – SESSION 2020',
    dossier: 'Cabinet « CECL20 »',
    question: 'Q8 : Comment mettre en conformité les contrats du cabinet avec ses prestataires et sous-traitants par rapport à la règlementation sur le traitement des données personnelles ?',
    correction: 'Il s&apos;agit de **proposer une mise à jour de conformité** de l&apos;ensemble des contrats en cours. Le RGPD indique que le ou les sous-traitants sont coresponsables des traitements de données personnelles. Un contrat écrit et signé doit préciser l&apos;ensemble des obligations de chaque partie.'
  },
  {
    id: 'q12-2020',
    session: 'DSCG UE5 – SESSION 2020',
    dossier: 'Cabinet « CECL20 »',
    question: 'Q12 : Quels sont les obligations liées au RGPD au sein d&apos;un cabinet d&apos;expertise-comptable ?',
    correction: 'Le cabinet d&apos;experts-comptables est un **responsable du traitement (data controller)**. Sa mission est d&apos;analyser comment toutes les données à caractère personnel sont collectées, traitées, stockées, protégées et sécurisées. Le cabinet doit s&apos;assurer que tous les processus et usages respectent les critères du RGPD, notamment:\n\n• Recueillir le consentement pour collecter et traiter les données.\n• Minimiser les données.\n• Habiliter l&apos;accès selon les profils des collaborateurs.\n• Donner la possibilité de modifier, supprimer, récupérer les données.\n• Satisfaire les conditions légales de stockage.'
  },
  {
    id: 'q13-2020',
    session: 'DSCG UE5 – SESSION 2020',
    dossier: 'Cabinet « CECL20 »',
    question: 'Q13 : Quelles sont les solutions informatiques possibles ? vous mettrez en évidence les avantages et les contraintes de chacune des solutions.',
    correction: '**Solutions en interne (On-premise)** : Le responsable du traitement doit assurer la **sécurité physique des serveurs** (lieux protégés, redondances) et équiper toutes les infrastructures (serveurs, postes, mobiles) et applicatifs d&apos;outils de sécurité (antivirus, pare-feu). Il doit également sensibiliser les collaborateurs aux bonnes pratiques.\n\n**Solutions externalisées (SaaS)** : La sécurité des serveurs et applicatifs hébergés est assurée par le prestataire infogérant ou le CSP (Cloud Service Provider). De nombreux prestataires offrent des infrastructures techniques fiables avec une sécurité 24/7.'
  },
  {
    id: 'q14-2020',
    session: 'DSCG UE5 – SESSION 2020',
    dossier: 'Cabinet « CECL20 »',
    question: 'Q14 : Comment mettre en œuvre les obligations liées au RGPD chez les clients d&apos;un cabinet d&apos;expertise-comptable ? Quelles sont les préconisations de l&apos;Ordre des experts-comptables en la matière ?',
    correction: 'Le cabinet est un **sous-traitant (data processor)** de ses clients. Le DPO du cabinet doit vérifier la façon dont les données de ses clients sont manipulées et traitées. L&apos;Ordre des experts-comptables préconise de **reconsidérer les contrats entre les cabinets comptables et leurs clients** en incluant de nouvelles clauses dédiées à leur responsabilité dans les traitements des données personnelles dans la lettre de mission.'
  },
  {
    id: 'q19-2020',
    session: 'DSCG UE5 – SESSION 2020',
    dossier: 'Cabinet « CECL20 »',
    question: 'Q19 : Quelles sont les cinq questions que vous aimeriez poser (individuellement et en face à face) à vos employeurs pour évaluer leur niveau d&apos;information en terme de sécurité du « SI » ?',
    correction: 'Exemple de questions:\n\n1. Quelles sont les principales agressions en provenance de l&apos;extérieur ?\n2. Quelles sont les principales agressions venues en provenance de l&apos;intérieur ?\n3. Lesquelles sont les plus coûteuses en termes d&apos;impact et de dégâts selon vous ?\n4. Quels sont les moyens de vous protéger dans chacun de ces deux cas ?\n5. Quel est le coût global annuel des mesures de protection de votre entreprise ?'
  },
  {
    id: 'q20-2020',
    session: 'DSCG UE5 – SESSION 2020',
    dossier: 'Cabinet « CECL20 »',
    question: 'Q20 : Comment pourriez-vous traiter et exploiter leurs réponses afin d&apos;améliorer la sécurité du « SI » du cabinet ?',
    correction: 'Il est possible de **quantifier les réponses** (ex: grille de 0 à 10) et de calculer une moyenne pour évaluer le niveau d&apos;information des employeurs. En fonction de cette moyenne, des actions spécifiques peuvent être proposées, axées sur des mesures de précautions **actives** (logiciels antivirus, sauvegardes, PCA, formations, VPN) et/ou **passives** (bonnes pratiques, gestion des mots de passe, vigilance face au phishing/ransomware). Il peut être proposé d&apos;organiser des sessions de formation avec des consultants spécialisés, surtout pour ceux qui pratiquent le télétravail, pour assurer la conformité avec la réglementation et les bonnes pratiques de cybersécurité.'
  }
];

export default function QuestionsDSCGCoursPage() {
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  const [selectedSession, setSelectedSession] = useState<string>('all');

  const toggleQuestion = (questionId: string) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId);
    } else {
      newExpanded.add(questionId);
    }
    setExpandedQuestions(newExpanded);
  };

  const sessions = Array.from(new Set(questions.map(q => q.session)));
  const filteredQuestions = selectedSession === 'all' 
    ? questions 
    : questions.filter(q => q.session === selectedSession);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <CourseNavigation 
        currentSection="Cas pratiques"
        progress={100}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
             <Award className="text-blue-600" size={32} />
             <h1 className="text-4xl font-bold text-gray-800">
               Cas pratiques
             </h1>
           </div>
           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             Compilation des questions et corrections DSCG UE5 - Fonction Système d&apos;Information
           </p>
        </motion.div>

        {/* Filtre par session */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Filtrer par session
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSession('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedSession === 'all'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Toutes les sessions
              </button>
              {sessions.map((session) => (
                <button
                  key={session}
                  onClick={() => setSelectedSession(session)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedSession === session
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {session.split('–')[1]?.trim() || session}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Liste des questions */}
        <div className="space-y-6">
          {filteredQuestions.map((question, index) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* En-tête de la question */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
                <h3 className="font-semibold text-lg">{question.session}</h3>
                <p className="text-blue-100 text-sm mt-1">{question.dossier}</p>
              </div>

              {/* Question */}
              <div className="p-6">
                <div 
                  className="flex items-start justify-between cursor-pointer"
                  onClick={() => toggleQuestion(question.id)}
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-gray-800 mb-2 flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{question.question}</span>
                    </h4>
                  </div>
                  <button className="ml-4 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    {expandedQuestions.has(question.id) ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </button>
                </div>

                {/* Correction */}
                {expandedQuestions.has(question.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-gray-200"
                  >
                    <h5 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Correction
                    </h5>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {question.correction}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucune question trouvée
            </h3>
            <p className="text-gray-500">
              Aucune question ne correspond aux critères de filtrage sélectionnés.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}