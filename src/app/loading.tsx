import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <Container className="flex min-h-[40vh] items-center justify-center py-20">
      <div
        role="status"
        aria-label="Laden"
        className="size-10 animate-spin rounded-full border-4 border-line border-t-ink"
      />
    </Container>
  );
}
