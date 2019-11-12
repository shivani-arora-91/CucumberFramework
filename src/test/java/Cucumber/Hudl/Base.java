package Cucumber.Hudl;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base {
	
	public static WebDriver driver;
	public static Properties prop;
	
	public static WebDriver getDriver() throws IOException
	{
		prop = new Properties();
		FileInputStream fis = new FileInputStream("src/test/java/Cucumber/Hudl/global.properties");
		prop.load(fis);
		System.setProperty("webdriver.chrome.driver", "Drivers/Chrome/chromedriver");
		driver=new ChromeDriver();
   	 	driver.get(prop.getProperty("url"));
   	 	driver.manage().window().maximize();
   	 	driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		return driver;
	}

}
