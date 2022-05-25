process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';
import 'dotenv/config';
import App from './app';
// import AuthRoute from '@/routes/auth.route';
import IndexRoute from './routes/index.route';
// import { PolicyRoutes } from '@/routes/policy.route';
// import UsersRoute from '@/routes/users.route';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App([
	new IndexRoute(),
	// new AuthRoute(),
	// new PolicyRoutes(),
	// new UsersRoute(),
]);
console.log('Server is running on port: ', process.env.PORT);
app.listen();

/**
Todo:
- Write index test case
- push to heroku
 */
