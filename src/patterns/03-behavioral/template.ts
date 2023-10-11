// https://refactoring.guru/design-patterns/template-method

// Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass
// but lets subclasses override specific steps of the algorithm without changing its structure.

export class SignupConfiguration {
  async start() {
    await this.configureLoginMethod();
    await this.configure2FAuth();
    await this.configureProfileCredentials();
  }
  async configureLoginMethod() {
    throw new Error('Method not implemented');
  }
  async configure2FAuth() {
    throw new Error('Method not implemented');
  }
  async configureProfileCredentials() {
    throw new Error('Method not implemented');
  }
}

class BasicSignupConfiguration extends SignupConfiguration {
  override async configureLoginMethod() {
    console.log('Login by email');
  }
  override async configure2FAuth() {
    console.log('2 factor auth not available');
  }
  override async configureProfileCredentials() {
    console.log('Address is..');
  }
}

class AdvancedSignupConfiguration extends SignupConfiguration {
  override async configureLoginMethod() {
    console.log('Login by email or username');
  }
  override async configure2FAuth() {
    console.log('2 factor auth available');
  }
  override async configureProfileCredentials() {
    console.log('Address is City, tel number is 555');
  }
}

const basic = new BasicSignupConfiguration();
const advanced = new AdvancedSignupConfiguration();

basic.start().then((_) => _);
