"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";

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
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-6xl font-bold text-mute">Oei</p>
      <h1 className="mt-4">Er ging iets mis aan onze kant.</h1>
      <p className="mt-3 max-w-xl text-slate">
        Probeer de pagina opnieuw te laden, of keer terug naar home.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button onClick={reset} variant="ink">Probeer opnieuw</Button>
        <Button asChild variant="outline">
          <Link href="/">Naar home</Link>
        </Button>
      </div>
    </Container>
  );
}
