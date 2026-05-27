import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Todos los campos son obligatorios." }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "El email no tiene un formato válido." }, { status: 400 });
    }
    if (message.trim().length < 10) {
      return NextResponse.json({ error: "El mensaje debe tener al menos 10 caracteres." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from:    "Portfolio <onboarding@resend.dev>",
      to:      "josueisai2001y@gmail.com",
      replyTo: email,
      subject: `📩 Mensaje de ${name} — Portfolio`,
      html: `
        <div style="font-family:'Segoe UI',sans-serif;max-width:560px;margin:0 auto;background:#0d0d2b;color:#e2e8f0;border-radius:12px;overflow:hidden;border:1px solid #1a1a4e;">
          <div style="background:linear-gradient(135deg,#00f5ff22,#7b2fff22);padding:28px 32px 20px;border-bottom:1px solid #1a1a4e;">
            <p style="font-family:monospace;color:#00f5ff;font-size:12px;margin:0 0 6px;">&lt;portfolio /&gt;</p>
            <h1 style="margin:0;font-size:20px;color:#fff;">Nuevo mensaje desde tu portfolio</h1>
          </div>
          <div style="padding:24px 32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;color:#94a3b8;font-size:11px;font-family:monospace;width:90px;vertical-align:top;text-transform:uppercase;">Nombre</td><td style="padding:10px 0;color:#fff;font-weight:600;">${escapeHtml(name)}</td></tr>
              <tr style="border-top:1px solid #1a1a4e;"><td style="padding:10px 0;color:#94a3b8;font-size:11px;font-family:monospace;vertical-align:top;text-transform:uppercase;">Email</td><td style="padding:10px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#00f5ff;text-decoration:none;">${escapeHtml(email)}</a></td></tr>
              <tr style="border-top:1px solid #1a1a4e;"><td style="padding:10px 0;color:#94a3b8;font-size:11px;font-family:monospace;vertical-align:top;text-transform:uppercase;">Mensaje</td><td style="padding:10px 0;color:#e2e8f0;line-height:1.7;">${escapeHtml(message).replace(/\n/g, "<br>")}</td></tr>
            </table>
          </div>
          <div style="padding:14px 32px;background:#06061a;border-top:1px solid #1a1a4e;">
            <p style="margin:0;font-family:monospace;font-size:11px;color:#475569;">Responde a este email para contactar directamente con ${escapeHtml(name)}.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "No se pudo enviar el mensaje. Inténtalo de nuevo." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Error interno del servidor." }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
