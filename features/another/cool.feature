Feature: add another
    As a mathematician
    I want to add two numbers
    In order to get a result

Scenario: simple addition
    Given numbers "2" and "3"
    When I add the numbers
    Then I expect the result to be "5"
