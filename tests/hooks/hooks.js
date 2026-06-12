import { Before, After, Status } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

Before(async function () {
  // Abre o navegador antes de cada cenário
  this.browser = await chromium.launch({
    headless: false
  });

  // Cria uma nova página/aba
  this.page = await this.browser.newPage();
});

After(async function (scenario) {
  // Tira screenshot ao final de cada cenário
  const screenshot = await this.page.screenshot({
    fullPage: true
  });

  // Anexa a evidência no relatório Allure/Cucumber
  await this.attach(
    screenshot,
    'image/png'
  );

  // Fecha o navegador depois de cada cenário
  await this.browser.close();
});