"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section ref={ref} className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} id="about">
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">As a computer science student, I have had the opportunity to work on multiple team projects throughout my degree. These experiences have taught me the value of effective communication, collaboration, and the importance of meeting project deadlines. In addition to my academic pursuits, I have 5 years of experience in C# and Unity, allowing me to delve into the world of game development. At the same time the last 2 years I have been working as a Full-Stack Developer and specifically with Next.js and Vercel. My experience has honed my problem-solving skills and helped me develop a keen eye for detail. I take pride in my ability to work well under pressure, which has led me to be competitive and excel at teamwork. Overall, I am passionate about the intersection of technology and creativity, and am excited to continue my growth and development as a computer science professional.</p>
		</motion.section>
	);
}
