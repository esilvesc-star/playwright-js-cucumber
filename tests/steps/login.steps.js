import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import AutenticacaoFlow from '../../flows/autenticacao.flow.js';

Given('que eu acesse o sistema', async function () {
  this.autenticacaoFlow = new AutenticacaoFlow(this.page);
  await this.autenticacaoFlow.loginPage.acessarSistema();
});

When(
  'o usuário faz login com {string} e {string}',
  async function (usuario, senha) {
    await this.autenticacaoFlow.loginPage.realizarLogin(usuario, senha);
  }
);

Then(
  'devo ser redirecionado para a página de produtos',
  async function () {
    await expect(this.page).toHaveURL(/inventory/);
  }
)

Then(
  'o sistema deve exibir a mensagem {string}',
  async function (mensagemEsperada) {
    const mensagemObtida = await this.autenticacaoFlow.loginPage.obterMensagemErro();

    expect(mensagemObtida).toBe(mensagemEsperada);
  }
);
