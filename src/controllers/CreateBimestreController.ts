import { FastifyRequest, FastifyReply } from "fastify";

import { CreateBimestreService } from '../services/CreateBimestreService'

class CreateBimestreController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const {
            name, materias } = request.body as {
                name: string, materias: []
            }

        const bimestreService = new CreateBimestreService()

        const bimestreSend = await bimestreService.execute({
            bimestre: {
                name,
                materias: materias.map((materia: any) => ({
                    name: materia.name,
                    rating: materia.rating,
                })),
            },
        });

        reply.send(bimestreSend)
    }
}

export { CreateBimestreController }