import { GraduationCap, TrendingUp, Cloud, Brain } from "lucide-react";

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
          <div className="flex items-start gap-3">
            <GraduationCap className="w-6 h-6 text-primary shrink-0 mt-1" />
            <p><strong className="text-foreground">B.Tech in Electrical & Electronics Engineering</strong> from JNTUA (2021).</p>
          </div>
          <p>
            My journey began in <strong>Banking</strong>, evolved through <strong>Mainframe modernization</strong> (COBOL),
            and has now firmly transitioned into <span className="text-primary font-semibold">Cloud & DevOps</span>.
          </p>
          <p>
            With ~3 years of experience supporting high-availability production systems, I bring a rare combination of
            <strong> legacy reliability discipline</strong> and modern <strong>cloud-native automation skills</strong> —
            using AWS, Terraform, and CI/CD to ship faster, safer, and at scale.
          </p>
          <p className="text-muted-foreground">
            I thrive on solving real-world infrastructure problems — whether it's reducing deployment times,
            automating manual toil, or hardening systems against threats.
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
