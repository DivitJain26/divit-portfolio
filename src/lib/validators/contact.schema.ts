import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name too short'),
  email: z.string().email('Invalid email'),
  message: z.string().min(2, 'Message too short'),
});

export type ContactInput = z.infer<typeof contactSchema>;
