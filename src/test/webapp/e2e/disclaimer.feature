@ALL
@DISCLAIMER
Feature: Homepage disclaimer entry
  As a visitor of the Homepage
  I should be able to see my disclaimer 
  which gives an overview of the legal stuff
  
  Background: 
    Given I navigate to "/"
    And I select "disclaimer"
  
  Scenario Outline: Disclaimer view
    When I scroll to the top
    And the <flag> flag is clicked
    Then <text> should NOT be visible
    And "disclaimerwrap" must be in the display area
    
    Examples:
    | text                    | flag |
    | DISCLAIMER.HEADLINE.PRE | de   |
    | DISCLAIMER.HEADLINE.PRE | en   |
    
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
  
  Scenario: Amount of paragraphs
    Then "6" entries must be visible in the disclaimer