"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
	const { ref } = useSectionInView("Projects", 0.5);

	return (
		<section ref={ref} id="projects" className="scroll-mt-28 mb-28">
			<SectionHeading>My projects</SectionHeading>
			<div className="flex flex-col sm:flex-row flex-wrap justify-around">
				{projectsData.map((project, index) => (
					<div className="w-full sm:w-1/2 p-4" key={index}>
						<Project {...project} />
					</div>
				))}
			</div>
		</section>
	);
}
