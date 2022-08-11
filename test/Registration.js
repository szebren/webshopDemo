const { Builder, Key, By, until } = require("selenium-webdriver");
const HomePage = require("./../pagesobjects/HomePage").default;
const LoginPage = require("./../pagesobjects/LoginPage");
const RegisterForm = require("./../pagesobjects/RegistrationForm");
var should = require("chai").should();
const assert = require("assert");

describe("This is the block of registration", function () {
  let driver;

  beforeEach(async function () {
    //Enter action before tests
    //Launch browser
    driver = new Builder().forBrowser("firefox").build();
    await driver.manage().setTimeouts({ implicit: 220000 });
    await driver.manage().window().maximize();
  });
  afterEach(async function () {
    //Close Browser and set driver to default
    await driver.quit();
    driver = undefined;
  });
  it("Registration valid", async function () {
    //Enter with valid e-mail address
    const homePage = new HomePage(driver);
    await homePage.navigateSignIn();
    const loginPage = new LoginPage(driver);
    await loginPage.signIn("renitest2456@gmail.com");
    const registerForm = new RegisterForm(driver);
    await registerForm.registerFillOut("Renata", "Szebenyi", "Test12");

    const welcome = await driver.findElement(By.className("info-account"));

    assert(
      welcome,
      "Welcome to your account. Here you can manage all of your personal information and orders."
    );
  });
  it("Registration invalid", async function () {
    //Enter with empty email address field
    const homePage = new HomePage(driver);
    await homePage.navigateSignIn();
    const loginPage = new LoginPage(driver);
    await loginPage.signIn("");

    const error = await driver.findElement(By.id("create_account_error"));
    assert(error, "Invalid email address.");
  });

  it("Registered e-mail address", async function () {
    //Enter with a regsitered e-mail address

    const homePage = new HomePage(driver);
    await homePage.navigateSignIn();
    const loginPage = new LoginPage(driver);
    await loginPage.signIn("testmail1991@gmail.com");

    const error = await driver.findElement(By.id("create_account_error"));
    assert(
      error,
      "An account using this email address has already been registered. Please enter a valid password or request a new one."
    );
  });
});
