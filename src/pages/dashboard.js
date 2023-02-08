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
    this.goalModal = page.locator('.modal-content span.modal-title').filter({ hasText: 'Goals' });
    this.incomeModal = page.locator('.modal-content span.modal-title').filter({ hasText: 'Income' }).first();
    this.insuranceModal = page.locator('.modal-content span.modal-title').filter({ hasText: 'Insurance' }).first();
    this.preRetirementGoal = page.locator('[data-test-goal-type="goal-pre-retirement"]');
    this.retirementGoal = page.locator('[data-test-goal-type="goal-retirement"]');
    this.milestoneGoal = page.locator('[data-test-goal-type="goal-milestone"]');
    this.educationGoal = page.locator('[data-test-goal-type="goal-college"]');
    this.netWorthGoal = page.locator('[data-test-goal-type="goal-networth"]');
    this.goalPopover = page.locator('[role="main"]');
    this.amount = page.locator('#basicExpenseInputAmount');
    this.amountFreqDropdown = page.locator('[data-test-affix-selector="true"]');
    this.freqDropdownMenu = page.locator('.dropdown-menu');
    this.amountSelection = page.getByRole('link', { name: this.data.frequency, exact: true });
    this.cancelButton = page.locator('[data-test-model-cancel="true"]');
    this.doneButton = page.locator('[data-test-model-save="true"]');
    this.accordionMenu = page.locator('.main-accordion');
    this.goalOption = page.locator('[data-test-accordion-header="goals"]');
    this.goalSelection = page.locator('#goalsSection');
    this.goalName = page.locator('#goalsSection a');
    this.goalAmount = page.locator('#goalsSection  [data-test-label-currency="true"]');
    this.incomeTypeEmployment = page.locator('[data-test-model-category="caEmployment"]');
    this.incomeTypeOther = page.locator('[data-test-model-category="caOther"]');
    this.incomeTypeWindfall = page.locator('[data-test-model-category="windfall"]');
    this.incomeTypePensionPlan = page.locator('[data-test-model-category="caPensionPlan"]');
    this.incomeTypeBenPension = page.locator('[data-test-model-category="caDefinedBenefitPension"]');
    this.incomeTypeAgeSecurity = page.locator('[data-test-model-category="caOldAgeSecurity"]');
    this.incomeOption = page.locator('[data-test-accordion-header="income"]');
    this.incomeSelection = page.locator('#incomeSection');
    this.incomeCompanyName = page.locator('#incomeSection a');
    this.incomeEmpType = page.locator('#incomeSection tr td.col-xs-4');
    this.incomeValue = page.locator('#incomeSection [data-test-label-currency="true"]');
    this.empPopover = page.locator('div').filter({ hasText: 'Employment' }).first();
    this.empName = page.locator('#employmentInputName');
    this.empSource = page.locator('#employmentInputEmploymentSource');
    this.empSalary = page.locator('#employmentInputSalary');
    this.empFrequencyDropdown = page.locator('.input-group-btn.dropdown');
    this.empBonus = page.locator('#employmentInputBonus');
    this.empBenefits = page.locator('#employmentInputBenefitsInKind');
    this.empWithholdInsurance = page.locator('#incurEmploymentInsurance');
    this.empDividend = page.locator('#employmentInputAnnualDividend');
    this.empPercentDividend = page.locator('#employmentPercentEligibleDividends');
    this.empDisibilityToggle = page.locator('#ignoreDisability');
    this.insuranceTermLife = page.locator('[data-test-model-category="termLifeInsurance"]');
    this.insurancePopover = page.locator('div').filter({ hasText: 'Term Life' }).first();
    this.policyName = page.locator('#termLifeName');
    this.insuranceOption = page.locator('[data-test-accordion-header="protection"]');
    this.insuranceSelection = page.locator('#protectionSection');
    this.insuranceAccordianType = page.locator('#protectionSection tr td.col-xs-4');
    this.insuranceAccordianName = page.locator('#protectionSection a');
    this.insuranceType = page.locator('#termLifeInputInsuranceType');
    this.insurerDifferent = page.locator('#insuredPersonsInputIsDifferent');
    this.insuredDropdown = page.getByRole('listbox').filter({ hasText: 'Please Select Insured' });
    this.insuredSelection = page.locator('[data-test-owner-item-notselected="true"]');
    this.benefitType = page.locator('#termLifeInputBenefitType');
    this.linkedEmployer = page.getByRole('combobox', { name: 'Linked Employment *' });
    this.linkedEmpSelection = page.locator('#termLifeInsuranceEmploymentId > option:nth-child(2)');
    this.remainingTerm = page.locator('#ukTermProtectionInputTerm');
    this.benefitAmount = page.locator('#ukTermProtectionInputBenefitAmount');
    this.premium = page.locator('#ukTermProtectionAnnualPremium');
    this.salaryMultiplier = page.locator('#ukTermProtectionSalaryMultiplier');
    this.policyDetails = page.locator('#ukTermProtectionIsJoint');
    this.policyPayoutType = page.locator('#investmentInputJointPayoutType');
    this.policyTrust = page.locator('#termLifeInTrust');
  }

  async openPlanningMenuAndSelectGoal() {
    await this.addButton.waitFor({ state: 'visible' });
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
    await this.freqDropdownMenu.waitFor({ state: 'visible' });
    await this.amountSelection.click();
    await this.doneButton.click();
  }

  async openPlanningMenuAndSelectIncome() {
    await this.addButton.waitFor({ state: 'visible' });
    await this.addButton.click();
    await this.addPlanningMenu.waitFor({ state: 'visible' });
    await this.incomeButton.click();
    await this.incomeModal.waitFor({ state: 'visible' });
    await this.incomeTypeEmployment.click();
    await this.empPopover.waitFor({ state: 'visible' });
  }

  async addNewEmployment() {
    await this.empName.fill(this.data.empCompanyName);
    await this.empSource.selectOption(this.data.empSourceType);
    await this.empFrequencyDropdown.click();
    await this.freqDropdownMenu.waitFor({ state: 'visible' });
    await this.amountSelection.click();
    await this.empSalary.fill(this.data.empSalary);
    await this.empBonus.fill(this.data.bonus);
    await this.empBenefits.fill(this.data.benefits);
    if (this.data.empSourceType === 'SELF_EMPLOYED') {
      await this.empWithholdInsurance.selectOption(this.data.trueOrFalse);
    }
    if (this.data.empSourceType === 'COMPANY_OWNER') {
      await this.empDividend.fill(this.data.empDividend);
      await this.empPercentDividend.fill(this.data.percentDividend);
      await this.empWithholdInsurance.selectOption(this.data.trueOrFalse);
    }
    await this.doneButton.click();
  }

  async openPlanningMenuAndSelectInsurance() {
    await this.addButton.waitFor({ state: 'visible' });
    await this.addButton.click();
    await this.addPlanningMenu.waitFor({ state: 'visible' });
    await this.insuranceButton.click();
    await this.insuranceModal.waitFor({ state: 'visible' });
    await this.insuranceTermLife.click();
  }

  async addNewInsurance() {
    await this.insurancePopover.waitFor({ state: 'visible' });
    await this.policyName.fill(this.data.policyName);
    await this.insuranceType.selectOption(this.data.insuranceType);
    if (this.data.insuranceType === 'PERSONAL') {
      await this.benefitType.selectOption(this.data.benefitType);
      await this.remainingTerm.fill(this.data.remainingTerm);
      await this.benefitAmount.fill(this.data.insuranceBenefitAmount);
      await this.premium.fill(this.data.premiumAmount);
      await this.policyDetails.selectOption({ value: 'false' });
    }
    if (this.data.insuranceType === 'EMPLOYEE') {
      await this.salaryMultiplier.fill(this.data.salaryMultiplier);
      await this.linkedEmployer.click();
      await this.linkedEmployer.selectOption({ label: this.data.empCompanyName });
    }
    await this.insurerDifferent.click();
    await this.insurerDifferent.selectOption(this.data.trueOrFalse);
    if (this.data.trueOrFalse === 'true') {
      await this.insuredDropdown.click();
      await this.insuredSelection.waitFor({ state: 'visible' });
      await this.insuredSelection.click();
    }

    await this.policyTrust.selectOption(this.data.trueOrFalse);
    await this.doneButton.click();
    await this.accordionMenu.waitFor({ state: 'visible' });
  }
};
