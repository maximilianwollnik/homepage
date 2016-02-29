@ALL
@SOCIAL
Feature: Homepage social block
  As a visitor of the Homepage
  I should be able to see my socials 
  which shows all plattforms
  
  Background: 
    Given I navigate to "/"
    And I select "home"
  
  Scenario Outline: Social block
    When the <flag> flag is clicked
    And I scroll to the bottom
    And I click on the envelope
    Then <text> should be visible in the mail form
    And I close the form again
    
    Examples:
    | text                        | flag |
    | Schreiben Sie mir eine Mail | de   |
    | Send me a mail              | en   |
      
  Scenario: Empty form
    When I scroll to the bottom
    And I click on the envelope
    And I click on the submit button
    Then all form errors are shown
    And I close the form again
    
  Scenario: Reset form
    When I scroll to the bottom
    Then all form errors are resetted after reopening
    And I close the form again
    
  Scenario: Wrong email
    When I scroll to the bottom
    And I click on the envelope
    And I enter an invalid email address
    Then only email error is shown
    And I close the form again
    
  Scenario Outline: Social linking
    Then a link to <link> should be available
    
    Examples:
    | link            |
    | xing            |
    | facebook        |
    | github          |
    | stack-overflow  |
    | google-plus     |
    | linkedin        |
    | envelope-square |