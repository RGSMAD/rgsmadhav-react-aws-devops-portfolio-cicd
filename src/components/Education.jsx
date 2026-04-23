import { GraduationCap, BookOpen, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Tech — Electrical & Electronics Engineering",
    school: "Jawaharlal Nehru Technological University, Anantapur (JNTUA)",
    year: "2017 – 2021",
    icon: GraduationCap,
  },
  {
    degree: "Intermediate (MPC)",
    school: "Board of Intermediate Education, Andhra Pradesh",
    year: "2015 – 2017",
    icon: BookOpen,
  },
  {
    degree: "SSC",
    school: "Board of Secondary Education, Andhra Pradesh",
    year: "2014 – 2015",
    icon: BookOpen,
  },
];

const Education = () => (
  <section id="education" className="section-pad">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-accent font-semibold uppercase tracking-widest text-sm">Academic Background</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          <span className="text-gradient">Education</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {education.map((e) => (
          <div
            key={e.degree}
            className="glass-card p-6 rounded-2xl hover:shadow-glow transition-all hover:-translate-y-1 flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
              <e.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-lg mb-1">{e.degree}</h3>
            <p className="text-sm text-foreground/80 mb-3 flex-1">{e.school}</p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              {e.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
