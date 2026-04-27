import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = "contato@hoteldaifa.com.br";

function buildSubjectAndText(
  name: string,
  phone: string,
  email: string,
  message: string
) {
  const isFromLP =
    typeof message === "string" && message.includes("[LP Venda Hotel Daifa]");
  const subject = isFromLP
    ? `[LP Venda] Contato de ${name}`
    : `Novo contato do website, mensagem de ${name}`;
  const text = `Nome: ${name}\nTelefone: ${phone}\nE-mail: ${email}\nMensagem: ${message}`;
  return { subject, text };
}

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, message } = await req.json();
    const { subject, text } = buildSubjectAndText(name, phone, email, message);

    const isDev = process.env.NODE_ENV === "development";
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD;

    // Produção: Gmail (EMAIL_USER + EMAIL_PASS no Vercel)
    if (!isDev && emailUser && emailPass) {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: { user: emailUser, pass: emailPass },
      });
      await transporter.sendMail({
        from: emailUser,
        to: TO_EMAIL,
        subject,
        text,
      });
      return NextResponse.json(
        { message: "Email enviado com sucesso" },
        { status: 200 }
      );
    }

    // Desenvolvimento local: Ethereal (caixa de teste, sem cadastro)
    if (isDev) {
      const account = await nodemailer.createTestAccount();
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: { user: account.user, pass: account.pass },
      });
      const info = await transporter.sendMail({
        from: `"Hotel Daifa (local)" <${account.user}>`,
        to: TO_EMAIL,
        subject,
        text,
      });
      const previewUrl = nodemailer.getTestMessageUrl(info);
      if (previewUrl) {
        console.log(
          "\n[Ethereal] Email de teste enviado. Visualize em:",
          previewUrl,
          "\n"
        );
      }
      return NextResponse.json(
        {
          message: "Email de teste enviado (ambiente local).",
          previewUrl: previewUrl ?? undefined,
        },
        { status: 200 }
      );
    }

    // Produção sem credenciais
    console.error("sendEmail: EMAIL_USER e EMAIL_PASS não configurados");
    return NextResponse.json(
      {
        message:
          "Serviço de e-mail não configurado. Configure EMAIL_USER e EMAIL_PASS no Vercel.",
      },
      { status: 503 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erro ao enviar email" },
      { status: 500 }
    );
  }
}
