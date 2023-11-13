require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

const TEST_CONFIG = {
    "Memory": true,
    "IP": "127.0.0.1",
    "Port": PORT,
    "Database": "testdb"
};

module.exports = {
    MONGODB_URI,
    PORT,
    TEST_CONFIG
};