import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import AutenticacaoFlow from '../../flows/autenticacao.flow.js';

// =====================================================
// GIVEN
// Executa antes dos cenários que precisam acessar o sistema
// =====================================================
Given('que eu acesse o sistema', async function () {

  // Cria uma instância do fluxo de autenticação
  // e passa a página do Playwright para ele
  this.autenticacaoFlow = new AutenticacaoFlow(this.page);

  // Chama o método responsável por abrir a aplicação
  // utilizando a URL definida no arquivo .env
  await this.autenticacaoFlow.loginPage.acessarSistema();
});


// =====================================================
// WHEN
// Executa a ação de login utilizando usuário e senha
// recebidos da Feature
// =====================================================
When(
  'o usuário faz login com {string} e {string}',
  async function (usuario, senha) {

    // Preenche usuário, senha e clica em Login
    await this.autenticacaoFlow.loginPage.realizarLogin(usuario, senha);
  }
);


// =====================================================
// THEN
// Valida se após o login o usuário foi direcionado
// para a página de produtos
// =====================================================
Then(
  'devo ser redirecionado para a página de produtos',
  async function () {

    // Verifica se a URL contém "inventory"
    await expect(this.page).toHaveURL(/inventory/);
  }
);


// =====================================================
// THEN
// Valida mensagens de erro apresentadas no login
// =====================================================
Then(
  'o sistema deve exibir a mensagem {string}',
  async function (mensagemEsperada) {

    // Captura a mensagem exibida na tela
    const mensagemObtida =
      await this.autenticacaoFlow.loginPage.obterMensagemErro();

    // Compara a mensagem da tela com a esperada na Feature
    expect(mensagemObtida).toBe(mensagemEsperada);
  }
);


// =====================================================
// WHEN
// Abre o menu lateral
// Atualmente apenas imprime uma mensagem no terminal
// =====================================================
When(
  'eu abro o menu lateral',
   async function () {

    console.log('INICIO STEP MENU');

    await this.autenticacaoFlow.menuPage.abrirMenu();

    console.log('FIM STEP MENU');
  }
);


// =====================================================
// THEN
// Recebe a tabela da Feature
// e transforma em um array JavaScript
// =====================================================

Then(
  'devo visualizar as seguintes opções:',
  async function (dataTable) {

    console.log('INICIO VALIDACAO OPCOES');

    const opcoes = dataTable.raw().flat().slice(1);

    console.log(opcoes);

    await this.autenticacaoFlow.menuPage
      .validarOpcoesVisiveis(opcoes);

    console.log('FIM VALIDACAO OPCOES');
  }
);