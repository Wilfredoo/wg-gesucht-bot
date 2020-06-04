const puppeteer = require("puppeteer");

const gesucht = async (link) => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.setDefaultNavigationTimeout(0);
	await page.goto(`${link}`);
	// let linkHandlers = await page.$x("(//a[@class='result-title hdrlnk'])");
	// let i;
	// for (i = 0; i < 50; i++) {
	// 	console.log("loop: ", i, "area: ", area, " category: ", category);
	// 	await linkHandlers[i].click();
	// 	await page.waitForNavigation();
	// 	const button = await page.$("button");
	// 	if (button !== null) {
	// 		await page.click("button");
	// 		await page.setDefaultNavigationTimeout(0);

	// 		await page.waitForSelector("aside");
	// 		const element = await page.$(".reply-email-address");
	// 		if (element !== null) {
	// 			const email = await page.evaluate(
	// 				element => element.textContent,
	// 				element
	// 			);
	// 			console.log("email", email);
	// 			console.log("csv", csv);
	// 			await fs.appendFile(`${csv}`, `${email}\n`);
	// 		}
	// 	}
	// 	await page.goBack();
	// 	linkHandlers = await page.$x("(//a[@class='result-title hdrlnk'])");
	// }
	await browser.close();
};

(async () => {
	// areas
	const link = "https://www.wg-gesucht.de/";
	await gesucht(link);
})();
