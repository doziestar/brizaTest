"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const supertest_1 = tslib_1.__importDefault(require("supertest"));
const app_1 = tslib_1.__importDefault(require("../app"));
const index_route_1 = tslib_1.__importDefault(require("../routes/index.route"));
afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 500));
});
describe('Testing Index', () => {
    describe('[GET] /', () => {
        it('response statusCode 200', () => {
            const indexRoute = new index_route_1.default();
            const app = new app_1.default([indexRoute]);
            return (0, supertest_1.default)(app.getServer()).get(`/api/v1/`).expect(200);
        });
        it('response body contain author === Chidozie C. Okafor', () => {
            const indexRoute = new index_route_1.default();
            const app = new app_1.default([indexRoute]);
            return (0, supertest_1.default)(app.getServer())
                .get(`/api/v1/`)
                .expect(200)
                .then((res) => {
                expect(res.body.author).toBe('Chidozie C. Okafor');
            });
        });
        it('response body', () => {
            const indexRoute = new index_route_1.default();
            const app = new app_1.default([indexRoute]);
            return (0, supertest_1.default)(app.getServer()).get(`/api/v1/`).expect({
                message: 'Welcome To Briza!',
                author: 'Chidozie C. Okafor',
                version: '1.0.0',
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                email: 'chidosiky2015@gmail.com',
                github: 'github.com/doziestar',
                twitter: 'twitter.com/dozie7',
                linkedin: 'linkedin.com/in/dozie7',
            });
        });
    });
});
