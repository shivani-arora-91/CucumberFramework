package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Login {

public WebDriver driver;
	
	public Login(WebDriver driver)
	{
		this.driver=driver;
	}
	
		   By GoToLogin=By.xpath("//a[@class='btn__blue login']");
		   By email = By.xpath("//input[@id='email']");
		   By password = By.id("password");
		   By login = By.id("logIn");
		   By errorContainer = By.xpath("//p[contains(text(),'recognize that email and/or password.')]");
		   By rememberMe = By.xpath(" //label[@class='form__label--custom']");
		   By needHelp = By.id("forgot-password-link");
	
	public WebElement getGoToLogin()
	{
		return driver.findElement(GoToLogin);
	}
	
	public WebElement getEmail()
	{
		return driver.findElement(email);
	}
	public By getByEmail()
	{
		return email;
	}
	
	public WebElement getPassword()
	{
		return driver.findElement(password);
	}
	
	public WebElement getLogin()
	{
		return driver.findElement(login);
	}
	
	public WebElement getErrorContainer()
	{
		return driver.findElement(errorContainer);
	}
	
	public By getByErrorContainer()
	{
		return errorContainer;
	}
	
	public WebElement getRememberMe()
	{
		return driver.findElement(rememberMe);
	}
	
	public WebElement getNeedHelp()
	{
		return driver.findElement(needHelp);
	}
	public By getByNeedHelp()
	{
		return needHelp;
	}
	
	
}
