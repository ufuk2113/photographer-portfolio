// Header.tsx
import Link from 'next/link';
export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <span className="font-bold">Fotograf Portfolio</span>
        <div className="space-x-4">
        <Link href="/" className="hover:underline">Start</Link>
        <Link href="/gallery" className="hover:underline">Galerie</Link>
        <Link href="/contact" className="hover:underline">Kontakt</Link>
        </div>
      </nav>
    </header>
  );
}

