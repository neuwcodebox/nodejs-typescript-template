import { env } from '@/env';
import { logger } from '@/logger';

logger.info(`Starting up in ${env.NODE_ENV} mode`);

const onCloseSignal = () => {
  logger.info('sigint received, shutting down');
  // Do some cleanup here
  setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
};

process.on('SIGINT', onCloseSignal);
process.on('SIGTERM', onCloseSignal);
