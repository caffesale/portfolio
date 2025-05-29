"use client";

import { Button } from "@/components/ui/button";

export function ContactForm() {
    return (
        <div className="p-8 rounded-2xl bg-card border border-border">
            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="w-full p-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                />
                <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg text-lg font-semibold"
                >
                    Send Message
                </Button>
            </form>
        </div>
    );
}
