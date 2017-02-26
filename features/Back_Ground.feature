Feature: Login Action

  Background:
    Given User is on Home Page
    When User Navigate to LogIn Page
    And User enters "thoodi" and "cisd6bv)tOey(lU2"


  Scenario: Successful Login with Valid Credentials
    Then Message displayed Login Successfully
    When User LogOut1 from the Application
    Then Message displayed LogOut1 Successfully
    Then i closed at 9.65 pm

  Scenario: Successful LogOut
    When User LogOut2 from the Application
    Then Message displayed LogOut2 Successfully
    Then i closed at 9.80 pm
