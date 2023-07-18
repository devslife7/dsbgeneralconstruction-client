import { url } from "inspector"
import HeroBackground from "../public/images/HeroSection.jpg"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex h-screen items-center justify-center bg-background text-white">
        <div className="text-7xl">Hello World</div>
      </div>
    </div>
  )
}
