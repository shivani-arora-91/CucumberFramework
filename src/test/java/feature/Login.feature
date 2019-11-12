Feature: Application Login

@RegTest
Scenario: Login with correct credentials
Given User is on Login page
When User login into application with username shivani.arora.3@warwickgrad.net and password Hudl@1234
Then User is redirected to Home Page
And User Initial "SA" is populated

@RegTest
Scenario Outline: Login with incorrect credentials
Given User is on Login page
When User login into application with username <Username> and password <password>
Then Error Message "We didn't recognize that email and/or password. Need help?" is displayed
And Log In button is disabled

Examples:
|Username 							|password	 |
|shivani.arora.3@warwickgrad.net    |pass1   	 |
|shivani.arora@gmail.com  			|Hudl@1234   |
|user3    							|pass3   	 |

@RegTest
Scenario: Login and remember user credentials
Given User is on Login page
When User login into application with username shivani.arora.3@warwickgrad.net and password Hudl@1234
And  checks remember me
And  User logs Out of the application
And  User logs in again
Then User Email "shivani.arora.3@warwickgrad.net" and Password "Hudl@1234" should be autopopulated

@RegTest
Scenario: Login and doesnot remember user credentials
Given User is on Login page
When User login into application with username shivani.arora.3@warwickgrad.net and password Hudl@1234
And User logs Out of the application
And User logs in again
Then User Email and Password should be blank

@RegTest
Scenario: Remember Me should be deselected by default
Given User is on Login page
Then Remember Me should be deselected

@RegTest
Scenario: User email should be populated on Need Help text box
Given User is on Login page
When User enters username "shivani.arora.3@warwickgrad.net" and clicks Need Help
Then User is redirected to Reset password page
And User email "shivani.arora.3@warwickgrad.net" is pre poulated

@RegTest
Scenario: User resets password
Given User is on Login page
When User enters username "shivani.arora.3@warwickgrad.net" and clicks Need Help
And User Clicks Reset Password
Then Reset Password Confirmation is displayed

@RegTest
Scenario: Login Button is enables when user starts entering password
Given User is on Login page
When User login into application with username shivani.arora.3@warwickgrad.net and password Hudl@1234
And Log In button is disabled
And User enters password "Hudl@1234"
Then Login button is Enabled
