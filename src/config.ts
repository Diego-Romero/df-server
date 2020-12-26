const dotenv = require('dotenv')

const result = dotenv.config();

const { parsed: config } = result;

export default config