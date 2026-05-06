export default function Loading() {
  return (
    <div className="container-page flex min-h-[40vh] items-center justify-center py-20">
      <div
        role="status"
        aria-label="Laden"
        className="size-10 animate-spin rounded-full border-4 border-brand-line border-t-brand-primary"
      />
    </div>
  );
}
