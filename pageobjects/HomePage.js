const { By } = require("selenium-webdriver");

const BasePage = require("./BasePage");

class HomePage extends BasePage {
  constructor(driver) {
    super(driver);
  }
  //navigate to HomPage and click on SignIn button
  async navigateSignIn() {
    await this.driver.get("http://automationpractice.com/index.php");
    await this.driver.findElement(By.className("login")).click();
  }
}

module.exports = HomePage;
