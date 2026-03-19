// /* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Carmène",
  title : "Bonjour, je suis Carmène",
  subTitle : emoji(
    "Je suis actuellement étudiante en Master 2 Data Science et Intelligence Artificielle, fortement investie dans l’analyse de données, l’apprentissage automatique et la création de solutions intelligentes qui transforment les données en décisions stratégiques."
  ),
  resumeLink:
    "developerFolio-master/developerFolio-master/public/Mon-Cv-PFE.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Carmene99",
  linkedin: "https://www.linkedin.com/in/gwladys-carmène-kienou-215608264/",
  gmail: "mailto:kcarmene07@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "💡 Ce que je fais",
  subTitle: "Je transforme les données en insights exploitables grâce aux outils de data science et d’IA suivants : ",
  skills: [
    // emoji(
    //   "⚡ Prétraitement, nettoyage et manipulation de grandes quantités de données"
    // ),
    // emoji("⚡ Analyse de données complexes pour générer des insights exploitables"),
    // emoji(
    //   "⚡ Création de tableaux de bord interactifs et visualisations avancées"
    // ),
    // emoji("⚡ Intégration d’IA dans des applications web et solutions business"),
    // emoji(
    //   "⚡ Développement et déploiement de modèles d’apprentissage automatique"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
    {
      skillName: "Python (Pandas, Numpy, Scikit-learn, TensorFlow, PyTorch)",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL & gestion de bases de données",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Machine Learning & Deep Learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Analyse et visualisation de données",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Modèles prédictifs & IA",
      fontAwesomeClassname: "fas fa-robot"
    },
     {
      skillName: "HTML5 & CSS3",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Cloud & services (AWS, Firebase)",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker & déploiement",
      fontAwesomeClassname: "fab fa-docker"
    },
    // {
    //   skillName: "HTML5 & CSS3",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};




// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Université Privée Mundiapolis, Casablanca",
      logo: require("./assets/images/logo-mundiapolis.png"),
      subHeader: "Master Data Science et Intelligence Artificiell",
      duration: "Septembre 2024 - Juillet 2026",
      desc: "Formation axée sur l’analyse de données, le machine learning et l’intelligence artificielle avec réalisation de projets pratiques.",
      descBullets: [
        "Développement de modèles de Machine Learning (classification, régression, clustering.",
        "Réalisation de projets et stage en Data Science.",
        "Utilisation d’outils comme Python, Pandas, Scikit-learn et Power BI."
      ]
    },
    {
      schoolName: "Université Privée Mundiapolis, Casablanca",
      logo: require("./assets/images/logo-mundiapolis.png"),
      subHeader: "Licence Génie Logiciel - option Développement Web",
      duration: "September 2020 - Juillet 2023",
      desc: "Formation en développement logiciel et web avec acquisition de solides bases en programmation et conception d’applications.",
      descBullets: [
        "Développement d’applications web avec HTML, CSS, JavaScript et frameworks modernes.",
        "Conception et gestion de bases de données (SQL).",
        "Réalisation de projets académiques et stages en développement web."
       ]

    }
  ]
}


// Your top 3 proficient stacks/tech experience

