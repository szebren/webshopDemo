import { By } from "selenium-webdriver";

import BasePage from "./BasePage";

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

export default HomePage;
