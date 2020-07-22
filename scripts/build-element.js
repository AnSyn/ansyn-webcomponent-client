const PROJECT_NAME = 'Builder';
const distDir = `./dist/${PROJECT_NAME}`;
const fs = require('fs-extra');
const Terser = require("terser");


(async function build() {
	console.log('building ansyn component');
	const filesNames = [
		`${distDir}/styles.js`,
		`${distDir}/polyfills.js`,
		`${distDir}/scripts.js`,
		`${distDir}/main.js`,
	];
	const minifiedFile = `custom-ansyn.min.js`;
	const files = filesNames.reduce((minifyList, file) => {
		const fileName = file.substring(file.lastIndexOf('/') + 1);
		return {...minifyList, [fileName]: fs.readFileSync(file, "utf8")}
	}, {});

	try {
		const result = Terser.minify(files);
		if (result.error) {
			console.log(result.error);
		} else {
			await fs.outputFile(`${distDir}/${minifiedFile}`, result.code, "utf8");
			for (const file of filesNames) {
				await fs.remove(file);
			}
			await fs.remove(`${distDir}/index.html`);

			console.log(`component was successfully created.\n you can move ${distDir} content to the server app`);
		}
	} catch (e) {
		console.error(e.message);
	}
})();
