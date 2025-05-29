import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section
            id="about"
            className="h-screen flex items-center justify-center px-6"
            style={{ scrollSnapAlign: "start" }}
        >
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
                    I&apos;M A FRONTEND
                    <br />
                    <span className="text-blue-400">DEVELOPER</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Your friendly neighborhood frontend developer, UX architect,
                    and JavaScript engineer. I spend my days (and often nights)
                    painting the internet canvas with{" "}
                    <a
                        href="#projects"
                        className="text-blue-400 font-semibold hover:underline"
                    >
                        PROJECTS
                    </a>{" "}
                    and lines of code, turning zeroes and ones into immersive,
                    interactive experiences.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                    <Button
                        asChild
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
                    >
                        <a href="#projects">View My Work</a>
                    </Button>
                    <Button
                        variant="outline"
                        asChild
                        className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full"
                    >
                        <a href="#contact">Get In Touch</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
