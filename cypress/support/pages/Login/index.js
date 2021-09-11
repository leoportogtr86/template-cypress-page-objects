///<reference types="cypress"/>

const el = require('./elements')



class Login {

    acessarLogin(url) {

        cy.visit(url)
    }


    digitarUser(user) {

        cy.get(el.inputUserName).type(user)

    }

    digitarSenha(senha) {

        cy.get(el.inputPassword).type(senha)
    }

    clicarBtnLogin() {

        cy.get(el.btnLogin).click()
    }

}




export default new Login()