export enum EnvVariablesEnum {
    PORT = 'PORT',
    DB_NAME = 'DB_NAME',
    DB_PORT = 'DB_PORT',
    DB_PASS = 'DB_PASS',
    DB_HOST = 'DB_HOST',
    DB_USER = 'DB_USER',
    JWT_SECRET = 'JWT_SECRET'
}

export type EnvConfigType = {
  [key: string]: string;
};
