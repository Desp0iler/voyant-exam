const { LoginDetails } = require('./utils/datagen');

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.data = new LoginDetails();
    this.username = page.locator('.test-login-userName');
    this.password = page.locator('#pw');
    this.twoStepAuthCheckbox = page.locator('input[type="checkbox"]');
    this.twoStepCode = page.locator('[data-test-mfacode="true"] > input');
    this.loginButton = page.locator('.login-btn');
    this.logo = page.locator('.login-logo');
    this.cantLoginLink = page.locator('a[data-test-forgotpassword]');
    this.createAccountLink = page.locator('a[data-test-createaccount]');
    this.languagePicker = page.locator('#inputLanguageSelector');
    this.invalidAlert = page.locator('.alert-danger');
    this.urlAfterRedirect = '**/advisergo/#/login';
    this.urlAfterLogin = '/advisergo/#/advisor/clients';
    this.urlAfterVisitingLink = 'voyant/main/login';
    this.currentUrl = page.url();
    this.throbber = page.locator('.login-loader');
    this.releaseNotesModal = page.locator('.modal-content');
    this.releaseNotesCloseButton = page.locator('.test-modal-close');
  }

  async navigateToLogin() {
    await this.page.goto('/advisergo');
    await this.page.waitForURL(this.urlAfterRedirect);
  }

  async loginWithCreds(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
    await this.throbber.waitFor({ state: 'hidden' });
  }

  async loginWithCredsWithTwoStep(username, password, twostep) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.twoStepAuthCheckbox.click();
    await this.twoStepCode.waitFor({ state: 'visible' });
    await this.twoStepCode.fill(twostep);
    await this.loginButton.click();
    await this.throbber.waitFor({ state: 'hidden' });
  }

  async closeReleaseNotesModel() {
    await this.releaseNotesModal.waitFor({ state: 'visible' });
    await this.releaseNotesCloseButton.click();
    await this.releaseNotesModal.waitFor({ state: 'hidden' });
  }
};
