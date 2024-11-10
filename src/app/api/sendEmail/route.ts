import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "contato@hoteldaifa.com.br",
      subject: `Novo contato do website, mensagem de ${name}`,
      text: `Nome: ${name}\nTelefone: ${phone}\nE-mail: ${email}\nMensagem: ${message}`,
    })

    return NextResponse.json(
      { message: "Email enviado com sucesso" },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Erro ao enviar email" },
      { status: 500 }
    )
  }
}
