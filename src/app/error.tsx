"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-6xl text-brand-accent">Oei</p>
      <h1 className="mt-4 font-display text-brand-ink">
        Er ging iets mis aan onze kant.
      </h1>
      <p className="mt-3 max-w-xl text-brand-ink-soft">
        We zijn op de hoogte gebracht. Probeer de pagina opnieuw te laden, of
        keer terug naar home.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button onClick={reset}>Probeer opnieuw</Button>
        <Button asChild variant="outline">
          <Link href="/">Naar home</Link>
        </Button>
      </div>
    </div>
  );
}
