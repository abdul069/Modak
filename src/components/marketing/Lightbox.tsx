"use client";

import * as React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  images: string[];
  alt: string;
}

export function Lightbox({ images, alt }: Props) {
  const [index, setIndex] = React.useState(0);
  if (!images.length) return null;

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <Dialog key={src}>
            <DialogTrigger asChild>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-brand-line bg-white"
                aria-label={`Open foto ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`${alt} — foto ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle className="sr-only">
                {alt} foto {index + 1}
              </DialogTitle>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={src}
                  alt={`${alt} — foto ${i + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
