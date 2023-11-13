const memoryServer = require("mongodb-memory-server").MongoMemoryServer;
const mongoose = require("mongoose");
const testConfig = require("../../utils/config").TEST_CONFIG;

const globalSetup = async () => {
    if (testConfig.Memory) {
        const instance = await memoryServer.create();
        const uri = instance.getUri();
        global.__MONGOINSTANCE = instance;
        process.env.TEST_MONGO_URI = uri.slice(0, uri.lastIndexOf("/"));
    } else {
        process.env.TEST_MONGO_URI = `mongodb://${testConfig.IP}:${testConfig.Port}`;
    }

    await mongoose.connect(`${process.env.TEST_MONGO_URI}/${testConfig.Database}`);
    await mongoose.connection.db.dropDatabase();
    await mongoose.disconnect();
};

module.exports = globalSetup;