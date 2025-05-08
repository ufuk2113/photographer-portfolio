import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Portfolio – Fotograf',
  description: 'Portfolio eines freiberuflichen Fotografen',
  keywords: ['Fotograf', 'Portfolio', 'Freelancer'],
};

export default function HomePage() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-4">Willkommen in meinem Portfolio</h1>
      <p className="mb-6">
        Ich bin freiberuflicher Fotograf und zeige hier meine besten Arbeiten.
      </p>
      <Link href="/gallery">
      <Button>Zur Galerie</Button>
      </Link>
    </section>
  );
}
