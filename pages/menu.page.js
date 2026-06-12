class MenuLateralPage {
  constructor(page) {
    this.page = page;

    this.botaoMenu = this.page.locator('#react-burger-menu-btn');
    this.opcaoAllItems = this.page.locator('[data-test="inventory-sidebar-link"]');
  }

  async abrirMenu() {
  console.log('Tentando clicar no menu');

  await this.page.waitForURL(/inventory/);

  await this.botaoMenu.click({ timeout: 10000 });

  console.log('Clique realizado');

  await this.opcaoAllItems.waitFor({
    state: 'visible',
    timeout: 10000
  });

  console.log('Menu aberto com sucesso');
}

  async validarOpcaoVisivel(nomeOpcao) {
    await this.page.getByText(nomeOpcao, { exact: true }).waitFor({
      state: 'visible'
    });
  }

  async validarOpcoesVisiveis(opcoes) {
    for (const opcao of opcoes) {
      await this.validarOpcaoVisivel(opcao);
    }
  }
}

export default MenuLateralPage;