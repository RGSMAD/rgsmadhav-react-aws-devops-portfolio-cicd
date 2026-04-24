import { Target, MapPin } from "lucide-react";

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

          {/* Availability badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 backdrop-blur border border-border shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm font-semibold">Available for Hire</span>
            </div>
            <span className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-default">Full-time</span>
            <span className="text-foreground/30">•</span>
            <span className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-default">Contract</span>
            <span className="text-foreground/30">•</span>
            <span className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-default">Remote</span>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Based in <span className="font-semibold text-foreground">India</span> • Open to <span className="font-semibold text-foreground">Remote / Relocation</span></span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Objective;
