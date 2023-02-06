const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../src/pages/login');
const { ClientPage } = require('../src/pages/clients');
const { DashboardPage } = require('../src/pages/dashboard');


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
    const clientPage = new ClientPage(page);
    await clientPage.openNewClientModal();
    await clientPage.createNewClient('false')
  });
  

test('Verify a preretirement goal can be created', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.openPlanningMenuAndSelectGoal();
  await dashboardPage.addPreRetirementGoal();
});

