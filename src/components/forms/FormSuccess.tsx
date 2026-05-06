import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
}

export function FormSuccess({
  title,
  body,
  primaryHref = "/",
  primaryLabel = "Terug naar home",
}: Props) {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <span className="grid size-16 place-items-center rounded-full bg-brand-primary/10 text-brand-primary">
        <CheckCircle2 className="size-8" />
      </span>
      <h1 className="mt-6 max-w-2xl font-display">{title}</h1>
      <p className="mt-4 max-w-xl text-brand-ink-soft">{body}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <Link href={primaryHref}>{primaryLabel}</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/realisaties">Bekijk realisaties</Link>
        </Button>
      </div>
    </div>
  );
}
