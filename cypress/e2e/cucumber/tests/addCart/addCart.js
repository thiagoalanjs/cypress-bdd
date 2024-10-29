import loginPage from "../../pages/loginPage"
import inventaryPage from "../../pages/inventaryPage"
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given("I log in webstore",()=>{
    loginPage.openUrl()
    loginPage.typeValidCredential()
})

When("I add product to cart",()=>{
    inventaryPage.addProductCart()
})

Then("I finish checkout order",()=>{
    inventaryPage.finishOrder()
})

