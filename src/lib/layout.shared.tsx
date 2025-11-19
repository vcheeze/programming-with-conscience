import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="font-bold tracking-tight text-primary hover:text-primary/80">
          PwC <span className="text-muted-foreground">/ Conscience</span>
        </div>
      ),
    },
  };
}
