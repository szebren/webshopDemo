const { Builder, Key, By, until } = require("selenium-webdriver");
const HomePage = require("./../pagesobjects/HomePage").default;
const LoginPage = require("./../pagesobjects/LoginPage");
const RegisterForm = require("./../pagesobjects/RegistrationForm");
var should = require("chai").should();
const assert = require("assert");

describe("This is the block of login", function () {
  let driver;

  beforeEach(async function () {
    //Enter action before tests
    //Launch browser
    driver = new Builder().forBrowser("firefox").build();
    await driver.manage().window().maximize();
  });
  afterEach(async function () {
    //Enter action after test
    //Close Browser and set driver to default
    await driver.quit();
    driver = undefined;
  });

  it("valid Login", async function () {
    const homePage = new HomePage(driver);
    await homePage.navigateSignIn();
    const loginPage = new LoginPage(driver);
    await loginPage.logIn("testmail1991@gmail.com", "Test12");

    const header = await driver.findElement(By.className("header_user_info"));
    assert(header, "Renata Szebenyi");
  });

  it("invalid login", async function () {
    const homePage = new HomePage(driver);
    await homePage.navigateSignIn();
    const loginPage = new LoginPage(driver);
    await loginPage.logIn("", "Test12");

    const loginError = await driver.findElement(
      By.className("alert alert-danger")
    );
    assert(loginError, "An email address required.");
  });
});
