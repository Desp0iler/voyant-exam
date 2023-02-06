const { Dashboard } = require('./utils/datagen');

exports.DashboardPage = class DashboardPage {
  constructor(page) {
    this.page = page;
    this.data = new Dashboard();
    this.addButton = page.locator('.add-button ');
    this.addPlanningMenu = page.locator('.add-button-menu');
    this.peopleButton = page.locator('[data-test-model-type="people"]');
    this.corporateButton = page.locator('[data-test-model-type="companies"]');
    this.trustButton = page.locator('[data-test-model-type="trusts"]');
    this.goalsButton = page.locator('[data-test-model-type="goals"]');
    this.eventButton = page.locator('[data-test-model-type="events"]');
    this.stageButton = page.locator('[data-test-model-type="stages"]');
    this.incomeButton = page.locator('[data-test-model-type="income"]');
    this.savingsButton = page.locator('[data-test-model-type="savings-investments"]');
    this.annuitiesButton = page.locator('[data-test-model-type="annuities"]');
    this.propertyButton = page.locator('[data-test-model-type="properties"]');
    this.insuranceButton = page.locator('[data-test-model-type="protection"]');
    this.expensesButton = page.locator('[data-test-model-type="expenses"]');
    this.debtButton = page.locator('[data-test-model-type="debt"]');
    this.transferButton = page.locator('[data-test-model-type="transfers"]');
    this.withdrawButton = page.locator('[data-test-model-type="drawdowns"]');
    this.estateButton = page.locator('[data-test-model-type="estate-plans"]');
    this.goalModal = page.locator('.modal-content');
    this.preRetirementGoal = page.locator('[data-test-goal-type="goal-pre-retirement"]');
    this.retirementGoal = page.locator('[data-test-goal-type="goal-retirement"]');
    this.milestoneGoal = page.locator('[data-test-goal-type="goal-milestone"]');
    this.educationGoal = page.locator('[data-test-goal-type="goal-college"]');
    this.netWorthGoal = page.locator('[data-test-goal-type="goal-networth"]');
    this.goalPopover = page.locator('[role="main"]');
    this.amount = page.locator('#basicExpenseInputAmount');
    this.amountFreqDropdown = page.locator('[data-test-affix-selector="true"]');
    this.amountSelection = page.getByRole('link', { name: this.data.frequency, exact: true });
    this.cancelButton = page.locator('[data-test-model-cancel="true"]');
    this.doneButton = page.locator('[data-test-model-save="true"]');
    this.accordionMenu = page.locator('.main-accordion');
    this.goalOption = page.locator('[data-test-accordion-header="goals"]');
    this.goalSelection = page.locator('#goalsSection');
  }

  async openPlanningMenuAndSelectGoal() {
    await this.addButton.click();
    await this.addPlanningMenu.waitFor({ state: 'visible' });
    await this.goalsButton.click();
    await this.goalModal.waitFor({ state: 'visible' });
    await this.preRetirementGoal.click();
    await this.goalPopover.waitFor({ state: 'visible' });
  }

  async addPreRetirementGoal() {
    await this.amount.fill(this.data.amount);
    await this.amountFreqDropdown.click();
    await this.amountSelection.click();
    await this.doneButton.click();
  }

  reqCalculator(freq, amount) {
    this.result = amount;
    switch (freq) {
      case 'Monthly':
        this.result = amount * 12;
        return this.result;
      case 'Annually':
        this.result = amount;
        return this.result;
      case 'Weekly':
        this.result = amount * 52;
        return this.result;
      case 'Biweekly':
        this.result = amount * 26;
        return this.result;
      case 'Semimonthly':
        this.result = amount * 24;
        return this.result;
      case 'Quarterly':
        this.result = amount * 4;
        return this.result;
      case 'Semiannually':
        this.result = amount * 2;
        return this.result;
      default:
        return this.amount;
    }
  }
};
