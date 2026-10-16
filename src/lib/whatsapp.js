/**
 * Clinic WhatsApp & Contact Configuration
 */
export const CLINIC_CONTACT = {
  name: 'Pandit Ganesh Narayan Homeopathic Clinic',
  doctorName: 'Dr. Manish Sharma',
  phoneDisplay: '+91 9024547154',
  phoneNumber: '9024547154',
  whatsappNumber: '919024547154', // Owner WhatsApp: +91 9024547154
  email: 'clinic@ganeshnarayan.com',
  address: 'In front of Ganesh Mandir, Ward No. 20, House No. 4, Surajgarh, Distt. Jhunjhunu (Raj.) 333029',
  timings: '9:00 AM to 1:30 PM and 4:30 PM to 8:00 PM',
  tagline: 'एक बूंद होम्योपैथिक दवा आपकी जिन्दगी बदल सकती है'
};

/**
 * Format a structured WhatsApp message for appointment bookings or inquiries
 */
export function formatAppointmentWhatsAppMessage({
  formType = 'appointment',
  name = '',
  phone = '',
  email = '',
  location = '',
  date = '',
  timeSlot = '',
  message = ''
}) {
  let formattedDate = date;
  if (date) {
    try {
      const [year, month, day] = date.split('-').map(Number);
      const d = new Date(year, month - 1, day);
      if (!isNaN(d.getTime())) {
        formattedDate = d.toLocaleDateString('en-IN', {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        });
      }
    } catch {
      formattedDate = date;
    }
  }

  const lines = [
    '🌿 *NEW INQUIRY & APPOINTMENT REQUEST*',
    `🏥 *${CLINIC_CONTACT.name}*`,
    '━━━━━━━━━━━━━━━━━━━━━',
    `👤 *Patient Name:* ${name.trim()}`,
    `📞 *Phone Number:* ${phone.trim()}`,
    `📍 *Patient Location:* ${location.trim()}`,
    date ? `📅 *Date of Appointment:* ${formattedDate}` : null,
    email && email.trim() ? `✉️ *Email Address:* ${email.trim()}` : null,
    '━━━━━━━━━━━━━━━━━━━━━',
    `💬 *Message / Health Concerns:*\n${message.trim()}`,
    '━━━━━━━━━━━━━━━━━━━━━',
    '🌐 _Sent via Website "Send us a message" Form_'
  ].filter(Boolean);

  return lines.join('\n');
}

/**
 * Generate a WhatsApp chat URL using official wa.me universal link
 */
export function getWhatsAppUrl(text = '') {
  const base = `https://wa.me/${CLINIC_CONTACT.whatsappNumber}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

/**
 * Send automated background WhatsApp notification directly to the owner via CallMeBot API (if configured)
 */
export async function sendCallMeBotNotification(messageText, apiKey = '') {
  try {
    const key = apiKey || (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_CALLMEBOT_API_KEY) || (typeof localStorage !== 'undefined' && localStorage.getItem('callmebot_api_key'));
    if (!key) return false;

    const encoded = encodeURIComponent(messageText);
    const url = `https://api.callmebot.com/whatsapp.php?phone=${CLINIC_CONTACT.whatsappNumber}&text=${encoded}&apikey=${key}`;
    await fetch(url, { mode: 'no-cors' });
    return true;
  } catch (err) {
    console.error('CallMeBot error:', err);
    return false;
  }
}
