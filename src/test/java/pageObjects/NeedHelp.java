package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class NeedHelp {
	
public WebDriver driver;
	
	public NeedHelp(WebDriver driver)
	{
		this.driver=driver;
	}

		   By Header1 = By.xpath("//h1[contains(text(),'Login Help')]");
		   By Header2 = By.xpath("//h2[contains(text(),'s reset your password')]");
		   By ResetEmail = By.id("forgot-email");
		   By SendPassword = By.id("resetBtn");
		   By CheckEmail = By.xpath("//h4[contains(text(),'Check Your Email')]");
		   By Back = By.id("back-to-login");
	
	public WebElement getHeader1()
	{
		return driver.findElement(Header1);
	}
	
	public By getByHeader1()
	{
		return Header1;
	}
	
	public WebElement getHeader2()
	{
		return driver.findElement(Header2);
	}
	
	public By getByHeader2()
	{
		return Header2;
	}
	
	public WebElement getResetEmail()
	{
		return driver.findElement(ResetEmail);
	}
	
	public WebElement getSendPassword()
	{
		return driver.findElement(SendPassword);
	}
	public WebElement getCheckEmail()
	{
		return driver.findElement(CheckEmail);
	}
	public By getByCheckEmail()
	{
		return CheckEmail;
	}
	public WebElement getBack()
	{
		return driver.findElement(Back);
	}
}
