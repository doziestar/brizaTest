process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';
import App from './app';
// import AuthRoute from '@/routes/auth.route';
import IndexRoute from './routes/index.route';
// import { PolicyRoutes } from '@/routes/policy.route';
// import UsersRoute from '@/routes/users.route';
import validateEnv from './utils/validateEnv';
import 'dotenv/config';

validateEnv();

const app = new App([
	new IndexRoute(),
	// new AuthRoute(),
	// new PolicyRoutes(),
	// new UsersRoute(),
]);

app.listen();

/**
Todo:
- Write index test case
- push to heroku
 */
