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
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
				{projectsData.map((project, index) => (
					<div className="p-4" key={index}>
						<Project {...project} />
					</div>
				))}
			</div>
		</section>
	);
}
