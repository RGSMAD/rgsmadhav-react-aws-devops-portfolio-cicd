import { Briefcase, Calendar } from "lucide-react";

const jobs = [
  {
    role: "AWS DevOps Intern",
    company: "Vcube",
    period: "Recent",
    points: [
      "Architected & deployed Terraform-based 3-tier AWS architecture",
      "Implemented multi-region deployments for high availability",
      "Built CI/CD pipelines reducing deployment time to <15 minutes",
      "Designed secure VPC with ALB + Auto Scaling Groups",
    ],
  },
  {
    role: "Info Tech Senior Associate",
    company: "NTT Data",
    period: "2.7 years",
    points: [
      "Maintained 99.9% uptime on mission-critical production systems",
      "Reduced incidents by 25–30% through proactive monitoring",
      "Automated repetitive tasks using Bash scripts (70%+ toil reduction)",
      "Monitored systems with AppDynamics, resolved P1/P2 incidents",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-pad">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-accent font-semibold uppercase tracking-widest text-sm">Career Path</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Work <span className="text-gradient">Experience</span>
        </h2>
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

                {/* Left side card */}
                {isLeft ? (
                  <>
                    <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                      <div className="glass-card p-6 rounded-2xl hover:shadow-glow transition-all hover:-translate-y-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 md:justify-end">
                          <Calendar className="w-4 h-4" />
                          <span>{j.period}</span>
                        </div>
                        <h3 className="font-display font-bold text-xl">{j.role}</h3>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-3 md:justify-end">
                          <Briefcase className="w-4 h-4" />
                          {j.company}
                        </div>
                        <ul className="space-y-1.5 text-sm text-foreground/80 md:text-right">
                          {j.points.map((p) => (
                            <li key={p}>• {p}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div className="pl-12 md:pl-12">
                      <div className="glass-card p-6 rounded-2xl hover:shadow-glow transition-all hover:-translate-y-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{j.period}</span>
                        </div>
                        <h3 className="font-display font-bold text-xl">{j.role}</h3>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-3">
                          <Briefcase className="w-4 h-4" />
                          {j.company}
                        </div>
                        <ul className="space-y-1.5 text-sm text-foreground/80">
                          {j.points.map((p) => (
                            <li key={p}>• {p}</li>
                          ))}
                        </ul>
                      </div>
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
