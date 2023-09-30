"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./portfolio.ts + 1 modules
var portfolio = __webpack_require__(805);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/SEO.tsx




function SEO() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: portfolio/* seoData.author */.hD.author
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: portfolio/* seoData.keywords.join */.hD.keywords.join(", ")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "canonical",
                href: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: portfolio/* seoData.image */.hD.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:url",
                content: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:image",
                content: portfolio/* seoData.image */.hD.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "Index"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/manifest.json"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "./favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "./favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "./favicon.png"
            })
        ]
    });
}
// SEO.prototype = {
//   data: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     url: PropTypes.string,
//     keywords: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
// };
/* harmony default export */ const components_SEO = (SEO);

;// CONCATENATED MODULE: external "@emailjs/browser"
const browser_namespaceObject = require("@emailjs/browser");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser_namespaceObject);
;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(981);
;// CONCATENATED MODULE: ./components/Alerts.tsx



const Alert = ({ message , color , icon  })=>{
    return(// this should reappear every time the user clicks on the button
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.UncontrolledAlert, {
        color: color,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "alert-inner--icon",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: icon
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "alert-inner--text",
                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: message
                })
            })
        ]
    }));
};
/* harmony default export */ const Alerts = (Alert);

;// CONCATENATED MODULE: ./components/ContactUs.tsx






const ContactUs = ()=>{
    const form = (0,external_react_.useRef)(null);
    const [alert, setAlert] = (0,external_react_.useState)(null);
    const successAlert = {
        color: "success",
        icon: "ni ni-like-2",
        message: " Your message has been sent successfully!"
    };
    const errorAlert = {
        color: "danger",
        icon: "ni ni-bell-55",
        message: " Oops! Something went wrong. Please try again later."
    };
    const sendEmail = (e)=>{
        e.preventDefault();
        console.log("submitting");
        console.log(form.current);
        const emailJsServiceId = "service_udc91wg";
        const emailJsTemplateId = "template_caqsur7";
        const emailJsPublicKey = "jdpssYn6EBFbWfnmm";
        if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey && form.current) {
            browser_default().sendForm(emailJsServiceId, emailJsTemplateId, form.current, emailJsPublicKey).then((result)=>{
                console.log(result.text);
                setAlert(successAlert);
            }, (error)=>{
                console.log(error.text);
                setAlert(errorAlert);
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "section section-lg section-shaped",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                ref: form,
                onSubmit: sendEmail,
                children: [
                    alert && /*#__PURE__*/ jsx_runtime_.jsx(Alerts, {
                        color: alert.color,
                        icon: alert.icon,
                        message: alert.message
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                            className: "justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                lg: "8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Card, {
                                    className: "bg-gradient-secondary shadow",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.CardBody, {
                                        className: "p-lg-5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "mb-1",
                                                children: "Me contactez?"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "mt-0"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.FormGroup, {
                                                className: external_classnames_default()("mt-5", {}),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.InputGroup, {
                                                    className: "input-group-alternative",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupAddon, {
                                                            addonType: "prepend",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupText, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "ni ni-user-run"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                            placeholder: "Votre pr\xe9nom",
                                                            type: "text",
                                                            name: "user_name"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.FormGroup, {
                                                className: external_classnames_default()({}),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.InputGroup, {
                                                    className: "input-group-alternative",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupAddon, {
                                                            addonType: "prepend",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupText, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "ni ni-email-83"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                            placeholder: "addresse Email ",
                                                            name: "user_email",
                                                            type: "email"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.FormGroup, {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                    className: "form-control-alternative",
                                                    cols: "80",
                                                    name: "user_message",
                                                    placeholder: "Ecrivez votre message...",
                                                    rows: "4",
                                                    type: "textarea"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Button, {
                                                    block: true,
                                                    className: "btn-round",
                                                    color: "default",
                                                    size: "lg",
                                                    type: "submit",
                                                    children: "Envoyer"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_ContactUs = (ContactUs);

;// CONCATENATED MODULE: ./pages/index.tsx


const Navigation = dynamic_default()(()=>__webpack_require__.e(/* import() */ 581).then(__webpack_require__.bind(__webpack_require__, 581)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../components/Navigation"
        ]
    }
});
const Greetings = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(819), __webpack_require__.e(471)]).then(__webpack_require__.bind(__webpack_require__, 471)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Greetings"
        ]
    }
});
const Skills = dynamic_default()(()=>__webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(__webpack_require__, 7)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Skills"
        ]
    }
});
const Proficiency = dynamic_default()(()=>__webpack_require__.e(/* import() */ 440).then(__webpack_require__.bind(__webpack_require__, 440)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Proficiency"
        ]
    }
});
const Education = dynamic_default()(()=>__webpack_require__.e(/* import() */ 380).then(__webpack_require__.bind(__webpack_require__, 380)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Education"
        ]
    }
});
const Experience = dynamic_default()(()=>__webpack_require__.e(/* import() */ 949).then(__webpack_require__.bind(__webpack_require__, 949)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Experience"
        ]
    }
});
const Projects = dynamic_default()(()=>__webpack_require__.e(/* import() */ 668).then(__webpack_require__.bind(__webpack_require__, 668)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Projects"
        ]
    }
});
const Feedbacks = dynamic_default()(()=>__webpack_require__.e(/* import() */ 85).then(__webpack_require__.bind(__webpack_require__, 85)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Feedbacks"
        ]
    }
});
const GithubProfileCard = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(819), __webpack_require__.e(77)]).then(__webpack_require__.bind(__webpack_require__, 77)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../components/GithubProfileCard"
        ]
    }
});



