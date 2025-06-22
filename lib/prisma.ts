import { PrismaClient } from '@prisma/client';

// Déclaration globale pour le singleton
declare global {
  var prismaClient: PrismaClient | undefined;
}

// Initialisation du client Prisma en fonction de l'environnement
let client: PrismaClient;

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
