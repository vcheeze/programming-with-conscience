import { CircleDashedIcon } from "lucide-react";

// import CatDark from "@/assets/images/cat-dark.svg";
// import CatLight from "@/assets/images/cat-light.svg";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
// import Image from "next/image";

export function ComingSoon() {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          {/* <div className="hidden dark:block">
            <Image src={CatLight} unoptimized alt="light cat" />
          </div>
          <div className="block dark:hidden">
            <Image src={CatDark} unoptimized alt="dark cat" />
          </div> */}
          <CircleDashedIcon />
        </EmptyMedia>
        <EmptyTitle>Coming soon...</EmptyTitle>
        <EmptyDescription>
          We haven't bothered writing this yet, which doesn't mean it's not
          important. We just have other, more important things to do first.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div>
          <Button variant="outline">Give us a nudge to start writing</Button>
          <p className="text-xs text-muted-foreground italic mt-2! mb-0!">
            hint: this button does nothing
          </p>
        </div>
      </EmptyContent>
    </Empty>
  );
}
