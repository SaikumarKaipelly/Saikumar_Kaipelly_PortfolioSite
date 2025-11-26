export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  const send = await fetch("https://formsubmit.co/ajax/saikumarkaipelly24@gmail.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: "Portfolio Contact Request",
      _captcha: "false"
    })
  });

  if (send.ok) {
    return res.status(200).json({ sent: true });
  } else {
    return res.status(500).json({ sent: false });
  }
}
