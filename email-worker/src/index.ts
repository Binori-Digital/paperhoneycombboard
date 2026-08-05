interface Env {
  EMAIL: {
    send(msg: {
      to: string | string[];
      from: { email: string; name?: string };
      replyTo?: string;
      subject: string;
      text: string;
      html?: string;
    }): Promise<{ messageId: string }>;
  };
}

const DESTINATION = 'sales@quinocycle.com';
const SENDER = { email: 'enquiry@paperhoneycombboard.com', name: 'phb Website Enquiry' };

// Strip CR/LF so user input can never inject email headers
const clean = (v: unknown, max = 200): string =>
  String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);

const isEmail = (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== 'POST') {
      return Response.json({ ok: false, error: 'method_not_allowed' }, { status: 405 });
    }

    let data: Record<string, unknown>;
    try {
      data = await request.json();
    } catch {
      return Response.json({ ok: false, error: 'invalid_json' }, { status: 400 });
    }

    // Honeypot tripped — pretend success, send nothing
    if (data.botField) return Response.json({ ok: true });

    const name = clean(data.name);
    const company = clean(data.company);
    const email = clean(data.email);
    const inquiry = clean(data.inquiry, 60);
    const message = String(data.message ?? '').trim().slice(0, 5000);

    if (!name || !isEmail(email)) {
      return Response.json({ ok: false, error: 'validation' }, { status: 400 });
    }

    const text = [
      'New enquiry from paperhoneycombboard.com',
      '',
      `Name: ${name}`,
      `Company: ${company || '-'}`,
      `Email: ${email}`,
      `Inquiry type: ${inquiry || '-'}`,
      '',
      'Message:',
      message || '(no message)',
    ].join('\n');

    try {
      await env.EMAIL.send({
        to: DESTINATION,
        from: SENDER,
        replyTo: email,
        subject: `Website enquiry — ${name}${company ? ` (${company})` : ''}`,
        text,
      });
      return Response.json({ ok: true });
    } catch (err: any) {
      console.error(`Email send failed: ${err?.code} ${err?.message}`);
      // 200 with ok:false — Cloudflare replaces 5xx bodies with its own error
      // page, which would hide the error detail from the frontend
      return Response.json({ ok: false, error: err?.code ?? 'send_failed' });
    }
  },
};