const techStack = {
  
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
    Stack: "⚡ Je traite des données massives pour produire des informations fiables grâce à des techniques avancées de préparation et de nettoyage.",
  },
  {
    Stack: "⚡ J’analyse des données complexes afin de produire des insights stratégiques et orienter la prise de décision.",
  },
  {
    Stack: "⚡ Je conçois des tableaux de bord interactifs et des visualisations avancées pour valoriser les données.",
  },
  {
    Stack: "⚡ J’intègre des solutions d’intelligence artificielle dans des applications web et des environnements métier.",
  },
  {
    Stack: "⚡ Je développe, optimise et déploie des modèles de machine learning à fort impact.",
  }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Stagiaire Analyste de Données",
      company: "TELECEL FASO",
      companyUrl: "https://www.telecelfaso.bf/", 
      companylogo: require("./assets/images/Telecel-logo.jpg"),
      date: "Aout 2025 – Octobre 2025",
      desc: "Au cours de ce stage, j'ai piloté l'exploitation des données pour soutenir la stratégie de croissance de l'entreprise à travers les missions suivantes :",
      descBullets: [
        "Gestion du cycle de vie des données: Collecte de données provenant de sources hétérogènes et nettoyage approfondi (Data Cleaning) pour garantir l'intégrité et la fiabilité des analyses.",
        "Visualisation et Reporting : Création de tableaux de bord interactifs pour traduire des données complexes en insights actionnables, facilitant ainsi la prise de décision stratégique par la direction.",
        "Analyse Prédictive : Développement d'un modèle de prévision du chiffre d'affaires à un horizon de 3 ans, basé sur les données historiques de l'entreprise en utilisant la bibliothèque Prophet."
      ]
    },
    {
      role: "Stagiaire Développeur Web",
      company: "WEB AGENCY MAROC",
      companyUrl: "https://www.webagency-maroc.com/", 
      companylogo: require("./assets/images/web-agency-logo.jpg"),
      date: "Mai 2024 – Septembre 2024",
      desc: "Stage de perfectionnement technique axé sur la performance web et l'optimisation de la visibilité numérique des projets.",
        descBullets: [
        "Conception & Développement Web: Développement de solutions web robustes en appliquant les bonnes pratiques de programmation pour garantir des sites performants.",
        "Optimisation de l'Expérience Utilisateur (UX) : Amélioration des interfaces pour offrir une navigation intuitive, fluide et centrée sur les besoins de l'utilisateur.",
        "Stratégie SEO (Référencement Naturel) : Rédaction et intégration de contenus optimisés pour les moteurs de recherche, visant à accroître le trafic organique et la visibilité en ligne.",
        "Maintenance & Évolution : Analyse de l'existant pour apporter des correctifs techniques et des améliorations ergonomiques continues."
      ]
    },
    {
      role: "Stagiaire Développeur Web (PFE)",
      company: "WEB AGENCY MAROC",
      companyUrl: "https://www.webagency-maroc.com/", 
      companylogo: require("./assets/images/web-agency-logo.jpg"),
      date: "Février 2023 – Juillet 2023",
      desc: "Conception et déploiement d'une plateforme de mise en relation entre plombiers et particuliers, visant à digitaliser l'accès aux services de dépannage de proximité.",
      descBullets: [
        "Développement Full Stack : Conception de l'interface utilisateur (Front-end) et programmation de la logique métier (Back-end) en utilisant PHP.",
        "Gestion de Données : Architecture et connexion de la base de données relationnelle pour assurer une gestion fluide des utilisateurs et des interventions.",
        "Intégration & Design : Création d'une interface ergonomique et responsive, optimisant l'expérience utilisateur (UX) sur différents terminaux.",
        "Mise en Production : Responsable du déploiement complet de la solution, garantissant l'accessibilité du site en ligne."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Mes Projets",
  subtitle: "Réalisations Marquantes et Études de Cas",
  projects: [
    {
      image: require("./assets/images/img-9.png"),
      projectName: "MundiaBot - Assistant d’Orientation IA (RAG & LLM)",
      projectDesc: "Automatiser l'orientation académique 24h/24 via un agent intelligent capable de recommander des formations en temps réel selon le profil et les notes de l'étudiant.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Carmene99/MundiaBot-Orientation-IA"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/coronavirus.png"),
      projectName: "Analyse Pandémique COVID-19",
      projectDesc: "Transformer des données brutes complexes en indicateurs visuels pour comprendre la dynamique de la pandémie et l'efficacité des réponses sanitaires.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Carmene99/covid19-analysis"
        }
      ]
    },
    {
      image: require("./assets/images/decrochage-scolaire.jpg"),
      projectName: "Prédiction de la Réussite Académique via Machine Learning",
      projectDesc: "Développer un modèle capable de prédire si un étudiant réussira ou non son cursus en se basant sur un profil holistique.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Carmene99/Prediction-Scolaire"
        }
      ]
    },
    {
      image: require("./assets/images/Previsionnel-CA.jpg"),
      projectName: "Prévision du Chiffre d'Affaires à 3 ans (Modèle Prophet)",
      projectDesc: "Transformer les données historiques de ventes en prévisions exploitables pour anticiper la croissance et optimiser la gestion des ressources.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Carmene99/Prevision-ChiffreAffaire"
        }
      ]
    },
    {
      image: require("./assets/images/conseils-plombier.jpg"),
      projectName: "Conception d'un site web dynamique pour la plomberie",
      projectDesc: "Digitaliser les services d'une entreprise de plomberie en créant une plateforme interactive permettant la présentation des services, la gestion des demandes de devis et la prise de contact.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Carmene99/Plomberie-HVNET"
        }
      ]
    },
    {
      image: require("./assets/images/das-fleisch-wird-ihnen.jpg"),
      projectName: "Système d'Analyse et d'Optimisation de la Performance pour la Restauration",
      projectDesc: "Transformer des données brutes en indicateurs stratégiques pour le secteur de la restauration : cartographie de l'offre, étude de prix et analyse de satisfaction.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Carmene99/Etude-Restaurant"
        }
      ]
    },
    {
      image: require("./assets/images/68e7729a42ada343c4b57dfc_684d86ea201c5a273e83ddbf_67ed5a558d616a2bb3b74d5f_660f99a6653ce95905aa27ac_yolo_252520world_252520fig_2525203.png"),
      projectName: "Camera-LiDAR Object Detection",
      projectDesc: "Développement d'un système de fusion de capteurs pour l'estimation de distance d'objets, basé sur le dataset KITTI. Ce projet combine la puissance de détection de YOLOv8 et la précision spatiale du LiDAR.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Carmene99/Camera-LiDAR-Object-Detection"
        }
      ]
    },
    {
      image: require("./assets/images/speech-to-speech-lexique-IA-e1729691643969.png"),
      projectName: "Intelligence Artificielle Générative : Parole & Audio (Speech AI)",
      projectDesc: "Comprendre et mettre en œuvre des systèmes capables de convertir du texte en voix naturelle (TTS) et de transcrire de l'audio en texte (STT), en utilisant des architectures de pointe.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Carmene99/Speech-Audio-Synthesis"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Mes Formations et Mes Certifications 🏆 "),
  subtitle:
    "Un aperçu de mes accréditations professionnelles !",

  achievementsCards: [
    {
      title: "Honoris 21st Century Skills Certificate | Honoris United Universities",
      subtitle:
        "Ce programme d'élite valide la maîtrise des compétences transversales essentielles à l'économie numérique moderne.",
      image: require("./assets/images/honoris-online.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://certificate.bcdiploma.com/check/9387598D5E93F7F0DA02668F53D6D3450EB3EAB7CD7C1ED3D935457141AEEC68M1J2MkpZS3ZQWTlXUnZnNk9RTjNsS21JSzFpTVJCTFovZ3MxWmxxUlR6a0k2VFZM"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "UI / UX Design",
      subtitle:
        "Au cours de cette formation nous avons conçu des interfaces numériques en plaçant l'utilisateur au centre de la réflexion (User-Centric Design) avec Figam. Cette approche consistais à transformer des problématiques complexes en expériences fluides, intuitives et visuellement modernes",
      image: require("./assets/images/uiux_2.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "AWS Certified Machine Learning | En cours ",
      subtitle: "Cette certification validera ma capacité à concevoir, mettre en œuvre et déployer des modèles de ML sur AWS. Elle couvrira des services comme Amazon SageMaker (pour entraîner tes modèles comme YOLOv8 ou Prophet dans le cloud).",
      image: require("./assets/images/aws.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Du Code à l'Intelligence : Pourquoi mon passage du Web à la Data Science était une nécessité.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Les fondations : La Licence en Développement Web",
      description:
        "J'avais un but précis, comprendre comment les mondes numériques que je voyais sur les écrans étaient construits. Ce qui est devenu moteur de mon parcours académique."
    },
    {
      // url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Le déclic : Pourquoi basculer vers le Master Data Science & IA ?",
      description:
        "En développant des sites, je me suis rendu compte que le plus précieux n'était pas le code, mais les données qui y transitaitaient. Voici pourquoi ce mélange."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),

  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  // title: "Resume",
  // subtitle: "Feel free to download my resume",

  // // Please Provide with Your Podcast embeded Link
  // display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactez Moi ☎️"),
  subtitle:
    "Ma boîte de réception est ouverte à tous. ",
  number: "+212644553071",
  email_address: "kcarmene07@gmail.com"
};

// Twitter Section

const twitterDetails = {
  // userName: "twitter", //Replace "twitter" with your twitter username without @
  // display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
