import { Trophy, Zap, Activity, Cog, Award, GraduationCap, BadgeCheck, Database, Building2 } from "lucide-react";

const achievements = [
  { icon: Zap, text: "Deployment time reduced to <15 minutes" },
  { icon: Activity, text: "99.9% uptime achieved on production systems" },
  { icon: Cog, text: "70–80% automation efficiency improvement" },
  { icon: Award, text: "Performance Award — 100% SLA compliance" },
];

const certs = [
  {
    icon: Database,
    title: "SQL Certification",
    issuer: "HackerRank",
    desc: "Verified proficiency in queries, joins, aggregations, and data handling for relational databases.",
    gradient: "from-primary to-primary-glow",
  },
  {
    icon: Building2,
    title: "NTT Data Certifications",
    issuer: "NTT Data",
    desc: "Enterprise-level validation in mainframe operations, systems administration, and production support.",
    gradient: "from-accent to-accent-glow",
  },
];

const AchievementsAndCerts = () => (
  <section id="achievements" className="section-pad">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-accent font-semibold uppercase tracking-widest text-sm">Recognition & Credentials</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 flex items-center justify-center gap-3 flex-wrap">
          <Trophy className="w-9 h-9 text-accent" />
          <span>Key <span className="text-gradient">Achievements</span> & Certifications</span>
        </h2>
      </div>

      {/* Achievements */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {achievements.map((a) => (
          <div
            key={a.text}
            className="glass-card px-5 py-3 rounded-full flex items-center gap-3 hover:shadow-glow transition-all hover:-translate-y-1 hover:bg-gradient-primary hover:text-primary-foreground group cursor-default"
          >
            <a.icon className="w-5 h-5 text-accent group-hover:text-primary-foreground transition-colors" />
            <span className="font-semibold text-sm md:text-base">{a.text}</span>
          </div>
        ))}
      </div>

      {/* Certifications - horizontal detailed cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {certs.map((c) => (
          <div
            key={c.title}
            className="glass-card p-6 rounded-2xl flex items-start gap-5 hover:shadow-glow transition-all hover:-translate-y-1 group relative overflow-hidden"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shadow-glow shrink-0 group-hover:scale-110 transition-transform`}>
              <c.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="font-display font-bold text-lg">{c.title}</h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">
                  <BadgeCheck className="w-3.5 h-3.5" />Verified
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-accent font-semibold mb-2">
                <GraduationCap className="w-4 h-4" />
                {c.issuer}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsAndCerts;
