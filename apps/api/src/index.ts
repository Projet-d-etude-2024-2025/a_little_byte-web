import prismaDb from "@alittlebyte/api/lib/prisma"
import { PublicContextVariables } from "@alittlebyte/api/utils/types"
import { serve } from "@hono/node-server"
import { Hono } from "hono"

const app = new Hono<{ Variables: PublicContextVariables }>()

app.use(async (ctx, next) => {
	ctx.set("prisma", prismaDb)

	await next()
})

app.get("/", (c) => {
	return c.text("Hello Hono!")
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
	fetch: app.fetch,
	port,
})
