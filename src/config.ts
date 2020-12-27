interface Config {
    port: string | undefined,
    env: string | undefined
    dbUser: string | undefined
    dbPassword: string | undefined
    dbName: string | undefined
}

const config: Config = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
};

console.log(config)
for (const value of Object.values(config)) {
  if (value === undefined) throw new Error('ERROR: missing to add fields to .env');
}

console.log('CONFIG:', config);

export default config;
