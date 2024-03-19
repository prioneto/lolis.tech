"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/dialog";

export default function Projects() {
	const { ref } = useSectionInView("Projects", 0.5);

	return (
		<section ref={ref} id="projects" className="scroll-mt-28 mb-28">
			<SectionHeading>My projects</SectionHeading>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
				{projectsData.map((project, index) => (
					<div className="p-4" key={index}>
						<Dialog>
							<DialogTrigger>
								<Project {...project} />
							</DialogTrigger>
							<DialogContent>
								<div className="flex flex-col justify-between space-y-4">
									<DialogHeader>
										<DialogTitle>{project.title}</DialogTitle>
									</DialogHeader>
									<DialogDescription>{project.description}</DialogDescription>
								</div>
								<div className="relative h-full w-full hidden lg:block">
									<Image src={project.imageUrl} alt="Project Image" objectFit="cover" />
								</div>
							</DialogContent>
						</Dialog>
					</div>
				))}
			</div>
		</section>
	);
}
