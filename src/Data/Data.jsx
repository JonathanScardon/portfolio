import SuperFoodChainImg from "../assets/Projects/SuperFoodChain.png"
import WordHuntImg from "../assets/Projects/WordHunt.png"
import OCamlLifeImg from "../assets/Projects/OCamlLife.png"
import SudokuImg from "../assets/Projects/Sudoku.png"

import { IoLogoJavascript } from "react-icons/io5";




export const projects = [
    {
        title: "Super Food Chain",
        image: SuperFoodChainImg,
        link: "https://github.com/JonathanScardon/SuperFoodChain",
        descriptionParts: [
            "Designed and built a fast paced action-survival game with 15 unique levels using the model-view-controller architecture. Presented at the annual ",
            {
            "type": "link",
            "text": "GDIAC Showcase",
            "url": "https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/superfoodchain/"
            },
            " to over 200 attendees."
        ],
        tools: ["Java"],
        id: 0,
    },

    {
        title: "Word Hunt",
        image: WordHuntImg,
        link: "https://github.com/JonathanScardon/Word-Hunt",
        descriptionParts: [
            "Implemented a word game offering players an interactive play mode and a puzzle solver. Currently refactoring the interface in React and designing original art in Piskel."
        ],

        tools: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        id: 1,
    },

    {
        title: "OCaml Life",
        image: OCamlLifeImg,
        link: "https://github.com/JonathanScardon/OCaml-Life",
        descriptionParts: [
            "Developed a holistic planner assisting users in managing all aspects of their lives, from emotional & physical health to financial goals."
        ],
        tools: ["OCaml"],
        id: 2,
    },


    {
        title: "Sudoku",
        image: SudokuImg,
        link: "https://github.com/JonathanScardon/Sudoku",
        descriptionParts: [
            "Recreated the classic Sudoku puzzle in Python with a GUI built in CustomTkinter."
        ],
        tools: ["Python"],
        id: 3,
    },
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
        link: "https://www.linkedin.com/in/jonathan-scardon-691644327/",
    },

    {
        iconClass: "devicon-github-original",
        link: "https://github.com/JonathanScardon",
    },

    {
        iconClass: "far fa-envelope",
        link: "mailto:jxs2372@gmail.com/",
    },
]