function Home({ githubProfileData  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_SEO, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Greetings, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Skills, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Proficiency, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Education, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Experience, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Feedbacks, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Projects, {}),
            portfolio/* showContactUs */.Nd ? /*#__PURE__*/ jsx_runtime_.jsx(components_ContactUs, {}) : null,
            /*#__PURE__*/ jsx_runtime_.jsx(GithubProfileCard, {
                ...githubProfileData
            })
        ]
    });
}
// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };
async function getStaticProps() {
    const githubProfileData = await fetch(`https://api.github.com/users/${portfolio/* openSource.githubUserName */.qL.githubUserName}`).then((res)=>res.json());
    return {
        props: {
            githubProfileData
        }
    };
}


/***/ }),

/***/ 805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Bv": () => (/* binding */ SkillBars),
  "E5": () => (/* binding */ educationInfo),
  "b8": () => (/* binding */ experience),
  "KK": () => (/* binding */ feedbacks),
  "c0": () => (/* binding */ greetings),
  "qL": () => (/* binding */ openSource),
  "q": () => (/* binding */ projects),
  "hD": () => (/* binding */ seoData),
  "Nd": () => (/* binding */ showContactUs),
  "LO": () => (/* binding */ skillsSection),
  "KT": () => (/* binding */ socialLinks)
});

// UNUSED EXPORTS: contact

;// CONCATENATED MODULE: external "react-easy-emoji"
const external_react_easy_emoji_namespaceObject = require("react-easy-emoji");
var external_react_easy_emoji_default = /*#__PURE__*/__webpack_require__.n(external_react_easy_emoji_namespaceObject);
;// CONCATENATED MODULE: ./portfolio.ts

