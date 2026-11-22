import baseConfig from '@cosmic-charms/infrastructure/eslint.config';
import plugins from '@cosmic-charms/infrastructure/eslint.plugins';

import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		plugins: {
			js: plugins.js,
			import: plugins.import,
			perfectionist: plugins.perfectionist,
			react: plugins.react,
			'react-hooks': plugins.reactHooks,
			unicorn: plugins.unicorn,
		},
	},
	...baseConfig,
	{
		ignores: ['_site/**', 'assets/css/main.css', 'skills-lock.json'],
	},
]);
