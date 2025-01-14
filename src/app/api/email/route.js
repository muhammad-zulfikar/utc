import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, reason, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const reasonMap = {
      services: 'Pertanyaan tentang Layanan',
      general: 'Pertanyaan Umum',
      consultation: 'Konsultasi Pemesanan',
    };

    const reasonText = reasonMap[reason] || 'No reason provided';

    const mailOptions = {
      from: `<${name}>`,
      to: process.env.SMTP_TO,
      subject: `United Training Form Submission`,
      text: `
        You have received a new form submission:

        Name: ${name}
        Email: ${email}
        Reason: ${reasonText}
        Message: ${message || 'No message provided'}
      `,
      html: `
      <!DOCTYPE html>
      <html lang="id">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              background-color: #f5f5f5;
              margin: 0;
              padding: 20px;
              color: #333333;
            }
            
            .email-container {
              max-width: 600px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
            }
            
            .header {
              background: linear-gradient(135deg, #ffc000 0%, #ffdb4d 100%);
              color: #000000;
              text-align: center;
              padding: 40px 20px;
              position: relative;
            }
            
            .header::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 40px;
              background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.2) 100%);
            }
            
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 700;
              letter-spacing: -0.5px;
            }
            
            .content {
              padding: 32px 24px;
            }
            
            .content p {
              margin: 0 0 16px;
              font-size: 16px;
            }
            
            .highlight {
              background: #fff9e6;
              border-left: 4px solid #ffc000;
              padding: 20px;
              margin: 24px 0;
              border-radius: 0 8px 8px 0;
            }
            
            .highlight p {
              margin: 12px 0;
            }
            
            .highlight strong {
              color: #000000;
              font-weight: 600;
              display: inline-block;
              min-width: 120px;
            }
            
            .action-button {
              display: inline-block;
              background: #ffc000;
              color: #000000;
              padding: 12px 24px;
              border-radius: 8px;
              text-decoration: none;
              font-weight: 500;
              margin: 16px 0;
              transition: all 0.3s ease;
            }
            
            .action-button:hover {
              background: #ffcd2e;
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(255, 192, 0, 0.3);
            }
            
            .divider {
              height: 1px;
              background: #e5e5e5;
              margin: 24px 0;
            }
            
            .footer {
              background: #fff9e6;
              text-align: center;
              padding: 24px;
              font-size: 14px;
              color: #666666;
            }
            
            .footer a {
              color: #ffc000;
              text-decoration: none;
              font-weight: 500;
            }
            
            .tag {
              display: inline-block;
              background: rgba(255, 192, 0, 0.2);
              color: #000000;
              padding: 4px 12px;
              border-radius: 16px;
              font-size: 14px;
              font-weight: 500;
              margin-top: 8px;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h1>United Training Consulting</h1>
              <div class="tag">Form Submission</div>
            </div>
            <div class="content">
              <p>Anda telah menerima pesan baru dari form di situs United Training Consulting. Berikut adalah detail pesannya:</p>
              
              <div class="highlight">
                <p><strong>Nama:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Alasan Kontak:</strong> ${reasonText}</p>
                <p><strong>Pesan:</strong> ${message || 'Tidak ada pesan yang diberikan.'}</p>
              </div>
              
              <p>Harap tindak lanjuti permintaan ini sesegera mungkin untuk memberikan pelayanan terbaik kepada pengirim.</p>
              
              <a href="mailto:${email}" class="action-button">Balas Pesan</a>
              
              <div class="divider"></div>
            </div>
            <div class="footer">
              <p>Email ini dikirim secara otomatis oleh sistem United Training Consulting.</p>
            </div>
          </div>
        </body>
      </html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to send email' }),
      { status: 500 }
    );
  }
}