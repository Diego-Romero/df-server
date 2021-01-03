interface Config {
  port: string | undefined,
  env: string | undefined,
  sessionSecret: string | undefined
}

const config: Config = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  sessionSecret: process.env.SESSION_SECRET,
};

for (const value of Object.values(config)) {
  if (value === undefined) throw new Error('ERROR: missing to add fields to .env');
}

console.log('CONFIG:', config);

export default config;