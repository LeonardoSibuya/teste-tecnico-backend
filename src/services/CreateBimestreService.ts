import prismaClient from "../prisma";

interface Materia {
    name: string;
    rating: number;
}

interface Bimestre {
    name: string;
    materias: Materia[];
}

interface CreateBimestreProps {
    bimestre: Bimestre;
}

class CreateBimestreService {
    async execute({ bimestre }: CreateBimestreProps) {
        try {

            const createdBimestre = await prismaClient.bimestre.create({
                data: {
                    name: bimestre.name,
                    materias: {
                        create: bimestre.materias.map((materia) => ({
                            name: materia.name,
                            ratings: materia.rating,
                        })),
                    },
                },
                include: {
                    materias: true,
                },
            });

            return createdBimestre;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

export { CreateBimestreService }