"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a computer science student, I’ve worked on multiple team projects, gaining valuable experience in communication, collaboration, and meeting deadlines. I have 3 years of experience with C#
        and Unity, which sparked my passion for game development. Over the past 2 years, I&apos;ve focused on Full-Stack Development, specifically with Next.js and Vercel, further refining my
        problem-solving skills and attention to detail. I thrive under pressure and excel in teamwork, and I’m excited to continue growing at the intersection of technology and creativity as I pursue
        my career in computer science.
      </p>
    </motion.section>
  );
}
