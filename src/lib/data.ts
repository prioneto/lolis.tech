import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "/public/corpcomment.png";
import rmtdevImg from "/public/rmtdev.png";
import wordanalyticsImg from "/public/wordanalytics.png";

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
		title: "Game Developer - Prioneto Games",
		location: "Athens, Greece",
		description: "I was developing indie games using the Unity game engine for public release. One of the most successful games I released was Low Poly Racing which came out in April of 2020 for Windows and Linux.",
		icon: React.createElement(CgWorkAlt),
		date: "2019-2022",
	},
	{
		title: "Bachelor Technical Computer Science - University of Twente (7.7/10)",
		location: "Enschede, Netherlands",
		description: "I am studying Technical Computer Science at the University of Twente. I am currently in my third year and I have a GPA of 7.7/10. I am also member of Aloha the triathlon association of Aloha.",
		icon: React.createElement(LuGraduationCap),
		date: "2021-2025",
	},
	{
		title: "Full-Stack Developer - Note-Bridge",
		location: "Enschede, Netherlands",
		description: "I work as a full-stack developer for Note-Bridge in order to create a functional website and help start the journey of the company and contribute to its growth. The team and I are working on different goals and deadlines to help the company succeed in the future.",
		icon: React.createElement(CgWorkAlt),
		date: "2023-present",
	},
] as const;

export const projectsData = [
	{
		title: "CorpComment",
		description: "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
		tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
		imageUrl: corpcommentImg,
	},
	{
		title: "rmtDev",
		description: "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
		tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
		imageUrl: rmtdevImg,
	},
	{
		title: "Word Analytics",
		description: "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
		tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Git", "Tailwind", "MongoDB", "Express", "PostgreSQL", "Python", "Django", "Framer Motion"] as const;
