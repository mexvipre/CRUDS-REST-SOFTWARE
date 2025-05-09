import express from 'express'
import softwaresRoutes from './routes/softwares.routes.js'

const app = express()

app.use(express.json())
app.use('/api/',softwaresRoutes);

export default app