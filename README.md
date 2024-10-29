![image](https://github.com/user-attachments/assets/5f10a55d-13b1-43de-8519-ce1d244c8de0)


# Automação com Cypress 

Esse projeto é um exemplo de teste automatizado com Cypress e Cucumber 

Site usado para os testes - https://www.saucedemo.com

## Instalação & Configuração


Cypress - https://www.cypress.io/install

Cucumber com JS - https://cucumber.io/docs/installation/javascript/

NodeJS - https://nodejs.org/pt/download/package-manager

Npm - https://docs.npmjs.com/cli/v10/commands/npm-install

Docker - https://docs.docker.com/engine/install/

## Configurando o comando 
```bash
Para MAC/Linux   System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver");

Para Windows   System.setProperty("webdriver.chrome.driver", "C://<PATH DO CHROMEDRIVER NA SUA MÁQUINA>");
```

## Comando mvn

```bash
"mvn clean install" - Instalação das dependências
"mvn clean test" -  Roda todos os testes que estão no pacote Tests
"mvn clean test -DfailIfNoTests=false  -Dtest=Tests.loginUserTest" - Roda somente um arquivo nesse exemplo 'loginUserTest'
```

![image](https://github.com/user-attachments/assets/0f7fc1f2-d081-4b90-af0b-574a2341b2d0)

## Reports do Allure

Comando para gerar reports:

"allure serve allure-results target/allure-results/" 

![image](https://github.com/user-attachments/assets/e3d34349-d07f-4e6f-9f69-9c03063a588b)


![image](https://github.com/user-attachments/assets/65601414-ba03-4410-910c-4775aeb18985)
