import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-bone disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        /** Primary clay-fill */
        primary:
          "rounded-full bg-clay text-charcoal hover:bg-clay-dark hover:text-bone",
        /** Accent — alias for primary (legacy compat) */
        accent:
          "rounded-full bg-clay text-charcoal hover:bg-clay-dark hover:text-bone",
        /** Ghost — outlined, fills clay on hover */
        ghost:
          "rounded-full border border-charcoal/25 bg-transparent text-charcoal hover:border-clay hover:bg-clay hover:text-charcoal",
        /** Outline — alias for ghost (legacy compat) */
        outline:
          "rounded-full border border-charcoal/25 bg-transparent text-charcoal hover:border-clay hover:bg-clay hover:text-charcoal",
        /** Invert — for use on dark sections */
        invert:
          "rounded-full bg-bone text-charcoal hover:bg-clay",
        /** Link with arrow — minimal, decorative */
        link: "text-charcoal underline-offset-[6px] hover:text-clay-dark hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[0.65rem]",
        lg: "h-12 px-7",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
