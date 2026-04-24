import { useState } from "react";
import { Github, Lock, Rocket, Globe2, Shield, MousePointerClick } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Globe2,
    title: "Multi-Region 3-Tier AWS Platform",
    desc: "Production-ready, highly available platform spanning multiple AWS regions. Provisioned end-to-end with Terraform — VPC, ALB, ASG, RDS Multi-AZ, and CI/CD pipelines.",
    tags: ["Terraform", "AWS", "Multi-Region", "CI/CD"],
    metrics: ["99.9% uptime", "<15 min deploy", "Auto-scaling"],
    github: "https://github.com/",
    details: [
      "Architected an active-active multi-region topology with Route 53 latency-based routing",
      "Authored reusable Terraform modules for VPC, ALB, ASG, RDS, and IAM with remote state",
      "Implemented RDS Multi-AZ with cross-region read replicas for DR and reporting workloads",
      "Built GitHub Actions pipelines with plan/apply gates, approvals, and Slack notifications",
      "Configured Auto Scaling Groups with target tracking policies, reducing cost by ~25%",
      "Hardened the platform with WAF, Shield, GuardDuty, and least-privilege IAM boundaries",
      "Centralized observability with CloudWatch dashboards, alarms, and SNS-based alerting",
      "Automated cross-region backups & runbooks, achieving sub-15-minute deployment cycles",
    ],
  },
  {
    icon: Shield,
    title: "Secure Two-Tier AWS Architecture",
    desc: "Hardened two-tier architecture with private subnets, IAM least-privilege, security groups, and WAF — blocking 90% of malicious threats.",
    tags: ["AWS", "Security", "VPC", "WAF"],
    metrics: ["90% threat blocked", "Least privilege", "Encrypted"],
    github: null,
    details: [
      "Designed a secure two-tier VPC with public web tier and isolated private app tier",
      "Implemented strict security groups & NACLs following defense-in-depth principles",
      "Enforced least-privilege IAM with permission boundaries and per-service roles",
      "Deployed AWS WAF with managed rule groups, blocking ~90% of malicious traffic",
      "Encrypted all data at rest with KMS and in transit with ACM-issued TLS certificates",
      "Centralized audit logging via CloudTrail, Config, and S3 with object-lock retention",
      "Automated patching and compliance scanning with Systems Manager & Inspector",
      "Documented incident response runbooks and rotated secrets via Secrets Manager",
    ],
  },
  {
    icon: Rocket,
    title: "Project 3",
    desc: "Coming soon.",
    tags: [],
    metrics: [],
    github: "#",
    githubDisabled: true,
    details: [],
  },
];

const ProjectCard = ({ p }) => {
  const [flipped, setFlipped] = useState(false);
  const hasBack = (p.details?.length || 0) > 0;

  return (
    <div
      className={`group [perspective:1200px] ${hasBack ? "cursor-pointer" : ""}`}
      onClick={() => hasBack && setFlipped((f) => !f)}
    >
      <div
        className={`relative w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        style={{ minHeight: "480px" }}
      >
        {/* Front */}
        <div className="glass-card p-6 rounded-2xl flex flex-col hover:shadow-glow transition-all hover:-translate-y-1 absolute inset-0 [backface-visibility:hidden]">
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

          <div className="flex items-center gap-2">
            {p.github && (
              <Button
                asChild={!p.githubDisabled}
                variant="outline"
                size="sm"
                disabled={p.githubDisabled}
                className="flex-1"
                onClick={(e) => e.stopPropagation()}
              >
                {p.githubDisabled ? (
                  <span className="flex items-center justify-center gap-2">
                    <Lock className="w-4 h-4" />Coming Soon
                  </span>
                ) : (
                  <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                    <Github className="w-4 h-4" />GitHub
                  </a>
                )}
              </Button>
            )}
          </div>

          {hasBack && (
            <div className="mt-3 pt-3 border-t border-border/60 flex items-center justify-center gap-1.5 text-xs text-accent font-semibold">
              <MousePointerClick className="w-3.5 h-3.5" />
              <span>Click for full details</span>
            </div>
          )}
        </div>

        {/* Back */}
        {hasBack && (
          <div className="glass-card p-6 rounded-2xl absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-auto bg-gradient-primary">
            <h3 className="font-display font-bold text-lg text-primary-foreground mb-3">{p.title}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/95">
              {p.details.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="shrink-0">▹</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 text-xs text-primary-foreground/70 text-center">Click to flip back</div>
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="projects" className="section-pad bg-gradient-hero mesh-bg">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-accent font-semibold uppercase tracking-widest text-sm">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-sm text-muted-foreground mt-3">Tip: click any card to flip and see the full impact breakdown.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
      </div>
    </div>
  </section>
);

export default Projects;
