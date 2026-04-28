interface JobDescriptionProps {
  text: string;
}

export function JobDescription({ text }: JobDescriptionProps) {
  const lines = text.split("\n");

  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} className="h-3" />;

        // Section headers: short lines, starts with uppercase, no trailing punctuation
        const isHeader =
          trimmed.length < 80 &&
          !trimmed.endsWith(".") &&
          !trimmed.endsWith(",") &&
          !trimmed.startsWith("-") &&
          !trimmed.startsWith("•") &&
          /^[A-Z$]/.test(trimmed);

        if (isHeader) {
          return (
            <h3 key={i} className="text-lg font-semibold mt-6 mb-2 text-foreground">
              {trimmed}
            </h3>
          );
        }

        return (
          <p key={i} className="text-muted-foreground leading-relaxed">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}
