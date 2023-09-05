import AboutSection from "@/components/home/AboutSection"
import Hero from "@/components/home/Hero"
import KeyPoints from "@/components/home/Keypoints"
import Services from "@/components/home/Services"
import Contact from "@/components/home/Contact"

export default function Home() {
    return (
        <>
            <Hero />
            <AboutSection />
            <KeyPoints />
            <Services />
            <Contact/>
        </>
    )
}
