import { ContactForm } from "@/components/contact-form";
import { SocialLinks } from "@/components/social-links";

export function ContactSection() {
    return (
        <section
            id="contact"
            className="h-screen flex items-center justify-center px-6 py-20"
            style={{ scrollSnapAlign: "start" }}
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    Let&apos;s <span className="text-blue-400">Connect</span>
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I&apos;m always interested in new opportunities and exciting
                    projects. Whether you have a question or just want to say
                    hi, feel free to reach out!
                </p>

                <SocialLinks />
                <ContactForm />
            </div>
        </section>
    );
}
