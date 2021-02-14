import { PrismaClient } from '@prisma/client';
import logger from '@boringcodes/utils/logger';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      prisma?: PrismaClient;
    }
  }
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (global.prisma === undefined) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

const connect = async (): Promise<void> => {
  try {
    await prisma.$connect();

    logger.info('> Postgres connected');
  } catch (err) {
    logger.error('> Postgres failed to connect');

    throw err;
  }
};

export default Object.assign(prisma, { connect });
