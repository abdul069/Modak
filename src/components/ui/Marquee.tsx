import { cn } from "@/lib/utils";

type MarqueeProps = {
  className?: string;
  children: React.ReactNode;
  pauseOnHover?: boolean;
};

export function Marquee({ className, children, pauseOnHover = true }: MarqueeProps) {
  return (
    <div className={cn("marquee-mask overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max gap-12 animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div aria-hidden="true" className="flex shrink-0 items-center gap-12">
          {children}
        </div>
      </div>
    </div>
  );
}
