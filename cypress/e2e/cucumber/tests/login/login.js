import loginPage from "../../pages/loginPage"
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given("I open the website", ()=>{
    loginPage.openUrl()
})

When("I log in with valid credentials", ()=>{
    loginPage.typeValidCredential()
})

Then("I see the message {string}", (text) => {
    loginPage.checkInformationText(text)
})

When("I log in with invalid credentials", ()=>{
    loginPage.typeInvalidCredential()
})

Then("I see the message {string}", (text)=>{
    loginPage.checkInformationText(text)
})

Then("I see the message {string}", (text)=>{
    loginPage.checkInformationText(text)
})

When("I log in with empty username", ()=>{
    loginPage.typeOnlyPassword()
})

Then("I see the message {string}", (text)=>{
    loginPage.checkInformationText(text)
})

Then("I see the message {string}", (text)=>{
    loginPage.checkInformationText(text)
})

When("I log in with empty password", ()=>{
    loginPage.typeOnlyUsername()
})

Then("I see the message {string}", (text)=>{
    loginPage.checkInformationText(text)
})

