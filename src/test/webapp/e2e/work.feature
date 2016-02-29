@ALL
@WORK
Feature: Homepage work entry
  As a visitor of the Homepage
  I should be able to see my work 
  which gives an impression of some samples
  
  Background: 
    Given I navigate to "/"
    And I select "work"
  
  Scenario Outline: Work view
    When I scroll to the top
    And the <flag> flag is clicked
    Then <text> should NOT be visible
    And "workwrap" must be in the display area
    
    Examples:
    | text              | flag |
    | WORK.HEADLINE.PRE | de   |
    | WORK.HEADLINE.PRE | en   |
  
  Scenario Outline: Basic work elements
    When the <flag> flag is clicked
    Then <text> should be visible in the upper part
    
    Examples:
    | text    | flag |
    | Muster  | de   |
    | Samples | en   |
    
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
    Then 2 samples must be available