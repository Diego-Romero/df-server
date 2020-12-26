import dotenv from 'dotenv';

const result = dotenv.config();

if (result.error) throw result.error;
const { parsed: config } = result;

export default config;