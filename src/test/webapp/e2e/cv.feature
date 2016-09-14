@ALL
@CV
Feature: Homepage cv entry
  As a visitor of the Homepage
  I should be able to see my cv 
  which gives an overview of my life
  
  Background: 
    Given I navigate to "/"
    And I select "cv"
  
  Scenario Outline: CV view
    When I scroll to the top
    And the <flag> flag is clicked
    Then <text> should NOT be visible
    And "cvwrap" must be in the display area
    
    Examples:
    | text            | flag |
    | CV.HEADLINE.PRE | de   |
    | CV.HEADLINE.PRE | en   |

  Scenario Outline: Timeline content
    When the <flag> flag is clicked
    Then <text> should be visible in the timeline
    
    Examples:
    | text     | flag |
    | Das habe | de   |
    | That is  | en   |
    
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
  
  Scenario: Amount of experiences
    Then "15" entries must be visible in the timeline
    
  Scenario Outline: Back navigation
    And I select "skill"
    When I click on the back button
    Then <text> should be visible in the timeline 
    
    Examples:
    | text     |
    | Das habe |