const { faker } = require('@faker-js/faker');

exports.LoginDetails = class LoginDetails {
  constructor() {
    this.validUsername = 'voyant-exercise';
    this.validPassword = 'password100';
    this.invalidUsername = faker.internet.userName();
    this.invalidPassword = faker.internet.password();
    this.twoStepCode = faker.random.numeric(10);
  }
};

exports.Client = class Client {
  constructor() {
    this.listOfProvinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NT',
      'NS', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'];
    this.firstName = faker.name.firstName();
    this.lastName = `${faker.name.lastName()}s`;
    this.birthYear = String(faker.date.birthdate({ min: 30, max: 60, mode: 'age' }).getFullYear());
    this.planMonth = String(faker.datatype.number({ min: 1, max: 12 }));
    this.planDay = String(faker.datatype.number({ min: 1, max: 28 }));
    this.PlanYear = String(faker.datatype.number({ min: 1980, max: 2023 }));
    this.retirementAge = String(faker.datatype.number({ min: 75, max: 99 }));
    this.province = faker.helpers.arrayElement(this.listOfProvinces);
    this.retiredSelection = faker.helpers.arrayElement(['true', 'false']);
  }
};

function reqCalculator(freq, amount) {
  let result = amount;
  switch (freq) {
    case 'Monthly':
      result = amount * 12;
      return result;
    case 'Weekly':
      result = amount * 52;
      return result;
    case 'Biweekly':
      result = amount * 26;
      return result;
    case 'Semimonthly':
      result = amount * 24;
      return result;
    case 'Quarterly':
      result = amount * 4;
      return result;
    case 'Semiannually':
      result = amount * 2;
      return result;
    default:
      return amount;
  }
}

exports.Dashboard = class Dashboard {
  constructor() {
    /** Removed "Annually" as it is a default value
     *  Should be broken out to its own test
    */
    this.frequencies = ['Monthly', 'Weekly', 'Biweekly',
      'Semimonthly', 'Quarterly', 'Semiannually'];
    this.sourceTypes = ['EMPLOYED', 'SELF_EMPLOYED', 'COMPANY_OWNER'];
    this.insuranceTypes = ['EMPLOYEE', 'PERSONAL'];
    this.benefitTypes = ['LUMP_SUM', 'INCOME', 'DECREASING', 'INCREASING'];
    this.payoutTypes = ['FIRST', 'SECOND'];
    this.sourceMap = { EMPLOYED: 'Employed', COMPANY_OWNER: 'Company Owner', SELF_EMPLOYED: 'Self Employed' };
    this.frequency = faker.helpers.arrayElement(this.frequencies);
    this.empSourceType = faker.helpers.arrayElement(this.sourceTypes);
    this.amount = faker.random.numeric(5);
    this.empSalary = faker.random.numeric(5).toString();
    this.bonus = faker.random.numeric(4);
    this.benefits = faker.random.numeric(4);
    this.trueOrFalse = faker.helpers.arrayElement(['true', 'false']);
    this.percentDividend = faker.datatype.float({ min: 1, max: 3, precision: 0.01 }).toString();
    this.empDividend = faker.random.numeric(4);
    this.empCompanyName = faker.company.name();
    this.totalIncome = this.calcIncome();
    this.preRetirementText = 'Pre-Retirement Goal';
    this.formattedAmount = reqCalculator(this.frequency, this.amount)
      .toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumSignificantDigits: 1 });
    this.formattedIncome = this.totalIncome.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumSignificantDigits: 1 });
    this.insuranceType = faker.helpers.arrayElement(this.insuranceTypes);
    this.benefitType = faker.helpers.arrayElement(this.benefitTypes);
    this.payoutType = faker.helpers.arrayElement(this.payoutTypes);
    this.policyName = faker.company.name();
    this.remainingTerm = faker.random.numeric(2);
    this.insuranceBenefitAmount = faker.random.numeric(5);
    this.premiumAmount = faker.random.numeric(4);
    this.salaryMultiplier = faker.random.numeric(1);
    this.policyType = 'Term Life';
  }

  calcIncome() {
    this.income = reqCalculator(this.frequency, this.empSalary) + parseFloat(this.bonus);
    if (this.empSourceType === 'COMPANY_OWNER') {
      this.income += parseFloat(this.empDividend);
      return this.income;
    }
    return this.income;
  }
};
