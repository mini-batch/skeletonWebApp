const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../../app");
const api = supertest(app);


beforeAll(async () => {
    await mongoose.connect(process.env["TEST_MONGO_URI"]);
});

afterAll(async () => {
    await mongoose.disconnect();
});

global.api = api;