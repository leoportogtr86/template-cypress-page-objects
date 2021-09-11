///<reference types="cypress"/>
import Login from '../support/pages/Login/index'
import el from '../support/pages/Login/elements'


describe('Teste de login', () => {

    it('Deve logar na página do sauce demo', () => {

        Login.acessarLogin('https://www.saucedemo.com/')
        cy.garantirQueElementoExista(el.inputUserName)
        Login.digitarUser('standard_user')
        cy.garantirQueElementoExista(el.inputPassword)
        Login.digitarSenha('secret_sauce')
        cy.garantirQueElementoExista(el.btnLogin)
        Login.clicarBtnLogin()
        cy.garantirQueElementoExista('.title')



    });
});