import {test,expect} from '@playwright/test'


 test("TC01: Login with valid credentials", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.locator('#username').fill('student')
    await page.locator('#password').fill('Password123')
    await page.click('#submit')

    await expect(page.locator('.post-title')).toHaveText('Logged In Successfully')
    
  })

  test("TC02: Invalid username", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('#username').fill('invalidUser')
    await page.locator('#password').fill('Password123')
    await page.click('#submit')
    await expect(page.locator('#error')).toHaveText('Your username is invalid!');
    
  })
   
   test("TC03: Invalid password", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.fill('#username', 'student');
    await page.fill('#password', 'WrongPassword');
    await page.click('#submit');

    await expect(page.locator('#error')).toHaveText('Your password is invalid!');
    
  })
  test("TC04: Give space", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.fill('#username', " ");
    await page.fill('#password', " ");
    await page.click('#submit');

    await expect(page.locator('#error')).toHaveText('Your username is invalid!')

  })





/*test("Run 3 test cases in 3 tabs", async ({ context }) => {
  // Tab 1
  const tab1 = await context.newPage();
  await tab1.goto("https://practicetestautomation.com/practice-test-login/");
  await tab1.fill("#username", "invalidUser");
  await tab1.fill("#password", "Password123");
  await tab1.click("#submit");
  await expect(tab1.locator("#error")).toHaveText("Your username is invalid!");

  // Tab 2
  const tab2 = await context.newPage();
  await tab2.goto("https://practicetestautomation.com/practice-test-login/");
  await tab2.fill("#username", "student");
  await tab2.fill("#password", "WrongPassword");
  await tab2.click("#submit");
  await expect(tab2.locator("#error")).toHaveText("Your password is invalid!");

  // Tab 3
  const tab3 = await context.newPage();
  await tab3.goto("https://practicetestautomation.com/practice-test-login/");
  await tab3.fill("#username", "' OR '1'='1");
  await tab3.fill("#password", "' OR '1'='1");
  await tab3.click("#submit");
  await expect(tab3.locator("#error")).toBeVisible();

   const tab4 = await context.newPage();
 await tab4.goto("https://practicetestautomation.com/practice-test-login/")

    await tab4.locator('#username').fill('student')
    await tab4.locator('#password').fill('Password123')
    await tab4.click('#submit')

    await expect(tab4.locator('.post-title')).toHaveText('Logged In Successfully')
    //await page.close()

});*/
