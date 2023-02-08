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
  await clientPage.createNewClient('false');
});

test('Verify a preretirement goal can be created', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.openPlanningMenuAndSelectGoal();
  await dashboardPage.addPreRetirementGoal();
  await dashboardPage.goalOption.click();
  await expect(dashboardPage.goalName).toHaveText(dashboardPage.data.preRetirementText);
  await expect(dashboardPage.goalAmount)
    .toContainText(dashboardPage.data.formattedAmount);
});

test('Verify a preretirement goal and income can be added', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);
  const { data } = dashboardPage;
  await dashboardPage.openPlanningMenuAndSelectGoal();
  await dashboardPage.addPreRetirementGoal();
  await dashboardPage.openPlanningMenuAndSelectIncome();
  await dashboardPage.addNewEmployment();
  await dashboardPage.accordionMenu.waitFor({ state: 'visible' });
  await dashboardPage.incomeOption.click();
  await expect(dashboardPage.incomeCompanyName).toHaveText(data.empCompanyName);
  await expect(dashboardPage.incomeEmpType)
    .toContainText(data.sourceMap[data.empSourceType]);
  await expect(dashboardPage.incomeValue).toContainText(data.formattedIncome);
});

test('Verify a preretirement goal, income, and insurance can be added', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);
  const { data } = dashboardPage;
  await test.step('attempt to add a preretirement goal', async () => {
    await dashboardPage.openPlanningMenuAndSelectGoal();
    await dashboardPage.addPreRetirementGoal();
    await dashboardPage.goalOption.click();
    await expect(dashboardPage.goalName).toHaveText(dashboardPage.data.preRetirementText);
    await expect(dashboardPage.goalAmount)
      .toContainText(dashboardPage.data.formattedAmount);
  });

  await test.step('attempt to add income/employment', async () => {
    await dashboardPage.openPlanningMenuAndSelectIncome();
    await dashboardPage.addNewEmployment();
    await dashboardPage.accordionMenu.waitFor({ state: 'visible' });
    await dashboardPage.incomeOption.click();
    await expect(dashboardPage.incomeCompanyName).toContainText(data.empCompanyName);
    await expect(dashboardPage.incomeEmpType)
      .toContainText(data.sourceMap[data.empSourceType]);
    await expect(dashboardPage.incomeValue).toContainText(data.formattedIncome);
  });
  await test.step('attempt to add insurance', async () => {
    await dashboardPage.openPlanningMenuAndSelectInsurance();
    await dashboardPage.addNewInsurance();
    await dashboardPage.insuranceOption.click();
    await expect(dashboardPage.insuranceAccordianName).toHaveText(data.policyName);
    await expect(dashboardPage.insuranceAccordianType).toHaveText(data.policyType);
  });
});
