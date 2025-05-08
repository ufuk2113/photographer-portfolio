'use server';

import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
});

type ActionResponse = {
  status: string;
};

export async function sendMessage(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  const raw = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };

  const result = schema.safeParse(raw);

  if (!result.success) {
    return { status: 'Ungültige Eingaben!' };
  }

  console.log('Neue Nachricht:', result.data);

  return { status: prevState?.status || 'Nachricht erfolgreich gesendet!' };
}
