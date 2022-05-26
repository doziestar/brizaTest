import request from 'supertest';
import App from '../app';
import Productroute from '../routes/product.route';

describe('Product', () => {
	describe('GET Products', () => {
		describe('[GET] /api/v1/products', () => {
			it('response statusCode 200', async () => {
				const app = new App([new Productroute()]).getServer();
				const response = await request(app).get('/api/v1/products').expect(200);
				expect(response.body.message).toBe('Products retrieved successfully');
				expect(response.body.products).toBeTruthy();
			});

			it('response statusCode 404', async () => {
				const app = new App([new Productroute()]).getServer();
				const response = await request(app)
					.get('/api/v1/products/1')
					.expect(404);
				expect(response.body.message).toBe('Product not found');
				expect(response.body.products).toBeFalsy();
			});
		});
	});

	describe('POST Products', () => {
		describe('[POST] /api/v1/products', () => {
			it('response statusCode 201', async () => {
				const app = new App([new Productroute()]).getServer();
				const response = await request(app)
					.post('/api/v1/products')
					.send({
						name: 'test',
						price: '100',
						description: 'test',
						image: 'test',
						category: 'test',
					})
					.expect(201);
				expect(response.body.message).toBe('Product created successfully');
				expect(response.body.products).toBeTruthy();
			});

			it('response statusCode 400', async () => {
				const app = new App([new Productroute()]).getServer();
				const response = await request(app)
					.post('/api/v1/products')
					.send({
						name: 'test',
						price: '100',
						description: 'test',
						image: 'test',
						category: 'test',
					})
					.expect(400);
				expect(response.body.message).toBe('Product not created');
				expect(response.body.products).toBeFalsy();
			});
		});
	});

	describe('PUT Products', () => {
		describe('[PUT] /api/v1/products/:id', () => {
			it('response statusCode 200', async () => {
				const app = new App([new Productroute()]).getServer();
				const response = await request(app)
					.put('/api/v1/products/1')
					.send({
						name: 'test',
						price: '100',
						description: 'test',
						image: 'test',
						category: 'test',
					})
					.expect(200);
				expect(response.body.message).toBe('Product updated successfully');
				expect(response.body.products).toBeTruthy();
			});

			it('response statusCode 404', async () => {
				const app = new App([new Productroute()]).getServer();
				const response = await request(app)
					.put('/api/v1/products/1')
					.send({
						name: 'test',
						price: '100',
						description: 'test',
						image: 'test',
						category: 'test',
					})
					.expect(404);
				expect(response.body.message).toBe('Product not found');
				expect(response.body.products).toBeFalsy();
			});
		});
	});

	describe('DELETE Products', () => {
		describe('[DELETE] /api/v1/products/:id', () => {
			it('response statusCode 200', async () => {
				const app = new App([new Productroute()]).getServer();
				const response = await request(app)
					.delete('/api/v1/products/1')
					.expect(200);
				expect(response.body.message).toBe('Product deleted successfully');
				expect(response.body.products).toBeTruthy();
			});

			it('response statusCode 404', async () => {
				const app = new App([new Productroute()]).getServer();
				const response = await request(app)
					.delete('/api/v1/products/1')
					.expect(404);
				expect(response.body.message).toBe('Product not found');
				expect(response.body.products).toBeFalsy();
			});
		});
	});
});
