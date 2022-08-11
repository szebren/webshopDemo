const BasePage = require("./BasePage").default;
const { By, until } = require("selenium-webdriver");

class RegistrationForm extends BasePage {
  constructor(driver) {
    super(driver);
  }
  //Fill out Register Form
  async registerFillOut(firstNameParam, lastNameParam, passwordParam) {
    let radioButton = await this.driver.wait(
      until.elementLocated(By.css("#id_gender2")),
      3000
    );
    await radioButton.click();

    const fistName = await this.driver.findElement(By.id("customer_firstname"));
    await fistName.click();
    fistName.sendKeys(firstNameParam);

    const lastName = await this.driver.findElement(By.id("customer_lastname"));
    lastName.click();
    lastName.sendKeys(lastNameParam);

    const password = await this.driver.findElement(By.id("passwd"));
    password.click();
    password.sendKeys(passwordParam);

    //Fill out Personal information_address

    const company = await this.driver.findElement(By.id("company"));
    company.click();
    company.sendKeys("TestCompany");

    const address = await this.driver.findElement(
      By.xpath("//input[@id='address1']")
    );
    address.click();
    address.sendKeys("Test street, 123456, TestCompany");

    const city = await this.driver.findElement(By.id("city"));
    city.click();
    city.sendKeys("Test");

    const state = await this.driver.findElement(By.id("id_state"));
    state.click();
    await this.driver
      .findElement(By.xpath('//*[@id="id_state"]/option[2]'))
      .click();
    state.click();

    const postCode = await this.driver.findElement(By.id("postcode"));
    postCode.click();
    postCode.sendKeys("00000");

    const country = await this.driver.findElement(By.id("id_country"));
    country.click();
    await this.driver.findElement(By.xpath('//option[@value="21"]'));
    country.click();

    const phone = await this.driver.findElement(By.id("phone_mobile"));
    phone.click();
    phone.sendKeys("+156785689");

    await this.driver.findElement(By.id("submitAccount")).click();
  }
}
module.exports = RegistrationForm;
