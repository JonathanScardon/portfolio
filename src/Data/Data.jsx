import SuperFoodChainImg from "../assets/Projects/SuperFoodChain.png"
import WordHuntImg from "../assets/Projects/WordHunt.png"
import OCamlLifeImg from "../assets/Projects/OCamlLife.png"
import SudokuImg from "../assets/Projects/Sudoku.png"

import { IoLogoJavascript } from "react-icons/io5";




export const projects = [
    {
        title: "Super Food Chain",
        image: SuperFoodChainImg,
        link: "",
        description: "this was a game from a class i was in. it was 3152. it was ran by walker white. it was very stressful sometimes",
        tools: ["Java"],
        id: 0,
    },

    {
        title: "Word Hunt",
        image: WordHuntImg,
        link: "",
        description: "word game that I am currently redoing because the old version is really ugly and kind of bad",
        tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js"],
        id: 1,
    },

    {
        title: "OCaml Life",
        image: OCamlLifeImg,
        link: "",
        description: "life tracker from cs 3110. group project. not my favorite but it is still something I made",
        tools: ["OCaml"],
        id: 2,
    },


    {
        title: "Sudoku",
        image: SudokuImg,
        link: "",
        description: "puzzle game",
        tools: ["Python"],
        id: 3,
    }
]

export const skills = [
    {
        group: "Frontend",

        tools: [
            {name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},
            {name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},
            {name: "JavaScript", image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
            {name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"}
        ],
        id: 0,
    },
    
    {
        group: "Backend",
        image: "",
        tools: [
            {name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"},
            {name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"}
        ],
        id: 1,
    },

    {
        group: "Languages",
        image: "",
        tools: [
            {name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},
            {name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"},
            {name: "C", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"},
            {name: "OCaml", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ocaml/ocaml-original.svg"},

        ],
        id: 2,
    },
]

export const footerLinks = [
    {
        iconClass: "devicon-linkedin-plain",
        link: "https://www.google.com/",
    },

    {
        iconClass: "devicon-github-original",
        link: "https://www.google.com/",
    }
]