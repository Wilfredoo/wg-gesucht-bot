const puppeteer = require("puppeteer");

const gesucht = async (link) => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.setDefaultNavigationTimeout(0);
  await page.goto(`${link}`);

  await page.waitForSelector('a[id=desktop-logo]')

  const [login] = await page.$x("(//a[contains(@onclick, 'fireLoginOrRegisterModalRequest')])[2]");
  if (login) login.click();

	// await browser.close();
};

(async () => {
	const link = "https://www.wg-gesucht.de/";
	await gesucht(link);
})();
