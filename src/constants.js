export const DEV = process.env.NODE_ENV !== 'production';

export const Cache = {
  KEY: DEV ? 'AGENDA_AUDORA_DEV' : 'AGENDA_AUDORA_PROD',
};
