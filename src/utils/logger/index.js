import { logger } from 'react-native-logs';
import { consoleSync } from 'react-native-logs/dist/transports/consoleSync';

const defaultConfig = {
  severity: 'debug',
  transport: consoleSync,
  transportOptions: null,
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
};

// eslint-disable-next-line import/prefer-default-export
export const log = logger.createLogger(defaultConfig);
