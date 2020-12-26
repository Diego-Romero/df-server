const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) throw result.error;
const { parsed: config } = result;

export default config