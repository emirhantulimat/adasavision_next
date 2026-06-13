import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // Frontend'den gelen istek gövdesini (body) çözüyoruz
    const { name, email, message } = await request.json();

    // Gelen verilerin boş olmadığını kontrol edelim (Temel Güvenlik)
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Lütfen tüm alanları doldurun." },
        { status: 400 },
      );
    }

    // 1. SMTP Taşımayı (Transporter) Yapılandırın (.env.local'den okur)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "465"),
      secure: false, // 465 portu (SSL) için true. Eğer ileride 587 (TLS) kullanırsanız false yapın.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. E-posta İçeriğini Tasarlayın
    const mailOptions = {
      from: process.env.EMAIL_USER, // Gönderen: info mail adresiniz
      to: process.env.EMAIL_USER, // Alıcı: Formun düşmesini istediğiniz yer (Yine info e-postanız)
      replyTo: email, // Yanıtla (Reply) dendiğinde formu dolduran kişiye gitmesi için
      subject: `İletişim Formu: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #152D49; background-color: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #67BBBD; border-bottom: 1px solid #d9e2e8; padding-bottom: 10px;">Yeni İletişim Formu Mesajı</h2>
          <p style="margin-top: 15px;"><strong>Ad Soyad:</strong> ${name}</p>
          <p><strong>E-posta:</strong> <a href="mailto:${email}" style="color: #67BBBD;">${email}</a></p>
          <div style="margin-top: 20px; padding: 15px; background-color: #ffffff; border-left: 4px solid #67BBBD; border-radius: 4px;">
            <p style="margin-top: 0; font-weight: bold;">Mesaj:</p>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
    };

    // 3. Maili Gönderin
    await transporter.sendMail(mailOptions);

    // Başarılı yanıtı dönüyoruz
    return NextResponse.json(
      { success: true, message: "E-posta başarıyla gönderildi." },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Nodemailer Hatası:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "E-posta gönderilirken bir hata oluştu.",
      },
      { status: 500 },
    );
  }
}
