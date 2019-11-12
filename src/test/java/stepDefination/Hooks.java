package stepDefination;

import Cucumber.Hudl.Base;
import cucumber.api.java.After;

public class Hooks extends Base{

	@After("@RegTest")
	public void AfterSeleniumTest()
	{
		driver.close();
	}
}
