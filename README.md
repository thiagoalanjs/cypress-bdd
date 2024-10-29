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

Trecho do arquivo package.json  
...

"scripts": {
    "cy:test-open": "yarn cypress open --env confiFile=test",
    "cy:test-headless": "yarn cypress run --env confiFile=test --browser chrome",
    "postcy:test-open": "node ./cypress/support/cucumber-html-reporter.js",
    "postcy:test-headless": "node ./cypress/support/cucumber-html-reporter.js"
}

...


#Rodando com yarn:
yarn cy:test-open

#Rodando modo headless:
yarn:test-headless 
```
![image](https://github.com/user-attachments/assets/ded6b6b9-1fa0-4a3a-a70e-88346fe2073f)

![image](https://github.com/user-attachments/assets/deae7662-f1fd-4572-b0f2-26ef9514dd65)


## Reports

npm install cypress-cucumber-preprocessor
npm install cucumber-html-reporter --save-dev


![image](https://github.com/user-attachments/assets/3ea7d6aa-7d0c-40c1-8fc6-53c5372c7c7c)

