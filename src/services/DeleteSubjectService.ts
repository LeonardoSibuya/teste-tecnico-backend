import prismaClient from "../prisma";

interface DeleteSubjectProps {
    id: string
}

class DeleteSubjectService {
    async execute({ id }: DeleteSubjectProps) {

        if (!id) {
            throw new Error("Solicitação inválida")
        }

        const findSubject = await prismaClient.materia.findFirst({
            where: {
                id: id
            }
        })

        if (!findSubject) {
            throw new Error("Solicitação inválida")
        }

        await prismaClient.materia.delete({
            where: {
                id: findSubject.id
            }
        })

        return { message: "Deletado com sucesso!" }
    }
}

export { DeleteSubjectService }