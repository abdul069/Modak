"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    side?: "left" | "right" | "top" | "bottom";
  }
>(({ className, children, side = "right", ...props }, ref) => {
  const sideStyles: Record<string, string> = {
    right:
      "inset-y-0 right-0 h-full w-3/4 max-w-md border-l border-brand-line data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
    left:
      "inset-y-0 left-0 h-full w-3/4 max-w-md border-r border-brand-line data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
    top:
      "inset-x-0 top-0 h-auto border-b border-brand-line data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
    bottom:
      "inset-x-0 bottom-0 h-auto border-t border-brand-line data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
  };
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 bg-brand-bg p-6 shadow-xl transition ease-in-out data-[state=closed]:duration-200 data-[state=open]:duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out",
          sideStyles[side],
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-md p-2 text-brand-ink ring-offset-brand-bg transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary">
          <X className="size-5" />
          <span className="sr-only">Sluiten</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});
SheetContent.displayName = "SheetContent";

export { Sheet, SheetTrigger, SheetClose, SheetContent };
