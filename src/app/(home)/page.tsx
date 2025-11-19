import { DropletIcon, LightbulbIcon, MilestoneIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export default function HomePage() {
  const FeatureCard = ({
    icon,
    title,
    description,
  }: {
    icon: ReactNode;
    title: string;
    description: string;
  }) => (
    <div className="p-6 rounded-xl shadow-lg border transition-shadow hover:shadow-2xl">
      <div className="text-primary hover:text-primary/80 mb-4 text-3xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );

  return (
    // The main container simulates the Next.js/Fumadocs root wrapper
    // NOTE: In a real Fumadocs setup, all indigo colors (e.g., indigo-600)
    // should be replaced with the corresponding theme variables like
    // text-[var(--fmdocs-primary-600)] or bg-[var(--fmdocs-primary-600)].
    <div className="min-h-screen antialiased font-inter">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-primary hover:text-primary/80 tracking-widest mb-3">
            PROGRAMMING with CONSCIENCE (PwC)
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight">
            Beyond{" "}
            <span className="text-primary hover:text-primary/80">Linters</span>
            .
            <br className="hidden sm:inline" />
            Code Review <span className="text-muted-foreground">Wisdom</span>.
          </h1>

          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            This is an <strong>opinionated guide</strong> where we dissect
            common programming anti-patterns and pet peeves, drawn from years of
            reviewing and writing enterprise-grade code getting to production.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <Link
              href="/docs"
              className="rounded-lg px-6 py-3 text-lg font-semibold text-primary-foreground bg-primary shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full sm:w-auto text-center"
            >
              Start Reading the Guide
            </Link>
            <a
              href="#principles"
              className="text-lg font-semibold leading-6 hover:text-primary transition-colors duration-150 py-3 w-full sm:w-auto text-center"
            >
              Our Guiding Principles <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </main>

      {/* 3. Principles Section (The "Why") */}
      <section id="principles" className="py-16 bg-card border-t border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            What Sets <span className="text-primary">PwC</span> Apart?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<LightbulbIcon className="stroke-primary size-8" />}
              title="Operational Insight"
              description="Our focus is on pitfalls run into ourselves—issues that break production systems, not just formatting rules."
            />
            <FeatureCard
              icon={<DropletIcon className="stroke-primary size-8" />}
              title="Beyond Static Analysis"
              description="We go above and beyond what ESLint or linters tell you, focusing on subtle design and performance anti-patterns."
            />
            <FeatureCard
              icon={<MilestoneIcon className="stroke-primary size-8" />}
              title="Opinionated & Direct"
              description="We offer clear, actionable recommendations based on years of experience writing and reviewing complex software systems."
            />
          </div>
        </div>
      </section>

      {/* 4. Footer (Minimalist) */}
      <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-muted-foreground">
        <p>
          &copy; 2025 Program with Conscience (PwC). Built for clarity and
          quality.
        </p>
      </footer>
    </div>
  );
}
