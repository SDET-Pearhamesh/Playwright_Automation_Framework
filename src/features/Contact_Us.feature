Feature: https://www.webdriveruniversity.com/ - Contact us page
    Scenario: Valid contact us form submission
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I switch to new window
        And I type a first name
        And I type a last name
        And I enter a email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message


    Scenario: Inalid contact us form submission
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I switch to new window
        And I type a first name
        And I type a last name
        # And I enter a email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful message



    Scenario: Valid contact us form submission - Using specific data
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I switch to new window
        And I type a specific first name "Sachin"
        And I type a specific last name "Woods"
        And I enter a specific email address "sachin_woods@gmail.com"
        And I type specific text "Kindly reply back as soon as possible" and a number 2 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message


    Scenario: Valid contact us form submission - Using random data
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I switch to new window
        And I type a random first name
        And I type a random last name
        And I enter a random email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message


# 


