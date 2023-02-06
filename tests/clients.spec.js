const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../src/pages/login');
const { ClientPage } = require('../src/pages/clients');

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLogin();
  await loginPage.loginWithCreds(
    loginPage.data.validUsername,
    loginPage.data.validPassword,
  );
  await loginPage.page.waitForURL(loginPage.urlAfterLogin);
  await expect(loginPage.page).toHaveURL(loginPage.urlAfterLogin);
  await loginPage.closeReleaseNotesModel();
});

test('Verify a new user can be created which is retired', async ({ page }) => {
  const clientPage = new ClientPage(page);
  await clientPage.openNewClientModal();
  await clientPage.createNewClient('true');
});

test('Verify a new user can be created which is not retired', async ({ page }) => {
  const clientPage = new ClientPage(page);
  await clientPage.openNewClientModal();
  await clientPage.createNewClient('false');
});
