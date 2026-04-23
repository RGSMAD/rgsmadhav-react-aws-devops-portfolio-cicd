import { Target } from "lucide-react";

const Objective = () => (
  <section id="objective" className="section-pad">
    <div className="max-w-4xl mx-auto">
      <div className="glass-card rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />

        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-cta mx-auto mb-6 flex items-center justify-center shadow-cta">
            <Target className="w-8 h-8 text-accent-foreground" />
          </div>
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">Career Objective</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-tight">
            "Actively seeking opportunities as a{" "}
            <span className="text-gradient">Cloud Engineer / AWS DevOps Engineer</span>{" "}
            to build scalable, secure, and automated cloud solutions."
          </h2>
        </div>
      </div>
    </div>
  </section>
);

export default Objective;
