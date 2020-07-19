const PROJECT_NAME = 'Builder';
const distDir = `./dist/${PROJECT_NAME}`;
const destFile = './projects/Viewer/src/assets/element.tgz';
const fs = require('fs-extra');
const tar = require('tar');
const Terser = require("terser");


(async function build() {
	const assetsDir = `${distDir}/assets`;
	const resDir = `${distDir}/res`;
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
		// await fs.remove(destDir);
		await fs.ensureFile(destFile);
		const result = Terser.minify(files);
		if (result.error) {
			console.log(result.error);
		} else {
			await fs.outputFile(`${distDir}/${minifiedFile}`, result.code, "utf8");
			tar.c(
				{
					cwd  : distDir,
					gzip: true
				},
				[
					'assets',
					'res',
					minifiedFile
				]
			).pipe(fs.createWriteStream(destFile))
		}
	} catch (e) {
		console.error(e.message);
	}
})();
