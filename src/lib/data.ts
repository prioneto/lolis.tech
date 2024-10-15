import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaMedal } from "react-icons/fa";

import corpcommentImg from "/public/corpcomment.png";
import lowpolyracingImg from "/public/lowpolyracing.png";
import covidboardImg from "/public/covidboard.png";
import othelloImg from "/public/othello.png";
import chatImg from "/public/chat.png";
import notebridgeImg from "/public/notebridge.png";
import gptImg from "/public/gpt.png";
import mirrorImg from "/public/mirror.png";
import royaleImg from "/public/royale.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Achievements",
    hash: "#achievements",
  },
] as const;

export const experiencesData = [
  {
    title: "High School Diploma",
    location: "Athens, Greece",
    description: "I graduated from high school with a 19.2/20. I always played sports and have been doing triathlon for 9 years.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Bachelor Technical Computer Science - University of Twente (7.7/10)",
    location: "Enschede, Netherlands",
    description:
      "I am studying Technical Computer Science at the University of Twente. I am currently in my third year and I have a GPA of 7.7/10. I am also member of Aloha the triathlon association of the UT.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "Indie Game Developer",
    location: "Athens, Greece",
    description:
      "I was developing indie games using the Unity game engine for public release. One of the most successful games I released was Low Poly Racing which came out in April of 2020 for Windows and Linux.",
    icon: React.createElement(CgWorkAlt),
    date: "2020-2023",
  },
  {
    title: "Full-Stack Developer - Note-Bridge",
    location: "Enschede, Netherlands",
    description:
      "I work as a full-stack developer for Note-Bridge in order to create a functional website and help start the journey of the company and contribute to its growth. The team and I are working on different goals and deadlines to help the company succeed in the future.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
] as const;

export const achievementsData = [
  {
    title: "Electric Guitar - University of West London - Grade 1",
    location: "London, UK",
    description: "Achieved Grade 1 in Electric Guitar from the University of West London, demonstrating musical skill and dedication.",
    icon: React.createElement(FaMedal),
    date: "2019",
  },
  {
    title: "Video Editor and Designer",
    location: "Various",
    description: "Designed and edited graduation videos, national celebrations, bazaars, and public events, showcasing talent in video production.",
    icon: React.createElement(FaMedal),
    date: "Various",
  },

  {
    title: "Game Development World Championship 2020: 2nd Place in Fan Favourite Category",
    location: "Global",
    description: "Secured 2nd place in the Fan Favourite Category at the Game Development World Championship 2020, showcasing creativity and engagement.",
    icon: React.createElement(FaMedal),
    date: "2020",
  },
  {
    title: "University of Twente Module 4: Best Note-Bridge Project Certificate",
    location: "Enschede, Netherlands",
    description: "Awarded for the best project in Module 4 at the University of Twente, demonstrating exceptional skill and innovation.",
    icon: React.createElement(FaMedal),
    date: "2023",
  },

  {
    title: "Athlete in the Aloha Triathlon Association & Triathlon Club of CGS",
    location: "Netherlands & Greece",
    description: "Competed in various national and international triathlon events, achieving top ranks and demonstrating athletic excellence.",
    icon: React.createElement(FaMedal),
    date: "2021-present",
  },
] as const;

export const projectsData = [
  {
    title: "StudentHelperGPT",
    description:
      "For module 6, we had the challenge of choosing a topic from a category and themes that help people's everyday lives. We decided to make our own theme and make a stress-relief chatbot for university students. It uses OpenAI's API to answer prompts and is trained to answer specifically to relieve the stress of university students when they are going through stressful times.",
    tags: ["Python", "OpenAI", "GPT-3", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: gptImg,
  },
  {
    title: "Magic Mirror",
    description:
      "As part of Module 5, we were tasked with coming up with an original idea to use for a Raspberry Pi controlled system with emphasis on working with security by design. My team and I decided on creating a Smart Mirror that uses face recognition to identify the different trusted faces that will be using the mirror and displaying relevant information to each one. The layout of the mirror and these faces can be adjusted and managed from the web app that we designed. On the security aspect of our project we of took care on securing our application from different attacks and also on the mirror side when someone that is not trusted or more than one people approach the mirror it detects that and shows a default layout without any personal information display.",
    tags: ["Python", "OpenCV", "Raspberry Pi", "MongoDB", "Tailwind", "Vue.js"],
    imageUrl: mirrorImg,
  },
  {
    title: "Note-Bridge Web Application",
    description:
      "As the final project of the module, we were tasked with designing a web application for a company called Note-Bridge. We were a team of 4, originally a team of 6. The central aspect of this project was to achieve an MVP since we only had 2 months of work on it. The web application would feature a database of students and teachers along with other necessary tables. A student can find a teacher through the map or the teacher list and book a lesson if they think they found a match. The project was implemented entirely on base JavaScript and HTML without the use of any libraries. At the end of the project, our team managed to get 1st place among the other 5 teams competing for the best Note-Bridge project, and also achieved one of the highest grades among all the projects.",
    tags: ["JavaScript", "HTML", "CSS", "Node.js", "PostgreSQL"],
    imageUrl: notebridgeImg,
  },
  {
    title: "Underwater Chat Application",
    description:
      "As the final project of the module, our team of four students developed a chat application designed for scuba divers to communicate with each other while underwater. The application features two modes of communication: whisper and broadcast. The whisper function allows a diver to send a message to a specific node, while the broadcast function forwards messages to all nodes in the network. To ensure that large messages are transmitted efficiently, we implemented a fragmentation system that breaks up those messages into smaller packets for transmission. We also incorporated the CSMA protocol, which helps to prevent multiple nodes from transmitting at the same time, reducing the unlike event of packet collision. Our chat application also utilizes multi-hop forwarding, which allows messages to be transmitted through multiple nodes in the network before reaching their intended destination. This feature ensures that messages can be transmitted even if a direct connection between two divers is not available.",
    tags: ["Java", "Java Threads", "TCP", "CSMA", "Multi-hop", "Aloha"],
    imageUrl: chatImg,
  },
  {
    title: "Othello(Reversi) in Java",
    description:
      "As the final project of the module, my partner and I implemented the traditional board game Othello using Java. The game features multiplayer online support using a textual user interface (TUI) and allows players to join a queue to look for a game or choose to play locally against friends. To handle the online multiplayer part of the project we were tasked to develop a server and a client application for the game to run on. The server is multithreaded, which allows it to handle multiple games concurrently. The client application features a beginner-friendly design for using the features that come with the game, such as joining games online or deciding to play locally.",
    tags: ["Java", "Java Threads", "TCP"],
    imageUrl: othelloImg,
  },
  {
    title: "Tweet Dashboard in Python(Covidboard)",
    description:
      "As the final project of the module, we were tasked with creating a tweet dashboard. Our team selected the theme of the dashboard to be Covid related tweets. We were also limited to only using a specific Python library called ECA for working on this project. During the development time, we surpassed the different challenges of working with Python for the foundations of a website. Still, in the end, we presented a polished website with several features for seeing Covid-19 related tweets, like hashtags, counts, and similar options.",
    tags: ["Python", "ECA", "HTML", "CSS", "JavaScript"],
    imageUrl: covidboardImg,
  },
  {
    title: "Low Poly Royale",
    description:
      "Low Poly Royale is the successor of my previous game (Low Poly Racing) and the next title in my Low Poly series. The idea for this game started after realizing my ability to work in C# efficiently and being able to handle large tasks and surpass major challenges in the development process of an indie game. The game is developed in C# inside Untiy and follows the Battle Royale genre of games. The development of the game started after finishing the development of Low Poly Racing but due to the beginning of my studies, this game has been delayed indefinitely.",
    tags: ["Unity", "C#", "Low Poly", "Battle Royale", "FPS"],
    imageUrl: royaleImg,
  },
  {
    title: "Low Poly Racing",
    description:
      "Low Poly Racing is a game that I was developing during the summer of 2020. The game was made in Unity in C# and was an arcade racer that implements AI and different tracks in the mix to make the game fun and competitive. Features of the game include custom AI, different tracks(a new one just got released), 3 cars(more coming soon), TimeTrial Mode, and Racing Mode against Bots.",
    tags: ["Unity", "C#", "Low Poly", "Racing", "AI"],
    imageUrl: lowpolyracingImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "AI",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Unity",
  "C#",
] as const;
