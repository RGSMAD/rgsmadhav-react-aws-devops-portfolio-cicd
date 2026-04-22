import { Github, Lock, Rocket, Globe2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Globe2,
    title: "Multi-Region 3-Tier AWS Platform",
    desc: "Production-ready, highly available platform spanning multiple AWS regions. Provisioned end-to-end with Terraform — VPC, ALB, ASG, RDS Multi-AZ, and CI/CD pipelines.",
    tags: ["Terraform", "AWS", "Multi-Region", "CI/CD"],
    metrics: ["99.9% uptime", "<15 min deploy", "Auto-scaling"],
    github: "https://github.com/",
    githubDisabled: false,
  },
  {
    icon: Shield,
    title: "Secure Two-Tier AWS Architecture",
    desc: "Hardened two-tier architecture with private subnets, IAM least-privilege, security groups, and WAF — blocking 90% of malicious threats.",
    tags: ["AWS", "Security", "VPC", "WAF"],
    metrics: ["90% threat blocked", "Least privilege", "Encrypted"],
    github: null,
    githubDisabled: false,
  },
  {
    icon: Rocket,
    title: "Project 3",
    desc: "Coming soon.",
    tags: [],
    metrics: [],
    github: "#",
    githubDisabled: true,
  },
];

const Projects = () => (
  <section id="projects" className="section-pad bg-gradient-hero mesh-bg">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-accent font-semibold uppercase tracking-widest text-sm">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Featured <span className="text-gradient">Projects</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="glass-card p-6 rounded-2xl flex flex-col hover:shadow-glow transition-all hover:-translate-y-2 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-glow">
              <p.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{p.desc}</p>

            {p.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium">{t}</span>
                ))}
              </div>
            )}

            {p.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-2 mb-4 pt-4 border-t border-border">
                {p.metrics.map((m) => (
                  <div key={m} className="text-center">
                    <div className="text-xs font-semibold text-primary">{m}</div>
                  </div>
                ))}
              </div>
            )}

            {p.github !== null && (
              <Button
                asChild={!p.githubDisabled}
                variant="outline"
                size="sm"
                disabled={p.githubDisabled}
                className="w-full mt-auto"
              >
                {p.githubDisabled ? (
                  <span className="flex items-center justify-center gap-2">
                    <Lock className="w-4 h-4" />Coming Soon
                  </span>
                ) : (
                  <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                    <Github className="w-4 h-4" />View on GitHub
                  </a>
                )}
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
