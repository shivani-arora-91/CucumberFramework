package stepDefination;


import Cucumber.Hudl.Base;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import pageObjects.HomePage;
import pageObjects.Login;
import pageObjects.NeedHelp;

import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

@RunWith(Cucumber.class)
public class StepDefination {

	public WebDriver driver;
	public HomePage h;
	public Login l;
	public NeedHelp n;
	
    @Given("^User is on Login page$")
    public void user_is_on_login_page() throws Throwable {
        driver = Base.getDriver();
        l = new Login(driver);
        l.getGoToLogin().click();
    }

   /* @When("^User login into application with correct username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void user_login_into_application_with_correct_username_something_and_password_something(String strArg1, String strArg2) throws Throwable {
       l.getEmail().sendKeys(strArg1);
       l.getPassword().sendKeys(strArg2);
       l.getLogin().click();
    }*/
    
    @Then("^User is redirected to Home Page$")
    public void user_is_redirected_to_home_page() throws Throwable {
       System.out.println("Page Title is " +  driver.getTitle());
       Assert.assertEquals("Log In - Hudl", driver.getTitle());
    }

    @And("^User Initial \"([^\"]*)\" is populated$")
    public void user_initial_something_is_populated(String strArg1) throws Throwable {
    	h = new HomePage(driver);
        System.out.println("User Initials " + h.getInitials().getText());
       Assert.assertEquals(strArg1,h.getInitials().getText());
    }
    
    @When("^User login into application with username (.+) and password (.+)$")
    public void user_login_into_application_with_incorrect_username_and_password(String username, String password) throws Throwable {
    	 l.getEmail().sendKeys(username);
         l.getPassword().sendKeys(password);
         l.getLogin().click();
         
    }
    
    @Then("^Error Message \"([^\"]*)\" is displayed$")
    public void error_message_something_is_displayed(String strArg1) throws Throwable {
    	WebDriverWait wait = new WebDriverWait(driver,5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(l.getByErrorContainer()));
    	System.out.println("Error message for Testcase " +l.getErrorContainer().getText());
         Assert.assertEquals(strArg1,l.getErrorContainer().getText());
    }
    
    @And("^Log In button is disabled$")
    public void log_in_button_is_disabled() throws Throwable {
        Assert.assertFalse(l.getLogin().isEnabled());
    }

    
    @When("^checks remember me$")
    public void checks_remember_me() throws Throwable {
         l.getRememberMe().click();
         l.getLogin().click();
    }
    
    @And("^User logs Out of the application$")
    public void user_logs_out_of_the_application() throws Throwable {
    	 h = new HomePage(driver);
    	 Actions a = new Actions(driver);
    	 a.moveToElement(h.getglobalUserDropDown());
    }

    @And("^User logs in again$")
    public void user_logs_in_again() throws Throwable {
    	 driver.get(Base.prop.getProperty("login"));
        
    }
    
    @Then("^User Email \"([^\"]*)\" and Password \"([^\"]*)\" should be autopopulated$")
    public void user_email_something_and_password_something_should_be_autopopulated(String strArg1, String strArg2) throws Throwable {
    WebDriverWait wait = new WebDriverWait(driver, 15);
   	wait.until(ExpectedConditions.presenceOfElementLocated(l.getByEmail()));
   	System.out.println("Email " + l.getEmail().getAttribute("value"));
   	System.out.println("Password " + l.getPassword().getAttribute("value"));
   	Assert.assertEquals(strArg1, l.getEmail().getAttribute("value"));
   	Assert.assertEquals(strArg2, l.getPassword().getAttribute("value"));
    }
    
    @Then("^User Email and Password should be blank$")
    public void user_email_and_password_should_be_blank() throws Throwable {
    	WebDriverWait wait = new WebDriverWait(driver, 15);
       	wait.until(ExpectedConditions.presenceOfElementLocated(l.getByEmail()));
       	System.out.println("Email " + l.getEmail().getAttribute("value"));
       	System.out.println("Password " + l.getPassword().getAttribute("value"));
       	Assert.assertEquals("", l.getEmail().getAttribute("value"));
       	Assert.assertEquals("", l.getPassword().getAttribute("value"));
    }


    @Then("^Remember Me should be deselected$")
    public void remember_me_should_be_deselected() throws Throwable {
      Assert.assertFalse(l.getRememberMe().isSelected());
    }

    @When("^User enters username \"([^\"]*)\" and clicks Need Help$")
    public void user_enters_username_something_and_clicks_need_help(String strArg1) throws Throwable {
        l.getEmail().sendKeys(strArg1);
        WebDriverWait wait = new WebDriverWait(driver,5);
    	wait.until(ExpectedConditions.visibilityOfElementLocated(l.getByNeedHelp()));
        l.getNeedHelp().click();
    }

    @Then("^User is redirected to Reset password page$")
    public void user_is_redirected_to_reset_password_page() throws Throwable {
    	n = new NeedHelp(driver);
    	WebDriverWait wait = new WebDriverWait(driver,5);
    	wait.until(ExpectedConditions.visibilityOfElementLocated(n.getByHeader1()));
    	System.out.println("Need Help page text " + n.getHeader1().getText());
        System.out.println("Need Help page text " +n.getHeader2().getText());
        Assert.assertEquals("Login Help",n.getHeader1().getText());
        Assert.assertEquals("Let’s reset your password",n.getHeader2().getText());
    }
    
    @And("^User email \"([^\"]*)\" is pre poulated$")
    public void user_email_is_pre_poulated(String strArg1) throws Throwable {
       System.out.println("Reset Password for Email " + n.getResetEmail().getAttribute("value")); 
       Assert.assertEquals(strArg1,n.getResetEmail().getAttribute("value"));
    }

    @And("^User Clicks Reset Password$")
    public void user_clicks_reset_password() throws Throwable {
    	n = new NeedHelp(driver);
    	n.getSendPassword().click();
    }
    
    @Then("^Reset Password Confirmation is displayed$")
    public void reset_password_confirmation_is_displayed() throws Throwable {
    	WebDriverWait wait = new WebDriverWait(driver,5);
    	wait.until(ExpectedConditions.visibilityOfElementLocated(n.getByCheckEmail()));
    	System.out.println("Validate Email Text " + n.getCheckEmail().getText());
    }

    @And("^User enters password \"([^\"]*)\"$")
    public void user_enters_password_something(String strArg1) throws Throwable {
        l.getPassword().sendKeys(strArg1);
    }

    @Then("^Login button is Enabled$")
    public void login_button_is_enabled() throws Throwable {
    	 Assert.assertTrue(l.getLogin().isEnabled());
    }

  

}


