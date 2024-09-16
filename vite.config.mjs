import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default {
	base: '',
	test: {
		environment: 'jsdom'
	},
	plugins: [react(), tsconfigPaths()]
};
