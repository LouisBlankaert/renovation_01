// Importation du client Prisma pour la version 6.x
import { PrismaClient } from '@prisma/client';

// Déclaration pour le singleton global
declare global {
  var prisma: PrismaClient | undefined;
}

// Initialisation du client Prisma
const prisma = global.prisma || new PrismaClient();

// Sauvegarde de l'instance en développement pour éviter les connexions multiples
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
