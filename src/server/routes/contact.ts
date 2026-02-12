import { Hono } from 'hono'

const contact = new Hono()

contact.post('/contact', async (c) => {
  const body = await c.req.json()
  const { name, email, subject, message } = body

  if (!name || !email || !subject || !message) {
    return c.json({ error: 'All fields are required' }, 400)
  }

  // In production, send email via Resend/Mailgun/Cloudflare Email Workers
  // For now, log to console
  console.log('Contact form submission:', { name, email, subject, message })

  return c.json({ success: true, message: 'Message sent successfully' })
})

export default contact
