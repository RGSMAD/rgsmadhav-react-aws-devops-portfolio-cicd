import { Cloud, Code2, GitBranch, Container, Terminal, Activity, Database, Server, Brain } from "lucide-react";

const groups = [
  { icon: Cloud, title: "Cloud (AWS)", items: ["EC2", "VPC", "S3", "RDS", "Lambda", "CloudFront", "Route53", "IAM", "ALB/ASG"] },
  { icon: Code2, title: "Infrastructure as Code", items: ["Terraform", "CloudFormation", "Modules", "Remote State"] },
  { icon: GitBranch, title: "CI/CD", items: ["GitHub Actions", "Pipelines", "Blue/Green", "Auto Rollbacks"] },
  { icon: Container, title: "Containers", items: ["Docker", "Kubernetes", "ECS", "EKS"] },
  { icon: Terminal, title: "Scripting", items: ["Bash", "Linux Admin", "Cron", "Automation"] },
  { icon: Activity, title: "Monitoring", items: ["CloudWatch", "AppDynamics", "Alarms", "Dashboards"] },
  { icon: Database, title: "Databases", items: ["RDS", "MySQL", "DynamoDB", "Postgres"] },
  { icon: Server, title: "Mainframe", items: ["COBOL", "JCL", "DB2", "Modernization"] },
  { icon: Brain, title: "AI/ML on AWS", items: ["SageMaker", "Bedrock", "Rekognition", "Comprehend"] },
];

const Skills = () => (
  <section id="skills" className="section-pad bg-gradient-hero mesh-bg">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-accent font-semibold uppercase tracking-widest text-sm">Tech Stack</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <div
            key={g.title}
            className="glass-card p-6 rounded-2xl group hover:shadow-glow transition-all hover:-translate-y-1"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <g.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
