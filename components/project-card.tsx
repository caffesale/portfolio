import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="group hover:scale-105 transition-transform duration-300 bg-card border-border">
            <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-blue-600 bg-opacity-20 text-blue-400 text-xs rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
