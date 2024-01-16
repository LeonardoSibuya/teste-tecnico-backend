import { FastifyRequest, FastifyReply } from "fastify";

import { CreateSubjectService } from "../services/CreateSubjectService";

class CreateSubjectController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, rating, bimestreId } = request.body as { name: string, rating: number, bimestreId: string };

        const createSubjectService = new CreateSubjectService();

        const result = await createSubjectService.execute({ name, rating, bimestreId });

        reply.send(result);
    }
}

export { CreateSubjectController };