const greetings = {
    name: "Ibn Elkaroui Mahdi",
    title: "Salut \xe0 tous, je suis Mahdi",
    description: "Je suis un jeune ing\xe9nieur en syst\xe8mes \xe9lectroniques et informatiques, passionn\xe9 par le d\xe9veloppement d'applications web, avec une expertise particuli\xe8re dans les langages Java, JavaScript, TypeScript, et plus sp\xe9cifiquement dans les frameworks Spring Boot et Angular. Je suis constamment motiv\xe9 pour explorer et appliquer les principes du DevOps dans mes projets. ",
    resumeLink: "https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing"
};
const openSource = {
    githubUserName: "Krmahdi"
};
const contact = {};
const socialLinks = {
    url: "https://krmahdi.github.io/",
    facebook: "https://www.facebook.com/karwi.mahdi.90",
    linkedin: "https://www.linkedin.com/in/mahdi-karoui-a2a22a220/",
    github: "https://github.com/krmahdi"
};
const skillsSection = {
    title: "Ce que je fais!!!",
    subTitle: "D\xc9VELOPPEUR FULL STACK PASSIONN\xc9 QUI SOUHAITE EXPLORER CHAQUE PILE TECHNOLOGIQUE DE MANI\xc8RE AUDACIEUSE.",
    data: [
        {
            title: "d\xe9velopemennt Full Stack ",
            lottieAnimationFile: "/lottie/skills/fullstack.json",
            // Path of Lottie Animation JSON File
            skills: [
                external_react_easy_emoji_default()("⚡ D\xe9veloppement des responsive Single-Page-Apps (SPA) & PWA avec React.js"),
                external_react_easy_emoji_default()("⚡ D\xe9veloppement des responsive static websites en utilisant Angular,Bootstrap,material-ui"),
                external_react_easy_emoji_default()("⚡ D\xe9veloppement RESTful APIs ou GraphQL Spring Boot/Node Js")
            ],
            softwareSkills: [
                {
                    skillName: "HTML-5",
                    iconifyTag: "vscode-icons:file-type-html"
                },
                {
                    skillName: "CSS-3",
                    iconifyTag: "vscode-icons:file-type-css"
                },
                {
                    skillName: "JavaScript",
                    iconifyTag: "logos:javascript"
                },
                {
                    skillName: "Reactjs",
                    iconifyTag: "vscode-icons:file-type-reactjs"
                },
                {
                    skillName: "Java",
                    iconifyTag: "logos:java"
                },
                {
                    skillName: "Spring Boot",
                    iconifyTag: "logos:spring"
                },
                {
                    skillName: "TypeScript",
                    iconifyTag: "vscode-icons:file-type-typescript"
                },
                {
                    skillName: "Angular",
                    iconifyTag: "logos:angular-icon"
                },
                {
                    skillName: "PostgreSQL",
                    iconifyTag: "logos:postgresql"
                },
                {
                    skillName: "MySQL",
                    iconifyTag: "logos:mysql"
                },
                {
                    skillName: "MongoDB",
                    iconifyTag: "logos:mongodb"
                },
                {
                    skillName: "NPM",
                    iconifyTag: "logos:npm-icon"
                }
            ]
        },
        {
            title: "Outils et M\xe9thodologies:",
            lottieAnimationFile: "/lottie/skills/cloudinfra.json",
            skills: [
                external_react_easy_emoji_default()("⚡ connaissance des methologie Agile/Scrum...Motiv\xe9 pour les projets collaboratif  "),
                external_react_easy_emoji_default()("⚡ Maitrise de git,Docker,Linux et leurs CMD"),
                external_react_easy_emoji_default()("⚡ construction des  CI/CD pipelines pour les tests automatis\xe9s g & deployment avec Github Actions")
            ],
            softwareSkills: [
                // ? Check README To get icon details
                {
                    skillName: "Git",
                    iconifyTag: "vscode-icons:file-type-git"
                },
                {
                    skillName: "GitHub",
                    iconifyTag: "logos:github-icon"
                },
                {
                    skillName: "Docker",
                    iconifyTag: "logos:docker-icon"
                },
                {
                    skillName: "Github Actions",
                    iconifyTag: "logos:github-actions"
                },
                {
                    skillName: "Linux",
                    iconifyTag: "vscode-icons:file_type_linux"
                },
                {
                    skillName: "UML",
                    iconifyTag: "logos:uml"
                },
                {
                    skillName: "Agile",
                    iconifyTag: "vscode-icons:file_type_agile"
                }
            ]
        }
    ]
};
const SkillBars = [
    {
        Stack: "Backend",
        progressPercentage: "80"
    },
    {
        Stack: "Frontend/Design",
        progressPercentage: "70"
    },
    {
        Stack: "Programmation",
        progressPercentage: "70"
    }
];
const educationInfo = [
    {
        schoolName: "Ecole Nattional des Ing\xe9nieur en Carthage",
        subHeader: "cycle ing\xe9nieur en syst\xe8mes infotroniques",
        duration: "September 2021 ",
        desc: "",
        grade: "",
        descBullets: []
    },
    {
        schoolName: "Institut Pr\xe9paratoire des Etudes des Ing\xe9nieurs Monastir(IPEIM)",
        subHeader: "cycle pr\xe9paratoire physique technique",
        duration: "September 2019 - juin 2021",
        desc: "",
        grade: "",
        descBullets: []
    },
    {
        schoolName: "Lyc\xe9e Abu AlKacem Echebbi-Chebba",
        subHeader: "Baccalaur\xe9at technique",
        duration: "Septembre 2018 - Juin 2019",
        desc: "",
        grade: "Mention tr\xe9s bien",
        descBullets: []
    }
];
const experience = [
    {
        role: "Stagiaire FullSkack JS",
        company: "Tekru Technologies ",
        companyLogo: "/fonts/tek.jpg",
        date: "Juil 2023 – Sept 2023",
        desc: "Conception et developpement une application interne de messagerie en utilisant les technologie de node js react et GraphQL API &  configuraion une CI pipenline avec Github Actions"
    },
    {
        role: "Full Stack Developer",
        company: "Freelance",
        companyLogo: "",
        date: "Mai 2023 - Juil 2023",
        desc: "developper une application de gestion de stock pour une soci\xe8t\xe9 de confection en utilisant SpringBoot/Angular "
    },
    {
        role: "Stagiaire FullStack SpringBoot/Angular",
        company: "NST-Group",
        companyLogo: "/nst.jpeg",
        date: "Juin 2022 – Aout 2022",
        desc: "Contribution au d\xe9veloppement en \xe9quipe des parties Frontend un projet de gestion de p\xeache utilisant Angular   &   Utilisation des outils de gestion de version (GitHub) pour assurer la collaboration et le suivi du code."
    }
];
const projects = [
    {
        name: "SuperMarket-Management-System",
        desc: "Conception et developpement une interface de gestion des SuperMarket en utilisant SceneBuilder et JavaFx et MySQL",
        github: "",
        link: "https://drive.google.com/file/d/1f-trSb8Gq5ZzXIseAtUjQIyIH8Ai4Dh6/view?usp=drive_link"
    },
    {
        name: "Application de gestion des colocation pour les \xe9tudiants",
        desc: "proposer,concevoir et developper cet application comme un projet de fin d ann\xe9e en utilisant les technologies de spring boot, Angular, Bootstrap,MySQL  ",
        github: ""
    },
    {
        name: "Car-Rental ",
        desc: "Projet de gestion de location des voiture avec spring-boot",
        github: ""
    },
    {
        name: "Jeux Motus",
        desc: "Conception et r\xe9alisation une application de jeu de mot Motus avec C",
        github: ""
    }
];
const feedbacks = [
    {
        name: "",
        feedback: ""
    },
    {
        name: "",
        feedback: ""
    }
];
// option to hide or show the ContactUs component
const showContactUs = true;
// See object prototype on /types/section.ts page
const seoData = {
    title: "Ibn Elkaroui Mahdi",
    description: "Un developpeur web FullStack passionn\xe9",
    author: "Ibn Elkaroui Mahdi",
    image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
    url: "https://developer-portfolio-1hanzla100.vercel.app",
    keywords: [
        "Mahdi",
        "Mahdi karoui",
        "@Karoui",
        "1Karoui100",
        "Portfolio",
        "mahdi Portfolio ",
        "Mahdi karoui Portfolio"
    ]
};


/***/ }),

/***/ 895:
/***/ ((module) => {

module.exports = require("headroom.js");

/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 189:
/***/ ((module) => {

module.exports = require("react-lottie");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 981:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ }),

/***/ 566:
/***/ ((module) => {

module.exports = import("@iconify/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,152], () => (__webpack_exec__(987)));
module.exports = __webpack_exports__;

})();