import { TrendingUp, Cloud, Brain } from "lucide-react";

const highlights = [
  { icon: TrendingUp, label: "99.9% Uptime", desc: "in production systems" },
  { icon: Cloud, label: "Cloud Transition", desc: "Mainframe → AWS Cloud" },
  { icon: Brain, label: "Problem Solver", desc: "Discipline-driven mindset" },
];

const About = () => (
  <section id="about" className="section-pad relative">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-accent font-semibold uppercase tracking-widest text-sm">About Me</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          From Mainframes to the <span className="text-gradient">Cloud</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            I began my career in <strong>enterprise banking systems</strong> at{" "}
            <strong>NTT Data</strong>, working with <strong>Mainframes (COBOL, JCL)</strong>, where I learned the importance
            of reliability, production stability, and maintaining{" "}
            <span className="text-primary font-semibold">99.9% uptime</span> in mission-critical environments.
          </p>
          <p>
            Driven by a passion for modern infrastructure, I transitioned into{" "}
            <span className="text-primary font-semibold">Cloud and DevOps</span>. I've since designed and deployed
            scalable AWS architectures, implemented CI/CD pipelines, and reduced deployment times to{" "}
            <span className="text-accent font-semibold">under 15 minutes</span> through automation.
          </p>
          <p>
            Today, I focus on building <strong>secure, high-availability systems</strong> using{" "}
            <strong>AWS and Terraform</strong> — combining strong production discipline with modern cloud practices
            to deliver infrastructure that is both resilient and efficient.
          </p>
          <p className="text-muted-foreground">
            I enjoy understanding how systems behave in real-world environments and improving them through smarter
            automation and design.
          </p>
        </div>

        <div className="grid gap-4">
          {highlights.map((h) => (
            <div key={h.label} className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:shadow-glow transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                <h.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">{h.label}</div>
                <div className="text-sm text-muted-foreground">{h.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
