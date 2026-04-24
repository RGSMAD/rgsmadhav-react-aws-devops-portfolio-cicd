import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import AchievementsAndCerts from "@/components/AchievementsAndCerts";
import Objective from "@/components/Objective";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AssetUploader from "@/components/AssetUploader";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Objective />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <AchievementsAndCerts />
        <Contact />
      </main>
      <Footer />
      <AssetUploader />
    </div>
  );
};

export default Index;
