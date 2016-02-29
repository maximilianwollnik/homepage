@ALL
@HOME
Feature: Homepage main entry
  As a visitor of the Homepage
  I should be able to see a welcome screen 
  which gives a first impression
  
  Background: 
    Given I navigate to "/"

  Scenario Outline: First View
    When the <flag> flag is clicked
    Then the title should equal "Maximilian Wollnik"
    And <text> should be visible
    
    Examples:
    | text       | flag |
    | Entwickler | de   |
    | Developer  | en   |
  
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
    
  Scenario: Mobile Version
    Then the navigation should be changed into a toggle object