import {
  CpuIcon,
  LightbulbIcon,
  MilestoneIcon,
  MoveRightIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  const members = [
    {
      id: 1,
      name: "Zaid H.",
      role: "Tech Lead",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQHMz9IMUUI6lg/profile-displayphoto-shrink_800_800/B4DZdOzw4LGkAk-/0/1749373882544?e=1765411200&v=beta&t=-h46I7O_hVPGOKCBf3LSQfXq84QwrjNp8te6m4PgRZo",
      link: "https://linkedin.com/in/zaid-hassan-ithaca",
    },
    {
      id: 2,
      name: "Tarik Z.",
      role: "???",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQGJ-6M3_3BmTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680726102874?e=1765411200&v=beta&t=0752z9tJ07sUpqMWkFxTb3LSz9x5acVQ1D1LJoFqXhs",
      link: "https://www.linkedin.com/in/tarik-zulfikarpasic/",
    },
    {
      id: 3,
      name: "Peter C.",
      role: "Lead SWE",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQGxV8JC2d-CnQ/profile-displayphoto-crop_800_800/B4DZqgWZ7PKIAI-/0/1763626819928?e=1765411200&v=beta&t=xP9ouFRGXXhUEbAKrm-Xul49dA5zLHcKdqOyTRiWXwM",
      link: "https://linkedin.com/in/peterweichen",
    },
  ];

  return (
    <div className="min-h-screen antialiased font-inter">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-primary hover:text-primary/80 tracking-widest mb-3">
            PROGRAMMING with CONSCIENCE (PwC)
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Beyond{" "}
            <span className="text-primary hover:text-primary/80">Linters</span>
            .
            <br />
            Code Review <span className="text-muted-foreground">Wisdom</span>.
          </h1>

          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            This is an{" "}
            <strong className="text-foreground">opinionated guide</strong> where
            we dissect common programming anti-patterns and pet peeves, drawn
            from years of reviewing and writing enterprise-grade code getting to
            production.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <Button
              asChild
              className="px-6 h-12 w-full sm:w-auto text-lg font-semibold"
            >
              <Link href="/docs">Start Reading the Guide</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="px-6 h-12 w-full sm:w-auto text-lg font-semibold"
            >
              <Link href="#principles">
                Our Guiding Principles <MoveRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <section id="principles" className="py-12 md:py-20">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              What Sets <span className="text-primary">PwC</span> Apart?
            </h2>
            <p>
              Lyra is evolving to be more than just the models. It supports an
              entire to the APIs and platforms helping developers and businesses
              innovate.
            </p>
          </div>

          <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <LightbulbIcon className="size-4" />
                <h3 className="text-sm font-medium">Operational Insight</h3>
              </div>
              <p className="text-sm">
                Our focus is on pitfalls run into ourselves—issues that break
                production systems, not just formatting rules.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CpuIcon className="size-4" />
                <h3 className="text-sm font-medium">Beyond Static Analysis</h3>
              </div>
              <p className="text-sm">
                We go above and beyond what ESLint or linters tell you, focusing
                on subtle design and performance anti-patterns.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MilestoneIcon className="size-4" />
                <h3 className="text-sm font-medium">Opinionated & Direct</h3>
              </div>
              <p className="text-sm">
                We offer clear, actionable recommendations based on years of
                experience writing and reviewing complex software systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl border-t px-6">
          <span className="text-caption -ml-6 -mt-3.5 block w-max px-6 bg-background">
            Team
          </span>
          <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
            <div className="sm:w-2/5">
              <h2 className="text-3xl font-bold sm:text-4xl">Our dream team</h2>
            </div>
            <div className="mt-6 sm:mt-0">
              <p>
                The minds behind PwC, in no particular order*, who unabashedly
                recorded their opinions for posterity to prove wrong. Until
                then, we assume we are right.
              </p>
              <p className="text-muted-foreground text-xs">
                * actually, in order of age
              </p>
            </div>
          </div>
          <div className="mt-12 md:mt-24">
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((member, index) => (
                <div key={member.id} className="group overflow-hidden">
                  <Image
                    alt="team member"
                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                    height="800"
                    src={member.avatar}
                    width="800"
                  />
                  <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                    <div className="flex justify-between">
                      <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                        {member.name}
                      </h3>
                      <span className="text-xs">_0{index + 1}</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {member.role}
                      </span>
                      <Link
                        href={member.link}
                        className="group-hover:text-primary dark:group-hover:text-primary/80 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        LinkedIn
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

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
