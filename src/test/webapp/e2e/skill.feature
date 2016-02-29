@ALL
@SKILL
Feature: Homepage skill entry
  As a visitor of the Homepage
  I should be able to see my skills 
  which gives a first impression
  
  Background: 
    Given I navigate to "/"
    And I select "skill"
  
  Scenario Outline: Work view
    When I scroll to the top
    And the <flag> flag is clicked
    Then <text> should NOT be visible
    And "skillwrap" must be in the display area
    
    Examples:
    | text               | flag |
    | SKILL.HEADLINE.PRE | de   |
    | SKILL.HEADLINE.PRE | en   |
  
  Scenario Outline: Basic skill elements
    When the <flag> flag is clicked
    Then <text> should be visible in the carousel 
    
    Examples:
    | text    | flag |
    | Angular | de   |
    | Angular | en   |
    
  Scenario Outline: Dummy text removed
    When the <flag> flag is clicked
    Then <text> should NOT be visible
    
    Examples:
    | text        | flag |
    | Lorem Ipsum | de   |
    | Lorem Ipsum | en   |
  
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
  
  Scenario: Footer information
    Then a footer must be available
  
  Scenario: Samples is listed
    Then 10 skills must be available