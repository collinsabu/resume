const axios = require('axios');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const data = {
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_FROM_EMAIL,  // Store email in env
            Name: process.env.MAILJET_FROM_NAME,  // Store name in env
          },
          To: [
            {
              Email: "graphics.collinsabu01@gmail.com",
              Name: "Collins Abu",
            },
          ],
          Subject: `New message from ${name}`,
          TextPart: message,
          HTMLPart: `<h3>You've got a new message from your portfolio</h3><p><b>Name: </b>${name}</p><p><b>Email: </b>${email}</p><p><b>Message: </b>${message}</p>`,
        },
      ],
    };

    try {
      const response = await axios.post('https://api.mailjet.com/v3.1/send', data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${Buffer.from(
            `${process.env.MAILJET_API_KEY}:${process.env.MAILJET_API_SECRET}`
          ).toString('base64')}`,
        },
      });

      if (response.status === 200) {
        res.status(200).json({ message: 'Email sent successfully!' });
      } else {
        res.status(response.status).json({ error: 'Failed to send email' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'There was an error sending your message. Please try again.' });
    }
  } else {
    res.status(405).json({ error: 'Only POST requests are allowed' });
  }
}
