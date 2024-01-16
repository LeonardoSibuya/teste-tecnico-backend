import prismaClient from "../prisma";

class ListBimestreService {
    async execute() {

        const bimestres = await prismaClient.bimestre.findMany({
            include: {
                materias: true
            }
        })

        return bimestres
    }
}

export { ListBimestreService }