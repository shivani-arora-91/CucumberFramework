$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct credentials",
  "description": "",
  "id": "application-login;login-with-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User login into application with username shivani.arora.3@warwickgrad.net and password Hudl@1234",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User is redirected to Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User Initial \"SA\" is populated",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 6855874780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shivani.arora.3@warwickgrad.net",
      "offset": 42
    },
    {
      "val": "Hudl@1234",
      "offset": 87
    }
  ],
  "location": "StepDefination.user_login_into_application_with_incorrect_username_and_password(String,String)"
});
formatter.result({
  "duration": 514789052,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_is_redirected_to_home_page()"
});
formatter.result({
  "duration": 21874515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA",
      "offset": 14
    }
  ],
  "location": "StepDefination.user_initial_something_is_populated(String)"
});
formatter.result({
  "duration": 3082247780,
  "status": "passed"
});
formatter.after({
  "duration": 204184970,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Login with incorrect credentials",
  "description": "",
  "id": "application-login;login-with-incorrect-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User login into application with username \u003cUsername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Error Message \"We didn\u0027t recognize that email and/or password. Need help?\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Log In button is disabled",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "application-login;login-with-incorrect-credentials;",
  "rows": [
    {
      "cells": [
        "Username",
        "password"
      ],
      "line": 18,
      "id": "application-login;login-with-incorrect-credentials;;1"
    },
    {
      "cells": [
        "shivani.arora.3@warwickgrad.net",
        "pass1"
      ],
      "line": 19,
      "id": "application-login;login-with-incorrect-credentials;;2"
    },
    {
      "cells": [
        "shivani.arora@gmail.com",
        "Hudl@1234"
      ],
      "line": 20,
      "id": "application-login;login-with-incorrect-credentials;;3"
    },
    {
      "cells": [
        "user3",
        "pass3"
      ],
      "line": 21,
      "id": "application-login;login-with-incorrect-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Login with incorrect credentials",
  "description": "",
  "id": "application-login;login-with-incorrect-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User login into application with username shivani.arora.3@warwickgrad.net and password pass1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Error Message \"We didn\u0027t recognize that email and/or password. Need help?\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Log In button is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 5066024286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shivani.arora.3@warwickgrad.net",
      "offset": 42
    },
    {
      "val": "pass1",
      "offset": 87
    }
  ],
  "location": "StepDefination.user_login_into_application_with_incorrect_username_and_password(String,String)"
});
formatter.result({
  "duration": 611184198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We didn\u0027t recognize that email and/or password. Need help?",
      "offset": 15
    }
  ],
  "location": "StepDefination.error_message_something_is_displayed(String)"
});
formatter.result({
  "duration": 834730577,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.log_in_button_is_disabled()"
});
formatter.result({
  "duration": 28387229,
  "status": "passed"
});
formatter.after({
  "duration": 129686940,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login with incorrect credentials",
  "description": "",
  "id": "application-login;login-with-incorrect-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User login into application with username shivani.arora@gmail.com and password Hudl@1234",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Error Message \"We didn\u0027t recognize that email and/or password. Need help?\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Log In button is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 5612510813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shivani.arora@gmail.com",
      "offset": 42
    },
    {
      "val": "Hudl@1234",
      "offset": 79
    }
  ],
  "location": "StepDefination.user_login_into_application_with_incorrect_username_and_password(String,String)"
});
formatter.result({
  "duration": 479089016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We didn\u0027t recognize that email and/or password. Need help?",
      "offset": 15
    }
  ],
  "location": "StepDefination.error_message_something_is_displayed(String)"
});
formatter.result({
  "duration": 1319617148,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.log_in_button_is_disabled()"
});
formatter.result({
  "duration": 19624993,
  "status": "passed"
});
formatter.after({
  "duration": 127485450,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login with incorrect credentials",
  "description": "",
  "id": "application-login;login-with-incorrect-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User login into application with username user3 and password pass3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Error Message \"We didn\u0027t recognize that email and/or password. Need help?\" is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Log In button is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 9455132689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user3",
      "offset": 42
    },
    {
      "val": "pass3",
      "offset": 61
    }
  ],
  "location": "StepDefination.user_login_into_application_with_incorrect_username_and_password(String,String)"
});
formatter.result({
  "duration": 378820841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We didn\u0027t recognize that email and/or password. Need help?",
      "offset": 15
    }
  ],
  "location": "StepDefination.error_message_something_is_displayed(String)"
});
formatter.result({
  "duration": 1292423539,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.log_in_button_is_disabled()"
});
formatter.result({
  "duration": 19731067,
  "status": "passed"
});
formatter.after({
  "duration": 139294102,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login and remember user credentials",
  "description": "",
  "id": "application-login;login-and-remember-user-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User login into application with username shivani.arora.3@warwickgrad.net and password Hudl@1234",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "checks remember me",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User logs Out of the application",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User logs in again",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User Email \"shivani.arora.3@warwickgrad.net\" and Password \"Hudl@1234\" should be autopopulated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 5221383268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shivani.arora.3@warwickgrad.net",
      "offset": 42
    },
    {
      "val": "Hudl@1234",
      "offset": 87
    }
  ],
  "location": "StepDefination.user_login_into_application_with_incorrect_username_and_password(String,String)"
});
formatter.result({
  "duration": 476168330,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.checks_remember_me()"
});
formatter.result({
  "duration": 144456748,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_logs_out_of_the_application()"
});
formatter.result({
  "duration": 2926863882,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_logs_in_again()"
});
formatter.result({
  "duration": 609729678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shivani.arora.3@warwickgrad.net",
      "offset": 12
    },
    {
      "val": "Hudl@1234",
      "offset": 59
    }
  ],
  "location": "StepDefination.user_email_something_and_password_something_should_be_autopopulated(String,String)"
});
formatter.result({
  "duration": 348739374,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Hudl@1234]\u003e but was:\u003c[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat stepDefination.StepDefination.user_email_something_and_password_something_should_be_autopopulated(StepDefination.java:107)\n\tat ✽.Then User Email \"shivani.arora.3@warwickgrad.net\" and Password \"Hudl@1234\" should be autopopulated(Login.feature:30)\n",
  "status": "failed"
});
formatter.after({
  "duration": 183862334,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Login and doesnot remember user credentials",
  "description": "",
  "id": "application-login;login-and-doesnot-remember-user-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User login into application with username shivani.arora.3@warwickgrad.net and password Hudl@1234",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User logs Out of the application",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User logs in again",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User Email and Password should be blank",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 5163586738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shivani.arora.3@warwickgrad.net",
      "offset": 42
    },
    {
      "val": "Hudl@1234",
      "offset": 87
    }
  ],
  "location": "StepDefination.user_login_into_application_with_incorrect_username_and_password(String,String)"
});
formatter.result({
  "duration": 503796181,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_logs_out_of_the_application()"
});
formatter.result({
  "duration": 3318738252,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_logs_in_again()"
});
formatter.result({
  "duration": 414694892,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_email_and_password_should_be_blank()"
});
formatter.result({
  "duration": 321962235,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[]\u003e but was:\u003c[shivani.arora.3@warwickgrad.net]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat stepDefination.StepDefination.user_email_and_password_should_be_blank(StepDefination.java:116)\n\tat ✽.Then User Email and Password should be blank(Login.feature:38)\n",
  "status": "failed"
});
formatter.after({
  "duration": 201550071,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Remember Me should be deselected by default",
  "description": "",
  "id": "application-login;remember-me-should-be-deselected-by-default",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Remember Me should be deselected",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 5317867978,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.remember_me_should_be_deselected()"
});
formatter.result({
  "duration": 48267450,
  "status": "passed"
});
formatter.after({
  "duration": 97692933,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "User email should be populated on Need Help text box",
  "description": "",
  "id": "application-login;user-email-should-be-populated-on-need-help-text-box",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "User enters username \"shivani.arora.3@warwickgrad.net\" and clicks Need Help",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "User is redirected to Reset password page",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "User email \"shivani.arora.3@warwickgrad.net\" is pre poulated",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 6047613032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shivani.arora.3@warwickgrad.net",
      "offset": 22
    }
  ],
  "location": "StepDefination.user_enters_username_something_and_clicks_need_help(String)"
});
formatter.result({
  "duration": 377323276,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_is_redirected_to_reset_password_page()"
});
formatter.result({
  "duration": 676677326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shivani.arora.3@warwickgrad.net",
      "offset": 12
    }
  ],
  "location": "StepDefination.user_email_is_pre_poulated(String)"
});
formatter.result({
  "duration": 42382925,
  "status": "passed"
});
formatter.after({
  "duration": 172087865,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "User resets password",
  "description": "",
  "id": "application-login;user-resets-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "User enters username \"shivani.arora.3@warwickgrad.net\" and clicks Need Help",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User Clicks Reset Password",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Reset Password Confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 9259000895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shivani.arora.3@warwickgrad.net",
      "offset": 22
    }
  ],
  "location": "StepDefination.user_enters_username_something_and_clicks_need_help(String)"
});
formatter.result({
  "duration": 942749616,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_clicks_reset_password()"
});
formatter.result({
  "duration": 265155123,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.reset_password_confirmation_is_displayed()"
});
formatter.result({
  "duration": 592695421,
  "status": "passed"
});
formatter.after({
  "duration": 123434778,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Login Button is enables when user starts entering password",
  "description": "",
  "id": "application-login;login-button-is-enables-when-user-starts-entering-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 59,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "User login into application with username shivani.arora.3@warwickgrad.net and password Hudl@1234",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "Log In button is disabled",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User enters password \"Hudl@1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Login button is Enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 5291777185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shivani.arora.3@warwickgrad.net",
      "offset": 42
    },
    {
      "val": "Hudl@1234",
      "offset": 87
    }
  ],
  "location": "StepDefination.user_login_into_application_with_incorrect_username_and_password(String,String)"
});
formatter.result({
  "duration": 506116467,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.log_in_button_is_disabled()"
});
formatter.result({
  "duration": 22642434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hudl@1234",
      "offset": 22
    }
  ],
  "location": "StepDefination.user_enters_password_something(String)"
});
formatter.result({
  "duration": 89679790,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.login_button_is_enabled()"
});
formatter.result({
  "duration": 22941981,
  "status": "passed"
});
formatter.after({
  "duration": 130948455,
  "status": "passed"
});
});