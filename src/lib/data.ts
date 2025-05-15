import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaMedal } from "react-icons/fa";

import lowpolyracingImg from "/public/lowpolyracing.png";
import covidboardImg from "/public/covidboard.png";
import othelloImg from "/public/othello.png";
import chatImg from "/public/chat.png";
import notebridgeImg from "/public/notebridge.png";
import gptImg from "/public/gpt.png";
import mirrorImg from "/public/mirror.png";
import fitrefImg from "/public/fitref.png";

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
    description: "I graduated from high school with a 19.1/20. I always played sports and have been doing triathlon for 9 years.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Bachelor Technical Computer Science - University of Twente (7.4/10)",
    location: "Enschede, Netherlands",
    description:
      "I am studying Technical Computer Science at the University of Twente. I am currently in my third year and I have a GPA of 7.4/10. I am also member of Aloha the triathlon association of the UT.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "Full-Stack Developer - Note-Bridge",
    location: "Enschede, Netherlands",
    description:
      "I work as a full-stack developer for Note-Bridge in order to create a functional website and help start the journey of the company and contribute to its growth. The team and I are working on different goals and deadlines to help the company succeed in the future.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
  {
    title: "Lead Full-Stack Developer - Denda Games",
    location: "Hybrid - Hengelo, Netherlands",
    description:
      "I develop and maintain a comprehensive CMC platform, utilizing AWS Lambda for serverless computing, React for dynamic user interfaces, and MySQL for efficient database management. My role involves designing scalable, cloud-based solutions, ensuring seamless integration across components, and delivering high-quality features to enhance platform functionality. The platform is used by companies like DPG, CNN, NU.NL and Azerion. I also mentor interns, guiding them through technical challenges and fostering a collaborative development environment.",
    icon: React.createElement(CgWorkAlt),
    date: "01/2025-06/2025",
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
  {
    title: "OSM Broken Access Control Exploit",
    location: "medium.com/@prioneto",
    description:
      "Last year I found a vulnerability in the mobile game OSM (Online Soccer Manager) and this article takes the reader through the process of finding the vulnerability, sharing it with the developers, and getting patched.",
    icon: React.createElement(FaMedal),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "FitRef",
    description:
      "This project is a fitness-tracking web application that integrates with Strava to display user activities. It features interactive maps, activity summaries, and data visualizations, providing users with detailed insights into their fitness activities. The application ensures a responsive and engaging user experience, with seamless data fetching and state management. It is built with modern web development practices, it is used daily, and hosted under www.fitref.gr.",
    imageUrl: fitrefImg,
  },
  {
    title: "StudentHelperGPT",
    description:
      "For module 6, we had the challenge of choosing a topic from a category and themes that help people's everyday lives. We decided to make our own theme and make a stress-relief chatbot for university students. It uses OpenAI's API to answer prompts and is trained to answer specifically to relieve the stress of university students when they are going through stressful times.",
    imageUrl: gptImg,
  },
  {
    title: "Magic Mirror",
    description:
      "As part of Module 5, we were tasked with coming up with an original idea to use for a Raspberry Pi controlled system with emphasis on working with security by design. My team and I decided on creating a Smart Mirror that uses face recognition to identify the different trusted faces that will be using the mirror and displaying relevant information to each one. The layout of the mirror and these faces can be adjusted and managed from the web app that we designed. On the security aspect of our project we of took care on securing our application from different attacks and also on the mirror side when someone that is not trusted or more than one people approach the mirror it detects that and shows a default layout without any personal information display.",
    imageUrl: mirrorImg,
  },
  {
    title: "Note-Bridge Web Application",
    description:
      "As the final project of the module, we were tasked with designing a web application for a company called Note-Bridge. We were a team of 4, originally a team of 6. The central aspect of this project was to achieve an MVP since we only had 2 months of work on it. The web application would feature a database of students and teachers along with other necessary tables. A student can find a teacher through the map or the teacher list and book a lesson if they think they found a match. The project was implemented entirely on base JavaScript and HTML without the use of any libraries. At the end of the project, our team managed to get 1st place among the other 5 teams competing for the best Note-Bridge project, and also achieved one of the highest grades among all the projects.",
    imageUrl: notebridgeImg,
  },
  {
    title: "Underwater Chat Application",
    description:
      "As the final project of the module, our team of four students developed a chat application designed for scuba divers to communicate with each other while underwater. The application features two modes of communication: whisper and broadcast. The whisper function allows a diver to send a message to a specific node, while the broadcast function forwards messages to all nodes in the network. To ensure that large messages are transmitted efficiently, we implemented a fragmentation system that breaks up those messages into smaller packets for transmission. We also incorporated the CSMA protocol, which helps to prevent multiple nodes from transmitting at the same time, reducing the unlike event of packet collision. Our chat application also utilizes multi-hop forwarding, which allows messages to be transmitted through multiple nodes in the network before reaching their intended destination. This feature ensures that messages can be transmitted even if a direct connection between two divers is not available.",
    imageUrl: chatImg,
  },
  {
    title: "Othello(Reversi) in Java",
    description:
      "As the final project of the module, my partner and I implemented the traditional board game Othello using Java. The game features multiplayer online support using a textual user interface (TUI) and allows players to join a queue to look for a game or choose to play locally against friends. To handle the online multiplayer part of the project we were tasked to develop a server and a client application for the game to run on. The server is multithreaded, which allows it to handle multiple games concurrently. The client application features a beginner-friendly design for using the features that come with the game, such as joining games online or deciding to play locally.",
    imageUrl: othelloImg,
  },
  {
    title: "Tweet Dashboard in Python(Covidboard)",
    description:
      "As the final project of the module, we were tasked with creating a tweet dashboard. Our team selected the theme of the dashboard to be Covid related tweets. We were also limited to only using a specific Python library called ECA for working on this project. During the development time, we surpassed the different challenges of working with Python for the foundations of a website. Still, in the end, we presented a polished website with several features for seeing Covid-19 related tweets, like hashtags, counts, and similar options.",
    imageUrl: covidboardImg,
  },
  {
    title: "Low Poly Racing",
    description:
      "Low Poly Racing is a game that I was developing during the summer of 2020. The game was made in Unity in C# and was an arcade racer that implements AI and different tracks in the mix to make the game fun and competitive. Features of the game include custom AI, different tracks(a new one just got released), 3 cars(more coming soon), TimeTrial Mode, and Racing Mode against Bots.",
    imageUrl: lowpolyracingImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "PostgreSQL",
  "MySQL",
  "Python",
  "Java",
  "Motion",
  "Unity",
  "C#",
  "AWS",
] as const;
