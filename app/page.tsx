"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <div
            className={`h-screen overflow-y-scroll scroll-smooth transition-colors duration-300 ${
                isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"
            }`}
            style={{
                scrollSnapType: "y mandatory",
            }}
        >
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-80 border-b border-opacity-20">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        <span className="text-blue-400">*</span>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        {["about", "projects", "contact"].map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                className="capitalize transition-colors duration-200 hover:text-blue-400 text-gray-400"
                            >
                                {section}
                            </a>
                        ))}
                    </nav>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="rounded-full"
                    >
                        {isDark ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                    </Button>
                </div>
            </header>

            {/* Hero/About Section */}
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

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Your friendly neighborhood frontend developer, UX
                        architect, and JavaScript engineer. I spend my days (and
                        often nights) painting the internet canvas with{" "}
                        <a
                            href="#projects"
                            className="text-blue-400 font-semibold hover:underline"
                        >
                            PROJECTS
                        </a>{" "}
                        and lines of code, turning zeroes and ones into
                        immersive, interactive experiences.
                    </p>

                    <div className="mt-12 flex justify-center space-x-6">
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

            {/* Projects Section */}
            <section
                id="projects"
                className="h-screen py-20 px-6 overflow-y-auto"
                style={{ scrollSnapAlign: "start" }}
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                        Featured <span className="text-blue-400">Projects</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="h-screen flex items-center justify-center px-6 py-20"
                style={{ scrollSnapAlign: "start" }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        Let&apos;s{" "}
                        <span className="text-blue-400">Connect</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        I&apos;m always interested in new opportunities and
                        exciting projects. Whether you have a question or just
                        want to say hi, feel free to reach out!
                    </p>

                    <div className="flex justify-center space-x-6 mb-12">
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full"
                        >
                            <Mail className="h-5 w-5 mr-2" />
                            Email Me
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white rounded-full"
                        >
                            <Github className="h-5 w-5 mr-2" />
                            GitHub
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white rounded-full"
                        >
                            <Linkedin className="h-5 w-5 mr-2" />
                            LinkedIn
                        </Button>
                    </div>

                    <div
                        className={`p-8 rounded-2xl ${
                            isDark ? "bg-slate-800" : "bg-gray-50"
                        }`}
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className={`w-full p-4 rounded-lg border ${
                                        isDark
                                            ? "bg-slate-700 border-slate-600 text-white"
                                            : "bg-white border-gray-300 text-gray-900"
                                    } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className={`w-full p-4 rounded-lg border ${
                                        isDark
                                            ? "bg-slate-700 border-slate-600 text-white"
                                            : "bg-white border-gray-300 text-gray-900"
                                    } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                className={`w-full p-4 rounded-lg border ${
                                    isDark
                                        ? "bg-slate-700 border-slate-600 text-white"
                                        : "bg-white border-gray-300 text-gray-900"
                                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                            />
                            <textarea
                                rows={6}
                                placeholder="Your Message"
                                className={`w-full p-4 rounded-lg border ${
                                    isDark
                                        ? "bg-slate-700 border-slate-600 text-white"
                                        : "bg-white border-gray-300 text-gray-900"
                                } focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none`}
                            />
                            <Button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg text-lg font-semibold"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className={`py-8 px-6 border-t ${
                    isDark ? "border-slate-800" : "border-gray-200"
                }`}
            >
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400">
                        © 2024 Frontend Developer. Built with Next.js and
                        Tailwind CSS.
                    </p>
                </div>
            </footer>
        </div>
    );
}
