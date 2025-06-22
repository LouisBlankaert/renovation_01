import { PrismaClient } from '@prisma/client';

// Déclaration globale pour le singleton
declare global {
  var prismaClient: any;
}

// Fonction pour créer un client Prisma
// Essaie d'utiliser Accelerate si disponible, sinon utilise le client standard
function getPrismaClient(): PrismaClient {
  try {
    // Import dynamique pour éviter les erreurs si le module n'est pas disponible
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { withAccelerate } = require('@prisma/extension-accelerate');
    return new PrismaClient().$extends(withAccelerate()) as unknown as PrismaClient;
  } catch (error) {
    console.log('Prisma Accelerate non disponible, utilisation du client standard');
    return new PrismaClient();
  }
}

// Initialisation du client Prisma en fonction de l'environnement
let client: PrismaClient;

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
