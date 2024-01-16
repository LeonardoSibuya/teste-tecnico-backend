import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify'

import { CreateBimestreController } from './controllers/CreateBimestreController'
import { CreateSubjectController } from './controllers/CreateSubjectController'
import { ListBimestreController } from './controllers/ListBimestreController'
import { UpdateRatingController } from './controllers/UpdateRatingController'
import { DeleteSubjectController } from './controllers/DeleteSubjectController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/bimestres", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListBimestreController().handle(request, reply)
    })

    fastify.post("/primeirobimestre", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateBimestreController().handle(request, reply)
    })

    fastify.patch("/primeirobimestre", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateSubjectController().handle(request, reply)
    })

    fastify.post("/segundobimestre", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateBimestreController().handle(request, reply)
    })

    fastify.post("/terceirobimestre", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateBimestreController().handle(request, reply)
    })

    fastify.post("/quartobimestre", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateBimestreController().handle(request, reply)
    })

    fastify.put("/atualizarnota", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateRatingController().handle(request, reply)
    })

    fastify.delete("/materias", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteSubjectController().handle(request, reply)
    })
}