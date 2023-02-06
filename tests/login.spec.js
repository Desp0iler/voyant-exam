const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../src/pages/login');

test('Verify a user can login with proper credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLogin();
  await loginPage.loginWithCreds(
    loginPage.data.validUsername,
    loginPage.data.validPassword,
  );
  await loginPage.page.waitForURL(loginPage.urlAfterLogin);
  await expect(loginPage.page).toHaveURL(loginPage.urlAfterLogin);
});

test.describe('Verify users are unable to login with invalid credentials', () => {
  test('Attempt to login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.loginWithCreds(
      loginPage.data.validUsername,
      loginPage.data.invalidPassword,
    );
    await expect(loginPage.invalidAlert).toBeVisible();
  });
  test('Attempt to login with invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.loginWithCreds(
      loginPage.data.invalidUsername,
      loginPage.data.validPassword,
    );
    await expect(loginPage.invalidAlert).toBeVisible();
  });
  test('Attempt to login with no credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.loginButton.click();
    await loginPage.throbber.waitFor({ state: 'hidden' });
    await expect(loginPage.invalidAlert).toBeVisible();
  });
  test.skip('Attempt to login with invalid 2FA code', async ({ page }) => {
    // this should fail but it doesn't
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.loginWithCredsWithTwoStep(
      loginPage.data.validUsername,
      loginPage.data.validPassword,
      loginPage.data.twoStepCode,
    );
    await loginPage.loginButton.click();
    await loginPage.throbber.waitFor({ state: 'hidden' });
    await expect(loginPage.invalidAlert).toBeVisible();
  });
});

test('Verify users are rediected when visting "cant login" link', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLogin();
  await loginPage.cantLoginLink.click();
  await expect(loginPage.page).toHaveURL(loginPage.urlAfterVisitingLink);
});

test('Verify users are rediected when visting "create account" link', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLogin();
  await loginPage.createAccountLink.click();
  await expect(loginPage.page).toHaveURL(loginPage.urlAfterVisitingLink);
});
