import prismaClient from "../prisma";

interface CreateSubjectProps {
    name: string;
    rating: number;
    bimestreId: string;
}

class CreateSubjectService {
    async execute({ name, rating, bimestreId }: CreateSubjectProps) {
        try {

            const existingSubject = await prismaClient.materia.findFirst({
                where: {
                    name: name,
                    bimestreId: bimestreId,
                },
            });

            if (existingSubject) {
                return { message: "Matéria já existe neste bimestre." };
            }

            const newSubject = await prismaClient.materia.create({
                data: {
                    name: name,
                    ratings: rating,
                    bimestreId: bimestreId,
                },
            });

            return { message: "Matéria criada com sucesso!", data: newSubject };
        } catch (err) {
            console.log(err);
            throw new Error("Erro ao criar a matéria");
        }
    }
}

export { CreateSubjectService };