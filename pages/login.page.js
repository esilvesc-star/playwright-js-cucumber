class LoginPage {
  constructor(page) {
    this.page = page;

    // ==========================
    // MAPEAMENTO DOS ELEMENTOS
    // ==========================

    this.campoUsuario = page.locator('#user-name');
    this.campoSenha = page.locator('#password');
    this.botaoLogin = page.locator('#login-button');
    this.tituloProdutos = page.locator('.title');
    this.mensagemErro = page.locator(`[data-test="error"]`);
  }

    // ==========================
    // NAVEGAÇÃO
    // ==========================

    // Metodo para abrir o sistema utilizando a URL configurada no .env
  async acessarSistema() {
    await this.page.goto(process.env.BASE_URL);
  }

    // Metodo para obter a mensagem de erro na tela
  async obterMensagemErro() {
return await this.mensagemErro.textContent();
  }  

    // ==========================
    // AÇÕES ISOLADAS
    // ==========================

  async realizarLogin(usuario, senha) {
    await this.campoUsuario.fill(usuario);
    await this.campoSenha.fill(senha);
    await this.botaoLogin.click();
  }
}

export default LoginPage;