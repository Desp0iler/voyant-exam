const { Client } = require('./utils/datagen');

exports.ClientPage = class ClientPage {
  constructor(page) {
    this.page = page;
    this.data = new Client();
    this.addClientButton = page.locator('.add-button ');
    this.newClientModal = page.locator('.modal-content');
    this.firstName = page.locator('.test-new-client-firstName');
    this.lastName = page.locator('.test-new-client-lastName');
    this.throbber = page.locator('.login-loader');
    this.birthYear = page.locator('.test-new-client-birthYear');
    this.planMonth = page.locator('input[max="12"]');
    this.planDay = page.locator('input[max="31"]');
    this.planYear = page.locator('input[min="1900"]');
    this.proviceDropdown = page.locator('#newUserInputProvince');
    this.retiredDropdown = page.locator('#alreadyRetiredDropdown');
    this.retirementLabel = page.locator('.down-up-normal > .liquid-child').first();
    this.retirementAge = page.locator('.test-new-client-retirementAge').first();
    this.cancelButton = page.locator('.edit-modal-close');
    this.doneButton = page.locator('[data-test-model-save]');
    this.loader = page.locator('.loader');
  }

  async createNewClient(retired) {
    await this.firstName.type(this.data.firstName);
    await this.lastName.type(this.data.lastName);
    await this.birthYear.fill(this.data.birthYear);
    await this.planDay.fill(this.data.planDay);
    await this.planMonth.fill(this.data.planMonth);
    await this.planYear.fill(this.data.PlanYear);
    await this.proviceDropdown.selectOption(this.data.province);
    if (retired === 'true') {
      await this.retiredDropdown.selectOption('true');
      await this.doneButton.click();
    } else {
      await this.retiredDropdown.selectOption('false');
      await this.retirementLabel.waitFor({ state: 'visible' });
      await this.retirementAge.fill(this.data.retirementAge);
      await this.doneButton.click();
    }
    await this.loader.waitFor({ state: 'hidden' });
  }

  async openNewClientModal() {
    await this.addClientButton.click();
    await this.newClientModal.waitFor({ state: 'visible' });
  }
};
