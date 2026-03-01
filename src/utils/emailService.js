import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_1sbvdeh';
const TEMPLATE_ID = 'template_5gu58kt';
const PUBLIC_KEY = 'Uicjv5qvoN2Tz9cWy';

export const sendEmail = async (formElement) => {
  try {
    const result = await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formElement,
      PUBLIC_KEY
    );
    return { success: true, message: 'Email sent successfully!', result };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, message: 'Failed to send email. Please try again later.', error };
  }
};
