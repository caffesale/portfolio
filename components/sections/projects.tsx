import { ProjectCard } from "@/components/project-card";
import { projectsData } from "@/lib/data";

export function ProjectsSection() {
    return (
        <section
            id="projects"
            className="h-screen py-20 px-6 overflow-y-auto"
            style={{ scrollSnapAlign: "start" }}
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                    Featured <span className="text-blue-400">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
