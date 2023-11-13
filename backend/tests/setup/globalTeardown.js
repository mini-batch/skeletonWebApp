const testConfig = require("../../utils/config").TEST_CONFIG;

const globalTeardown = async () => {
    if (testConfig.Memory) {
        const instance = global.__MONGOINSTANCE;
        await instance.stop();
    }
};

module.exports = globalTeardown;
