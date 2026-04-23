import { useState } from "react";
import { Briefcase, Calendar, MousePointerClick } from "lucide-react";

const jobs = [
  {
    role: "AWS DevOps Intern",
    company: "Vcube",
    period: "Recent",
    summary: [
      "Architected & deployed Terraform-based 3-tier AWS architecture",
      "Implemented multi-region deployments for high availability",
      "Built CI/CD pipelines reducing deployment time to <15 minutes",
      "Designed secure VPC with ALB + Auto Scaling Groups",
    ],
    details: [
      "Authored reusable Terraform modules (VPC, ALB, ASG, RDS) with remote state on S3 + DynamoDB locking",
      "Configured private/public subnets across 3 AZs with NAT gateways and route tables",
      "Built GitHub Actions pipelines with automated lint, plan, and apply gates",
      "Implemented blue/green deployments with CodeDeploy and automated rollbacks",
      "Hardened IAM with least-privilege roles, MFA enforcement, and policy boundaries",
      "Set up CloudWatch dashboards, alarms, and SNS-based incident alerting",
      "Containerized sample workloads with Docker and deployed to ECS Fargate",
      "Automated nightly snapshots and cross-region backup replication for DR",
    ],
  },
  {
    role: "Info Tech Senior Associate",
    company: "NTT Data",
    period: "2.7 years",
    summary: [
      "Maintained 99.9% uptime on mission-critical production systems",
      "Reduced incidents by 25–30% through proactive monitoring",
      "Automated repetitive tasks using Bash scripts (70%+ toil reduction)",
      "Monitored systems with AppDynamics, resolved P1/P2 incidents",
    ],
    details: [
      "Supported high-availability mainframe + distributed systems for US banking clients",
      "Owned P1/P2 incident response with strict SLA adherence and RCA documentation",
      "Authored Bash + JCL automation scripts that eliminated 70%+ of repetitive toil",
      "Tuned AppDynamics dashboards and alerts to catch regressions before customer impact",
      "Coordinated change management across cross-functional teams in 24x7 rotation",
      "Performed COBOL/DB2 batch job analysis, reruns, and abend resolution",
      "Mentored junior associates on monitoring tools, runbooks, and on-call hygiene",
      "Earned Performance Award for sustained 100% SLA compliance across quarters",
    ],
  },
];

const ExperienceCard = ({ job, side }) => {
  const [flipped, setFlipped] = useState(false);
  const align = side === "left" ? "md:text-right" : "";
  const justify = side === "left" ? "md:justify-end" : "";

  return (
    <div
      className="group [perspective:1200px] cursor-pointer"
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={`relative w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        style={{ minHeight: "280px" }}
      >
        {/* Front */}
        <div className="glass-card p-6 rounded-2xl hover:shadow-glow transition-shadow [backface-visibility:hidden]">
          <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-2 ${justify}`}>
            <Calendar className="w-4 h-4" />
            <span>{job.period}</span>
          </div>
          <h3 className={`font-display font-bold text-xl ${align}`}>{job.role}</h3>
          <div className={`flex items-center gap-2 text-primary font-semibold mb-3 ${justify}`}>
            <Briefcase className="w-4 h-4" />
            {job.company}
          </div>
          <ul className={`space-y-1.5 text-sm text-foreground/80 ${align}`}>
            {job.summary.map((p) => (
              <li key={p}>• {p}</li>
            ))}
          </ul>
          <div className={`mt-4 flex items-center gap-1.5 text-xs text-accent font-semibold ${justify}`}>
            <MousePointerClick className="w-3.5 h-3.5" />
            <span>Click for full details</span>
          </div>
        </div>

        {/* Back */}
        <div className="glass-card p-6 rounded-2xl absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-auto bg-gradient-primary">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display font-bold text-lg text-primary-foreground">{job.role}</h3>
            <span className="text-xs text-primary-foreground/80">{job.company}</span>
          </div>
          <ul className="space-y-2 text-sm text-primary-foreground/95">
            {job.details.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="shrink-0">▹</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 text-xs text-primary-foreground/70 text-center">Click to flip back</div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => (
  <section id="experience" className="section-pad">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-accent font-semibold uppercase tracking-widest text-sm">Career Path</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-sm text-muted-foreground mt-3">Tip: click any card to flip and see the full breakdown.</p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-1/2" />

        <div className="space-y-12">
          {jobs.map((j, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={j.company} className="relative md:grid md:grid-cols-2 md:gap-8 items-start">
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-cta border-4 border-background shadow-cta md:-translate-x-1/2 top-6 z-10" />

                {isLeft ? (
                  <>
                    <div className="pl-12 md:pl-0 md:pr-12">
                      <ExperienceCard job={j} side="left" />
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div className="pl-12 md:pl-12">
                      <ExperienceCard job={j} side="right" />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
