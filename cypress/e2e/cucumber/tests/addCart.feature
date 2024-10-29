Feature: Add product to cart
    Background:
        Given I log in webstore

    Scenario: Add product
        When I add product to cart    
        Then I finish checkout order
