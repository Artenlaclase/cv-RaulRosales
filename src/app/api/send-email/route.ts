import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Correo inválido" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "raulrosales.dev@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "raulrosales.dev@gmail.com",
      to: "raulrosales.dev@gmail.com",
      subject: "Nuevo correo registrado para descargar el CV",
      text: `Un usuario ingresó el correo: ${email} para descargar el CV.`,
    });

    return NextResponse.json({ message: "Correo enviado con éxito" }, { status: 200 });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json({ error: "Error al enviar el correo" }, { status: 500 });
  }
}
