import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

Before(async function () {
  // Abre o navegador antes de cada cenário
  this.browser = await chromium.launch({
    headless: false
  });

  // Cria uma nova página/aba do navegador
  this.page = await this.browser.newPage();
});

After(async function () {
  // Fecha o navegador depois de cada cenário
  await this.browser.close();
});