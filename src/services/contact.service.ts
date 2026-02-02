import { ContactInput } from '@/src/lib/validators/contact.schema';
import { sendContactMail } from '@/src/lib/mail/mailer';

export async function processContact(data: ContactInput) {
  await sendContactMail(data);
}
