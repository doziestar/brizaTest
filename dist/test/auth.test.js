"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const supertest_1 = tslib_1.__importDefault(require("supertest"));
const app_1 = tslib_1.__importDefault(require("../app"));
const auth_route_1 = tslib_1.__importDefault(require("../routes/auth.route"));
describe('User Authentication Testing', () => {
    describe('[POST] /api/v1/auth/signup', () => {
        const app = new app_1.default([new auth_route_1.default()]).getServer();
        it('response statusCode 201', async () => {
            const response = await (0, supertest_1.default)(app)
                .post('/api/v1/auth/signup')
                .send({
                firstName: 'Chidozie',
                lastName: 'C. Okafor',
                email: 'dozie@gmail.com',
                password: 'password',
            })
                .expect(201);
            expect(response.body.message).toBe('User created successfully');
            expect(response.body.token).toBeTruthy();
        });
    });
    describe('[POST] /api/v1/auth/login', () => {
        const app = new app_1.default([new auth_route_1.default()]).getServer();
        it('response statusCode 200', async () => {
            const response = await (0, supertest_1.default)(app)
                .post('/api/v1/auth/login')
                .send({
                email: 'dozie@gmail.com',
                password: 'password',
            })
                .expect(200);
            expect(response.body.message).toBe('User logged in successfully');
            expect(response.body.token).toBeTruthy();
        });
    });
});
