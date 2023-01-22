import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRouters } from './routers'

const app = Fastify()

app.register(cors)
app.register(appRouters)

app.listen({
	port: 3333
}).then(() => {
	console.log('HTTP Server is running!')
})