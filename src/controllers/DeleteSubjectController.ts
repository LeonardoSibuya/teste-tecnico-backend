import { FastifyRequest, FastifyReply } from "fastify";

import { DeleteSubjectService } from "../services/DeleteSubjectService";

class DeleteSubjectController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as {id: string}

        const subjectDeleted = new DeleteSubjectService()

        const subject = await subjectDeleted.execute({ id });

        reply.send(subject)
    }
}

export { DeleteSubjectController }