export function buildServiceInquiryMailto(serviceName: string): string {
  const to = "kimoel_leotagle@yahoo.com";
  const subject = `Service Inquiry - ${serviceName}`;
  const body = `Hello KIMOEL Trading and Construction,

I would like to inquire about your ${serviceName} service.

Here are my details:

Name:
Company / Organization:
Position:
Contact Number:
Email Address:

My inquiry / requirements:


I look forward to hearing from you.

Thank you.`;

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildGenericInquiryMailto(): string {
  const to = "kimoel_leotagle@yahoo.com";
  const subject = "Inquiry from Website";
  const body = `Hello KIMOEL Trading and Construction,

I'd like to inquire about your services.

Here are my details:

Name:
Company / Organization:
Position:
Contact Number:
Email Address:

My inquiry / requirements:


I look forward to hearing from you.

Thank you.`;

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
