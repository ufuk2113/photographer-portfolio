'use client';

import { useFormState } from 'react-dom';
import { sendMessage } from '@/app/contact/action';
import { Button } from '@/components/ui/button';

export function ContactForm() {
  const [state, formAction] = useFormState(sendMessage, null);

  return (
    <form action={formAction} className="space-y-4 max-w-md">
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          name="name"
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">E-Mail</label>
        <input
          name="email"
          type="email"
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Nachricht</label>
        <textarea
          name="message"
          className="w-full border border-gray-300 rounded px-3 py-2"
          rows={5}
          required
        />
      </div>
      <Button type="submit">Senden</Button>
      {state?.status && (
        <p className="text-sm text-green-600 mt-2">{state.status}</p>
      )}
    </form>
  );
}
