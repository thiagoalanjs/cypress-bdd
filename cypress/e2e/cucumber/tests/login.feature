Feature: Login

Background:
    Given I open the website
    
    Scenario: Success Login
        When I log in with valid credentials
        Then I see the message "Products"

    Scenario: Invalid Login
        When I log in with invalid credentials
        Then I see the message "Epic sadface: Username and password do not match any user in this service"

    Scenario: Empty username
        When I log in with empty username
        Then I see the message "Epic sadface: Username is required"

    Scenario: Empty password  
        When I log in with empty password
        Then I see the message "Epic sadface: Password is required"  
