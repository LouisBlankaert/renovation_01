import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

// Type personnalisé pour le client Prisma avec Accelerate
type PrismaClientWithAccelerate = ReturnType<typeof getPrismaClient>;

// Déclaration globale pour le singleton
declare global {
  var prismaClient: PrismaClientWithAccelerate | undefined;
}

// Fonction pour créer un client Prisma avec Accelerate
function getPrismaClient() {
  return new PrismaClient().$extends(withAccelerate());
}

// Initialisation du client Prisma en fonction de l'environnement
let client: PrismaClientWithAccelerate;

if (process.env.NODE_ENV === 'production') {
  // En production, créer une nouvelle instance
  client = getPrismaClient();
} else {
  // En développement, réutiliser l'instance existante si disponible
  if (!global.prismaClient) {
    global.prismaClient = getPrismaClient();
  }
  client = global.prismaClient;
}

export default client;
