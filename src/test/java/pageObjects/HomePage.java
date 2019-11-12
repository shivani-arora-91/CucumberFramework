package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HomePage {

public WebDriver driver;
	
	public HomePage(WebDriver driver)
	{
		this.driver=driver;
	}
	
	By initials = By.xpath("//h5[@class='uni-avatar__initials uni-avatar__initials--user']");
	By globalUserDropDown = By.xpath("//span[contains(text(),'Coach A')]");
	By logout = By.xpath("//a[contains(text(),'Log Out')]");
	
	public WebElement getInitials()
	{
		return driver.findElement(initials);
	}
	
	public WebElement getglobalUserDropDown()
	{
		return driver.findElement(globalUserDropDown);
	}
	
	public WebElement getLogout()
	{
		return driver.findElement(logout);
	}
	
}
