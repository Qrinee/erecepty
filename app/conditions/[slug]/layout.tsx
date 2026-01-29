// app/conditions/layout.tsx
export default function ConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Możesz dodać wspólny nagłówek/nawigację dla wszystkich stron conditions */}
      {children}
    </div>
  );
}