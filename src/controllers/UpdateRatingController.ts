import { FastifyRequest, FastifyReply } from "fastify";

import { UpdateRatingService } from "../services/UpdateRatingService";

class UpdateRatingController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id, rating } = request.body as { id: string, rating: number };

        const updateRatingService = new UpdateRatingService();

        const result = await updateRatingService.execute({ id, rating });

        reply.send(result);
    }
}

export { UpdateRatingController };