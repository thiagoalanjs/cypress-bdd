Feature: Add product to cart
    Background:
        Given I log in webstore

    Scenario: Checkout Information empty data
        When I add product to cart    
        Then I finish checkout with empty fields 

    Scenario: Add product success
        When I add product to cart    
        Then I finish checkout order
