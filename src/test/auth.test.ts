import request from 'supertest';
import App from '../app';
import AuthRoute from '../routes/auth.route';

describe('User Authentication Testing', () => {
	describe('[POST] /api/v1/auth/signup', () => {
		const app = new App([new AuthRoute()]).getServer();
		it('response statusCode 201', async () => {
			const response = await request(app)
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
		const app = new App([new AuthRoute()]).getServer();
		it('response statusCode 200', async () => {
			const response = await request(app)
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
