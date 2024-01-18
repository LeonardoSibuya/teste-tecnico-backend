import prismaClient from "../prisma";

interface UpdateRatingProps {
    id: string;
    rating: number;
}

class UpdateRatingService {
    async execute({ id, rating }: UpdateRatingProps) {
        try {

            if (rating > 10) throw new Error('A nota deve ser de 0 a 10')

            const updatedSubject = await prismaClient.materia.update({
                where: {
                    id: id,
                },
                data: {
                    ratings: rating,
                },
            });

            return { message: "Atualizado com sucesso!", data: updatedSubject };
        } catch (err) {
            console.log(err);
            throw new Error("Erro ao atualizar a matéria");
        }
    }
}

export { UpdateRatingService };