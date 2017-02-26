$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Back_Ground.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16262555946,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"thoodi\" and \"cisd6bv)tOey(lU2\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestClass.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 10301152276,
  "status": "passed"
});
formatter.match({
  "location": "TestClass.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 778538754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thoodi",
      "offset": 13
    },
    {
      "val": "cisd6bv)tOey(lU2",
      "offset": 26
    }
  ],
  "location": "TestClass.user_enters_and(String,String)"
});
formatter.result({
  "duration": 6395704337,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User LogOut1 from the Application",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Message displayed LogOut1 Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "i closed at 9.65 pm",
  "keyword": "Then "
});
formatter.match({
  "location": "TestClass.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 1775801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    }
  ],
  "location": "TestClass.user_LogOut_from_the_Application(int)"
});
formatter.result({
  "duration": 7208912510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "TestClass.message_displayed_LogOut_Successfully(int)"
});
formatter.result({
  "duration": 445630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 12
    },
    {
      "val": "65",
      "offset": 14
    }
  ],
  "location": "TestClass.i_closed_at_pm(int,int)"
});
formatter.result({
  "duration": 531753,
  "status": "passed"
});
formatter.after({
  "duration": 133923503,
  "status": "passed"
});
formatter.before({
  "duration": 13800209066,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"thoodi\" and \"cisd6bv)tOey(lU2\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestClass.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 7730572353,
  "status": "passed"
});
formatter.match({
  "location": "TestClass.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 775903299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thoodi",
      "offset": 13
    },
    {
      "val": "cisd6bv)tOey(lU2",
      "offset": 26
    }
  ],
  "location": "TestClass.user_enters_and(String,String)"
});
formatter.result({
  "duration": 6723389739,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Successful LogOut",
  "description": "",
  "id": "login-action;successful-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User LogOut2 from the Application",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Message displayed LogOut2 Successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "i closed at 9.80 pm",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    }
  ],
  "location": "TestClass.user_LogOut_from_the_Application(int)"
});
formatter.result({
  "duration": 8129812886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "TestClass.message_displayed_LogOut_Successfully(int)"
});
formatter.result({
  "duration": 416395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 12
    },
    {
      "val": "80",
      "offset": 14
    }
  ],
  "location": "TestClass.i_closed_at_pm(int,int)"
});
formatter.result({
  "duration": 438124,
  "status": "passed"
});
formatter.after({
  "duration": 124551457,
  "status": "passed"
});
});