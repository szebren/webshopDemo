const BasePage = require("./BasePage");
const { By } = require("selenium-webdriver");

class LoginPage extends BasePage {
  constructor(driver) {
    super(driver);
  }
  //Fill out Register firlds
  async signIn(emailName) {
    const email = await this.driver.findElement(
      By.xpath('//input[@id="email_create"]')
    );
    await email.click();
    await email.sendKeys(emailName);
    await this.driver.findElement(By.id("SubmitCreate")).click();
  }
  //Fill out Login fields
  async logIn(emailAddress, password) {
    const emailField = await this.driver.findElement(By.id("email"));
    await emailField.click();
    await emailField.sendKeys(emailAddress);

    const passowrdField = await this.driver.findElement(By.id("passwd"));
    await passowrdField.click();
    await passowrdField.sendKeys(password);

    await this.driver.findElement(By.id("SubmitLogin")).click();
  }
}

module.exports = LoginPage;
