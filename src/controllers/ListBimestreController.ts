import { FastifyRequest, FastifyReply } from "fastify";

import { ListBimestreService } from "../services/ListBimestreService";

class ListBimestreController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const listBimestreService = new ListBimestreService()

        const bimestreGet = await listBimestreService.execute();

        reply.send(bimestreGet)
    }
}

export { ListBimestreController }