import type { ReactNode } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Features({
  features,
}: {
  features: Array<{ title: string; description: string; icon: ReactNode }>;
}) {
  return (
    <section className="py-16 md:py-32" id="principles">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            What Sets <span className="text-primary">PwC</span> Apart?
          </h2>
          <p className="mt-4">
            We <span className="text-muted-foreground">(used to)</span> work for
            a company called PwC (ANY similarity to our website name is PURELY
            coincidental). Combined, we have 15+ years of experience and have
            experienced our fair share of horror stories and are here to tell
            you about it.
          </p>
        </div>
        <Card className="pb-0 md:pb-6 @min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden *:text-center md:mt-16 bg-background rounded-none shadow-none">
          {features.map((feature) => (
            <div key={feature.title} className="group">
              <CardHeader className="pb-3">
                <CardDecorator>{feature.icon}</CardDecorator>
                <h3 className="mt-6 font-medium">{feature.title}</h3>
              </CardHeader>
              <CardContent className="max-sm:pb-6">
                <p className="text-sm">{feature.description}</p>
              </CardContent>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-foreground)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[27px_27px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
