// app/contact/page.tsx
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Kontakt',
  description: 'Nehmen Sie Kontakt auf, um ein Fotoshooting zu buchen oder ein individuelles Angebot zu erhalten.',
  openGraph: {
    title: 'Kontakt | Portfolio Fotograf',
    description: 'Jetzt Anfrage senden für Ihr persönliches Fotoshooting.',
    type: 'website',
    url: 'https://www.meine-domain.de/contact',
  }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6">Kontakt</h1>
        <p className="mb-6 text-gray-600">
          Schreib uns eine Nachricht. Wir melden uns schnellstmöglich zurück.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
