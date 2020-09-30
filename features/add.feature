Feature: add
    As a mathematician
    I want to add two numbers
    In order to get a result

Background:
    Given some condition

Scenario: simple addition
    Given numbers "2" and "3"
    When I add the numbers
    Then I expect the result to be "5"

Scenario Outline: more simple additions
    Given numbers <first> and <second>
    When I add the numbers
    Then I expect the result to be <result>
    Examples:
        | first | second | result |
        | 5     | 9      | 14     |
        | 6     | 7      | 13     |
