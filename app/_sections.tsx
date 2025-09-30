// app/_sections.tsx
export default function Section({ title }: { title: string }) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold">{title}</h1>
        <p className="mt-4 text-muted-foreground">Contenido en preparación.</p>
      </main>
    );
  }