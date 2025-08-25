Feature: https://www.webdriveruniversity.com/ - Contact us page

    Background: Contact us page navigation
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I switch to new window

    Scenario: Valid contact us form submission

        And I type a first name
        And I type a last name
        And I enter a email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message


    Scenario: Inalid contact us form submission
        And I type a first name
        And I type a last name
        # And I enter a email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful message



    Scenario: Valid contact us form submission - Using specific data
        And I type a specific first name "Sachin"
        And I type a specific last name "Woods"
        And I enter a specific email address "sachin_woods@gmail.com"
        And I type specific text "Kindly reply back as soon as possible" and a number 2 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message


    Scenario: Valid contact us form submission - Using random data
        And I type a random first name
        And I type a random last name
        And I enter a random email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message


    # Using Scenario outline - group commot steps
    # Add a blank line here before the Scenario outline starts.

    Scenario Outline: Valid contact us form
        And I type a first name <firstName> and a last name <lastName>
        And I type a email address '<emailAddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress         | comment               | message                     |
            | Tom       | West     | tom_west@gmail.com   | waiting for call back | Thank You for your Message! |
            | Jerry     | West     | jerry_west@gmail.com | waiting for call back | Thank You for your Message! |
            | Henrry    | West     | jerry_westgmail.com  | waiting for call back | Invalid email address       |