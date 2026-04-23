import { useEffect, useState } from "react";
import { Github, Linkedin, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "@/assets/profile.jpg";

const keywords = [
  "AWS Architecture",
  "Terraform IaC",
  "CI/CD Automation",
  "DevOps Engineering",
  "Kubernetes Orchestration",
  "Cloud Security",
  "Multi-Region Deployment",
  "Infrastructure Automation",
  "High Availability Systems",
];

const metrics = [
  { value: "99.9%", label: "Uptime", pos: "top-4 -left-6 md:-left-12" },
  { value: "<15 min", label: "Deployments", pos: "top-1/2 -right-8 md:-right-16" },
  { value: "70-80%", label: "Automation", pos: "bottom-12 -left-8 md:-left-16" },
  { value: "30-50%", label: "Latency ↓", pos: "-top-4 right-2 md:right-8" },
  { value: "90%", label: "Threat Blocked", pos: "bottom-2 right-0 md:right-4" },
];

const Hero = () => {
  const [kwIndex, setKwIndex] = useState(0);
  const [profileSrc, setProfileSrc] = useState(profile);
  const [resumeHref, setResumeHref] = useState("/resume.pdf");
  const [resumeName, setResumeName] = useState("resume.pdf");

  useEffect(() => {
    const id = setInterval(() => {
      setKwIndex((i) => (i + 1) % keywords.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const sync = () => {
      const pic = localStorage.getItem("rgsm:profile_pic");
      const resume = localStorage.getItem("rgsm:resume_pdf");
      const name = localStorage.getItem("rgsm:resume_name");
      setProfileSrc(pic || profile);
      setResumeHref(resume || "/resume.pdf");
      setResumeName(name || "resume.pdf");
    };
    sync();
    window.addEventListener("rgsm:assets-updated", sync);
    return () => window.removeEventListener("rgsm:assets-updated", sync);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-gradient-hero mesh-bg">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Open to Cloud Engineer roles</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Rajoli Girisai{" "}
            <span className="text-gradient">Madhav</span>
          </h1>

          <p className="text-xl md:text-2xl font-display font-semibold text-foreground/80">
            AWS DevOps Engineer{" "}
            <span className="text-muted-foreground">|</span>{" "}
            Cloud & Infrastructure Specialist
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Building <span className="text-primary font-semibold">scalable</span>,{" "}
            <span className="text-primary font-semibold">secure</span>, and{" "}
            <span className="text-primary font-semibold">automated</span> cloud infrastructure
            using AWS & Terraform — with proven 99.9% uptime in production.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild variant="cta" size="lg">
              <a href="#contact"><Mail className="w-4 h-4" />Hire Me</a>
            </Button>
            <Button asChild variant="hero" size="lg">
              <a href={resumeHref} download={resumeName}>
                <Download className="w-4 h-4" />Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://linkedin.com/in/rajoli-girisai-madhav" target="_blank" rel="noreferrer">
                <Linkedin className="w-4 h-4" />LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Github className="w-4 h-4" />GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Right: Profile + orbit */}
        <div className="relative flex items-center justify-center animate-scale-in">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            {/* Orbit rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
            <div className="absolute inset-6 rounded-full border-2 border-dashed border-accent/30 animate-spin-reverse" />

            {/* Glow */}
            <div className="absolute inset-8 rounded-full bg-gradient-primary blur-2xl opacity-30 animate-pulse-glow" />

            {/* Profile image */}
            <div className="absolute inset-10 rounded-full overflow-hidden border-4 border-background shadow-glow">
              <img
                src={profileSrc}
                alt="Rajoli Girisai Madhav — AWS DevOps Engineer"
                className="w-full h-full object-contain bg-background"
                width={400}
                height={400}
              />
            </div>

            {/* Rotating keyword pill */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-5 py-2.5 rounded-full whitespace-nowrap shadow-glow">
              <span
                key={kwIndex}
                className="text-sm font-semibold text-gradient animate-fade-in"
              >
                {keywords[kwIndex]}
              </span>
            </div>

            {/* Floating metric chips */}
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`absolute ${m.pos} glass-card px-3 py-2 rounded-xl shadow-card-hover animate-float`}
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <div className="text-base md:text-lg font-display font-bold text-gradient">{m.value}</div>
                <div className="text-[10px] md:text-xs text-muted-foreground font-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
