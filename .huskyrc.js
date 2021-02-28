module.exports = {
	hooks: {
		'pre-commit': 'prettier src/ --write && eslint src/',
	},
}
