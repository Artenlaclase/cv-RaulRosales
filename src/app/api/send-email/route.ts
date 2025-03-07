import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Caso 1: Si solo se envía el email, es una solicitud de descarga del CV.
    if (data.email && !data.name && !data.message) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
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
        text: `Un usuario ingresó el correo: ${data.email} para descargar el CV.`,
      });

      return NextResponse.json({ message: "Correo enviado con éxito (CV)" }, { status: 200 });
    }

    // Caso 2: Si se envían name, email y message, es el formulario de contacto.
    if (data.name && data.email && data.message) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
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
        from: data.email,
        to: "raulrosales.dev@gmail.com",
        subject: "Nuevo mensaje de contacto",
        text: `Nombre: ${data.name}\nEmail: ${data.email}\nMensaje: ${data.message}`,
      });

      return NextResponse.json({ message: "Correo enviado con éxito (Contacto)" }, { status: 200 });
    }

    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json({ error: "Error al enviar el correo" }, { status: 500 });
  }
}
