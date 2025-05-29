import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export function SocialLinks() {
    const socialLinks = [
        {
            icon: Mail,
            label: "Email Me",
            href: "mailto:your.email@example.com",
            className:
                "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white",
        },
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/yourusername",
            className:
                "border-muted-foreground text-muted-foreground hover:bg-muted-foreground hover:text-background",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://linkedin.com/in/yourusername",
            className:
                "border-muted-foreground text-muted-foreground hover:bg-muted-foreground hover:text-background",
        },
    ];

    return (
        <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                    <Button
                        key={link.label}
                        variant="outline"
                        size="lg"
                        asChild
                        className={`rounded-full ${link.className}`}
                    >
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon className="h-5 w-5 mr-2" />
                            {link.label}
                        </a>
                    </Button>
                );
            })}
        </div>
    );
}
