import {
  pnrimg,
  qrgenimg,
  gitmeimg,
  jiobot,
} from "../assets/projectscreenshots/";
import java from "../assets/skills/java.svg";
import kafka from "../assets/skills/kafka.svg";
import kubernetes from "../assets/skills/kubernetes.svg";
import mysql from "../assets/skills/mysql.svg";
import spring from "../assets/skills/spring.svg";
import docker from "../assets/skills/docker.svg";
import cs123 from "../assets/skills/cs123.svg";
import csharp from "../assets/skills/csharp.svg";
import reactforwebdev from "../assets/skills/reactforwebdev.svg";
import aws from "../assets/skills/aws.svg";
import azure from "../assets/skills/azure.svg";
import bitcoin from "../assets/skills/bitcoin.svg";
import css from "../assets/skills/css.svg";
import cucumber from "../assets/skills/cucumber.svg";
import devops from "../assets/skills/devops.svg";
import git from "../assets/skills/git.svg";
import github from "../assets/skills/github.svg";
import html from "../assets/skills/html.svg";
import javascript from "../assets/skills/javascript.svg";
import googlecloud from "../assets/skills/googlecloud.svg";
import linux from "../assets/skills/linux.svg";
import mongodb from "../assets/skills/mongodb.svg";
import nodejs from "../assets/skills/nodejs.svg";
import python from "../assets/skills/python.svg";
import postman from "../assets/skills/postman.svg";
import typescript from "../assets/skills/typescript.svg";
import selenium from "../assets/skills/selenium.svg";
import vitesvg from "../assets/skills/vitesvg.svg";




export const socialIcons = [
  {
    name: "github",
    class: " fa-brands fa-github",
    link: "https://github.com/NirpendraNathMishra",
    text: "Fork My Repos On Github",
  },
  
  {
    name: "linkedin",
    class: " fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/nnm1947",
    text: "Connect On LinkedIn",
  },
  {
    name: "blog",
    class: " fa-brands fa-hashnode",
    link: "https://nirpendranathmishra.tech",
    text: "Look Through My Blogs",
  },
];

export const project = [
  {
    title: "Jiobot",
    img: jiobot,
    subtitle: [
      {
        value:
          "Jio Bot Uses Gpt3.5 To Generate Test Cases from User Story and its accptance Criteria.it can also be fine tuned on your own data to generate test cases.",
      },
      {
        value: "Runs on Cloudflare Workers.",
      },
    ],
    link: "https://gitcard-generator.vercel.app/",
    gitlink: "https://github.com/NirpendraNathMishra/jiobotnirpendra",
  },
  {
    title: "GitMe",
    img: gitmeimg,
    subtitle: [
      {
        value:
          "GitMe is a Github Card Generator that uses Github API to fetch user data and generate a card for the user. ",
      },
      {
        value: "Runs on Cloudflare Workers.",
      },
    ],
    link: "https://gitcard-generator.vercel.app/",
    gitlink: "https://github.com/NirpendraNathMishra/gitcardGenerator",
  },
  
  {
    title: "PNR Status Tracker",
    img: pnrimg,
    subtitle: [
      {
        value:
          "   Provides Realtime Data About Your PNR along with all relevant information.",
      },
    ],
    link: "https://pnr-status-tracker.vercel.app/",
    gitlink: "https://github.com/NirpendraNathMishra/pnr-status-tracker",
  }, 
  {
    title: "QR Genenrator",
    img: qrgenimg,
    subtitle: [
      {
        value:
          " Creates Qr Codes from input Prompt with customization such as size and dark mode",
      },
    ],
    link: "https://qrcode-generator-zeta-nine.vercel.app/",
    gitlink: "https://github.com/NirpendraNathMishra/Qrcode_Generator",
  },
];

export const techStack = [
  {
    src: csharp, // Programming language
  },
  {
    src: cs123, // Programming language
  },
  {
    src: java, // Programming language
  },
  {
    src: python, // Programming language
  },
  {
    src: javascript, // Programming language
  },
  {
    src: typescript, // Superset of JavaScript
  },
  {
    src: html, // Markup language
  },
  {
    src: css, // Style sheet language
  },
  {
    src: reactforwebdev, // JavaScript library for building user interfaces
  },
  {
    src: vitesvg, // JavaScript library for building user interfaces
  },
  {
    src: mysql, // Database technology
  },
  {
    src: mongodb, // Database technology
  },
  {
    src: git, // Version control system
  },
  {
    src: github, // Git repository hosting service
  },
  {
    src: docker, // Containerization platform
  },
  {
    src: kubernetes, // Container orchestration platform
  },
  {
    src: aws, // Cloud service provider
  },
  {
    src: azure, // Cloud service provider
  },
  {
    src: googlecloud, // Cloud service provider
  },
  {
    src: linux, // Operating system
  },
  {
    src: nodejs, // JavaScript runtime
  },
  {
    src: spring, // Java framework
  },
  
  {
    src: selenium, // Web testing framework
  },
  {
    src: cucumber, // Tool for behavior-driven development
  },
  {
    src: postman, // API testing tool
  },
  {
    src: devops, // Software development and IT operations
  },
  {
    src: kafka, // Open-source distributed event streaming platform
  },
  {
    src: bitcoin, // Cryptocurrency
  },
];

