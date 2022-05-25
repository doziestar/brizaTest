module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	roots: ['<rootDir>/src'],
	// clearMocks: true,
	verbose: true,
	forceExit: true,
	// testMatch: ['src/**/*.test.ts'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	// moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src' }),
	moduleDirectories: ['node_modules', '<rootDir>/src'],
};
