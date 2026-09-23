const otpTemplate = (otp) => {
  return `<!DOCTYPE html>
  study
  <html>
  <head>
    <meta charset="UTF-8">
    <title>OTP Verification Email</title>
  </head>
  <body style="background-color:#ffffff;font-family:Arial,sans-serif;font-size:16px;line-height:1.5;color:#333333;margin:0;padding:0;">
    <div style="max-width:600px;margin:0 auto;padding:20px;text-align:center;">
      
      <a href="https://CleverPathAi-edtech-project.vercel.app">
        <img src="https://i.ibb.co/7Xyj3PC/logo.png" alt="CleverPathAi Logo" 
             style="max-width:200px;margin-bottom:20px;">
      </a>
      
      <div style="font-size:20px;font-weight:bold;margin-bottom:20px;color:#000000;">
        OTP Verification Email
      </div>
      
      <div style="font-size:16px;margin-bottom:20px;color:#333333;">
        <p>Dear User,</p>
        <p>
          Thank you for registering with <b>CleverPath Ai</b>.<br>
          To complete your registration, please use the following OTP (One-Time Password) to verify your account:
        </p>
        <h2 style="background-color:#FFD60A;display:inline-block;padding:10px 20px;border-radius:8px;color:#000000;font-weight:bold;margin:20px 0;">
          ${otp}
        </h2>
        <p>
          This OTP is valid for <b>5 minutes</b>. If you did not request this verification, please disregard this email.
        </p>
        <p>
          Once your account is verified, you will have access to our platform and its features.
        </p>
      </div>

      <div style="font-size:14px;color:#777777;margin-top:30px;">
        If you have any questions or need assistance, please reach out to us at 
        <a href="mailto:info@graphicnotion.com" style="color:#007BFF;text-decoration:none;">info@CleverPathAi.com</a>.
        <br>We are here to help!
      </div>

    </div>
  </body>
  </html>`;
};

module.exports = otpTemplate;
