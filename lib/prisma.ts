// Importation standard du client Prisma avec ESM
import { PrismaClient } from '@prisma/client';

// Définition du type global pour éviter les connexions multiples
declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var prismaClient: PrismaClient | undefined;
}

// Création d'une instance unique du client
let client: PrismaClient;

// Initialisation du client Prisma en fonction de l'environnement
if (process.env.NODE_ENV === 'production') {
  // En production, créer une nouvelle instance
  client = new PrismaClient();
} else {
  // En développement, réutiliser l'instance existante si disponible
  if (!global.prismaClient) {
    global.prismaClient = new PrismaClient();
  }
  client = global.prismaClient;
}

export default client;
