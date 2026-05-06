import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-7xl text-brand-accent">404</p>
      <h1 className="mt-4 font-display text-brand-ink">
        Deze pagina vonden we niet.
      </h1>
      <p className="mt-3 max-w-xl text-brand-ink-soft">
        De link is verouderd, of we hebben de pagina verplaatst. Hieronder
        enkele snelle wegen terug.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <Link href="/">Naar home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/diensten">Bekijk diensten</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/contact">Contacteer ons</Link>
        </Button>
      </div>
    </div>
  );
}
