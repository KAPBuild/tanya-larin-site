import { Hono } from 'hono'
import contact from './routes/contact.ts'
import inquiry from './routes/inquiry.ts'

const app = new Hono()

app.get('/api/health', (c) => c.json({ status: 'ok' }))
app.route('/api', contact)
app.route('/api', inquiry)

export default app
