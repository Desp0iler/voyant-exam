const { faker } = require('@faker-js/faker');

exports.LoginDetails = class LoginDetails {
  constructor() {
    this.validUsername = 'add the username';
    this.validPassword = 'add the password';
    this.invalidUsername = faker.internet.userName();
    this.invalidPassword = faker.internet.password();
    this.twoStepCode = faker.random.numeric(10);
  }
};

exports.Client = class Client {
  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.birthYear = String(faker.date.birthdate({ min: 18, max: 60, mode: 'age' }).getFullYear());
    this.planMonth = String(faker.datatype.number({ min: 1, max: 12 }));
    this.planDay = String(faker.datatype.number({ min: 1, max: 28 }));
    this.PlanYear = String(faker.datatype.number({ min: 1980, max: 2023 }));
    this.retirementAge = String(faker.datatype.number({ min: 75, max: 99 }));
    this.province = faker.helpers.arrayElement(['AB', 'BC', 'MB', 'NB', 'NL', 'NT',
      'NS', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT']);
    this.retiredSelection = faker.helpers.arrayElement(['true', 'false']);
  }
};

exports.Dashboard = class Dashboard {
  constructor() {
    this.frequencies = ['Monthly', 'Annually', 'Weekly', 'Biweekly',
      'Semimonthly', 'Quarterly', 'Semiannually'];
    this.frequency = faker.helpers.arrayElement(this.frequencies);
    this.amount = faker.random.numeric(6);
  }
};
