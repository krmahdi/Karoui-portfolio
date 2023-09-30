import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Ibn Elkaroui Mahdi',
  title: "Salut à tous, je suis Mahdi",
  description:
    "Je suis un jeune ingénieur en systèmes électroniques et informatiques, passionné par le développement d'applications web, avec une expertise particulière dans les langages Java, JavaScript, TypeScript, et plus spécifiquement dans les frameworks Spring Boot et Angular. Je suis constamment motivé pour explorer et appliquer les principes du DevOps dans mes projets. ",
  resumeLink:
    'https://drive.google.com/file/d/19a8IM6_lORIf4bJwmUXcDbpWVBakTDDr/view?usp=drive_link',
};

export const openSource = {
  githubUserName: 'Krmahdi',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://krmahdi.github.io/',
  facebook:'https://www.facebook.com/karwi.mahdi.90',
  linkedin: 'https://www.linkedin.com/in/mahdi-karoui-a2a22a220/',
  github: 'https://github.com/krmahdi',

};

export const skillsSection: SkillsSectionType = {
  title: 'Ce que je fais!!!',
  subTitle: 'DÉVELOPPEUR FULL STACK PASSIONNÉ QUI SOUHAITE EXPLORER CHAQUE PILE TECHNOLOGIQUE DE MANIÈRE AUDACIEUSE.',
  data: [
    {
      title: 'dévelopemennt Full Stack ',
      lottieAnimationFile: '/lottie/skills/fullstack.json', 
      // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Développement des responsive Single-Page-Apps (SPA) & PWA avec React.js'
        ),
        emoji('⚡ Développement des responsive static websites en utilisant Angular,Bootstrap,material-ui'),
        emoji('⚡ Développement RESTful APIs ou GraphQL Spring Boot/Node Js'),
      ],
      softwareSkills: [
        
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
      
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Java',
          iconifyTag: 'logos:java',
        },
        {
          skillName: 'Spring Boot',
          iconifyTag: 'logos:spring',
        },
           
        {
          skillName: 'TypeScript',
          iconifyTag: 'vscode-icons:file-type-typescript',
        },
        {
          skillName: 'Angular',
          iconifyTag: 'logos:angular-icon',
        },

         {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'MySQL',
          iconifyTag: 'logos:mysql',
        },
        {
          skillName: 'MongoDB',
          iconifyTag: 'logos:mongodb',
        },

        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
      
      ],
    },
    {
      title: 'Outils et Méthodologies:',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ connaissance des methologie Agile/Scrum...Motivé pour les projets collaboratif  '),
        emoji(
          '⚡ Maitrise de git,Docker,Linux et leurs CMD'
        ),
        emoji(
          '⚡ construction des  CI/CD pipelines pour les tests automatisés g & deployment avec Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
      
        
        {
          skillName: 'Git',
          iconifyTag: 'vscode-icons:file-type-git',
        },
        {
          skillName: 'GitHub',
          iconifyTag: 'logos:github-icon',
        },
        
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
      
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Linux',
          iconifyTag: 'vscode-icons:file_type_linux',
        },
        {
          skillName: 'UML',
          iconifyTag: 'logos:uml',
        },
        {
          skillName: 'Agile',
          iconifyTag: 'vscode-icons:file_type_agile',
        },
      
     
      ],
    },
   
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Backend', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Frontend/Design',
    progressPercentage: '70',
  },
  {
    Stack: 'Programmation',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Ecole Nattional des Ingénieur en Carthage',
    subHeader: 'cycle ingénieur en systèmes infotroniques',
    duration: 'September 2021 ',
    desc: '',
    grade: '',
    descBullets: [
          ],
  },
  {
    schoolName: 'Institut Préparatoire des Etudes des Ingénieurs Monastir(IPEIM)',
    subHeader: 'cycle préparatoire physique technique',
    duration: 'September 2019 - juin 2021',
    desc: '',
    grade: '',
    descBullets: [
      
    ],
  },
   {
    schoolName: 'Lycée Abu AlKacem Echebbi-Chebba',
    subHeader: 'Baccalauréat technique',
    duration: 'Septembre 2018 - Juin 2019',
    desc: '',
    grade: 'Mention trés bien',
    descBullets: [
        ],
  },
  

];

export const experience: ExperienceType[] = [
  {
    role: 'Stagiaire FullSkack JS',
    company: 'Tekru Technologies ',
    companyLogo: '/fonts/tek.jpg',
    date: 'Juil 2023 – Sept 2023',
    desc: 'Conception et developpement une application interne de messagerie en utilisant les technologie de node js react et GraphQL API &  configuraion une CI pipenline avec Github Actions',
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelance',
    companyLogo: '',
    date: 'Mai 2023 - Juil 2023',
    desc: 'developper une application de gestion de stock pour une socièté de confection en utilisant SpringBoot/Angular ',
  },
  {
    role: 'Stagiaire FullStack SpringBoot/Angular',
    company: 'NST-Group',
    companyLogo: '/nst.jpeg',
    date: 'Juin 2022 – Aout 2022',
    desc: 'Contribution au développement en équipe des parties Frontend un projet de gestion de pêche utilisant Angular   &   Utilisation des outils de gestion de version (GitHub) pour assurer la collaboration et le suivi du code.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },

 
];

export const projects: ProjectType[] = [
  {
    name: 'SuperMarket-Management-System',
    desc: 'Conception et developpement une interface de gestion des SuperMarket en utilisant SceneBuilder et JavaFx et MySQL',
    github: '',
    link: 'https://drive.google.com/file/d/1f-trSb8Gq5ZzXIseAtUjQIyIH8Ai4Dh6/view?usp=drive_link',
  },
  {
    name: 'Application de gestion des colocation pour les étudiants',
    desc: 'proposer,concevoir et developper cet application comme un projet de fin d année en utilisant les technologies de spring boot, Angular, Bootstrap,MySQL  ',
    github: '',
  },
  {
    name: 'Car-Rental ',
    desc: 'Projet de gestion de location des voiture avec spring-boot',
    github: '',
  },
  {
    name: 'Jeux Motus',
    desc: 'Conception et réalisation une application de jeu de mot Motus avec C',
    github: '',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: '',
    feedback:
      '',
  },
  {
    name: '',
    feedback:
      '',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Ibn Elkaroui Mahdi',
  description:
    'Un developpeur web FullStack passionné',
  author: 'Ibn Elkaroui Mahdi',
  image: 'https://avatars.githubusercontent.com/u/131217844?s=96&v=4',
  url: 'https://karoui-portfolio-ar6e2oywc-mahdikarouis-projects.vercel.app/',
  keywords: [
    'Mahdi',
    'Mahdi karoui',
    '@Karoui',
    '1Karoui100',
    'Portfolio',
    'mahdi Portfolio ',
    'Mahdi karoui Portfolio',
  ],
};
