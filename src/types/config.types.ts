export enum EnvVariablesEnum {
    PORT = 'PORT',
    DB_NAME = 'DB_NAME',
    DB_PORT = 'DB_PORT',
    DB_PASS = 'DB_PASS',
    DB_HOST = 'DB_HOST'
}

export type EnvConfigType = {
  [key: string]: string;
};
