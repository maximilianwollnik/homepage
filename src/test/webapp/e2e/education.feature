@ALL
@EDUCATION
Feature: Homepage education entry
  As a visitor of the Homepage
  I should be able to see my education 
  which gives an overview of my education
  
  Background: 
    Given I navigate to "/"
    And I select "education"
  
  Scenario Outline: Education view
    When I scroll to the top
    And the <flag> flag is clicked
    Then <text> should NOT be visible
    And "educationwrap" must be in the display area
    
    Examples:
    | text                   | flag |
    | EDUCATION.HEADLINE.PRE | de   |
    | EDUCATION.HEADLINE.PRE | en   |
  
  Scenario Outline: Basic education elements
    When the <flag> flag is clicked
    Then <text> should be visible in the upper part
    
    Examples:
    | text       | flag |
    | Ausbildung | de   |
    | Education  | en   |
    
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
  
  Scenario: Education is listed
    Then FHDW must be visible