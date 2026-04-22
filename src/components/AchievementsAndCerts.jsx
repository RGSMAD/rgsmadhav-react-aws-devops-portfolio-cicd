import { Trophy, Zap, Activity, Cog, Award, GraduationCap, BadgeCheck } from "lucide-react";

const achievements = [
  { icon: Zap, text: "Deployment time reduced to <15 minutes" },
  { icon: Activity, text: "99.9% uptime achieved on production systems" },
  { icon: Cog, text: "70–80% automation efficiency improvement" },
  { icon: Award, text: "Performance Award — 100% SLA compliance" },
];

const certs = [
  { title: "SQL Certification", issuer: "HackerRank", color: "from-primary to-primary-glow" },
  { title: "NTT Data Certifications", issuer: "NTT Data", color: "from-accent to-accent-glow" },
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

      {/* Certifications */}
      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {certs.map((c) => (
          <div key={c.title} className="glass-card p-6 rounded-2xl text-center hover:shadow-glow transition-all hover:-translate-y-2 group">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.color} mx-auto mb-4 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform`}>
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-lg mb-1">{c.title}</h3>
            <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
              <BadgeCheck className="w-4 h-4 text-primary" />
              {c.issuer}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsAndCerts;
