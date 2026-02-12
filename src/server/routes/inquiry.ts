import { Hono } from 'hono'

const inquiry = new Hono()

inquiry.post('/inquiry', async (c) => {
  const body = await c.req.json()
  const { name, email, serviceType, message } = body

  if (!name || !email || !serviceType || !message) {
    return c.json({ error: 'Name, email, service type, and message are required' }, 400)
  }

  // In production, send email via Resend/Mailgun/Cloudflare Email Workers
  // For now, log to console
  console.log('Inquiry form submission:', { name, email, serviceType, budget: body.budget, message })

  return c.json({ success: true, message: 'Inquiry submitted successfully' })
})

export default inquiry
