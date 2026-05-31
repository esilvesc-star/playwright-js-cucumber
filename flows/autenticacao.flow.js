import LoginPage from '../pages/login.page.js';

class AutenticacaoFlow {

    constructor(page) {
        this.loginPage = new LoginPage(page);
    }

    async realizarLoginValido(usuario, senha) {
        await this.loginPage.acessarSistema();
        await this.loginPage.realizarLogin(usuario, senha);
    }
}

export default AutenticacaoFlow;