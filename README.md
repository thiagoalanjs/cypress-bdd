![image](https://github.com/user-attachments/assets/d8428f91-dcdc-4e03-9928-b52a1c4cafb2)


# Automação com Cypress 

Esse projeto é um exemplo de teste automatizado com Cypress e Cucumber 

Site usado para os testes - https://www.saucedemo.com

## Instalação & Configuração


Cypress - https://www.cypress.io/install

Cucumber com JS - https://cucumber.io/docs/installation/javascript/

NodeJS - https://nodejs.org/pt/download/package-manager

Npm - https://docs.npmjs.com/cli/v10/commands/npm-install

Docker - https://docs.docker.com/engine/install/

Yarn - https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable

## Executando automação 
```bash
  

"scripts": {
    "cy:test-open": "yarn cypress open --env confiFile=test",
    "cy:test-headless": "yarn cypress run --env confiFile=test --browser chrome",
    "postcy:test-open": "node ./cypress/support/cucumber-html-reporter.js",
    "postcy:test-headless": "node ./cypress/support/cucumber-html-reporter.js"
},


#Rodando com yarn:
yarn cy:test-open

#Rodando modo headless:
yarn:test-headless 
```
![image](https://github.com/user-attachments/assets/ded6b6b9-1fa0-4a3a-a70e-88346fe2073f)

![image](https://github.com/user-attachments/assets/deae7662-f1fd-4572-b0f2-26ef9514dd65)


## Reports

Comando para gerar reports:

"allure serve allure-results target/allure-results/" 

![image](https://github.com/user-attachments/assets/e3d34349-d07f-4e6f-9f69-9c03063a588b)


![image](https://github.com/user-attachments/assets/65601414-ba03-4410-910c-4775aeb18985)
