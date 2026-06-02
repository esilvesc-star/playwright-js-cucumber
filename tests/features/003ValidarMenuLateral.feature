Feature: 003 Validar Menu Lateral

  Como usuário do site SauceDemo
  Quero acessar o menu lateral após login
  Para visualizar todas as opções disponíveis

  Background:
    Given que eu acesse o sistema

  @regressivo
  Scenario: Validar exibição do menu lateral

    When o usuário faz login com "standard_user" e "secret_sauce"
    And eu abro o menu lateral

    Then devo visualizar as seguintes opções:
      | opcao           |
      | All Items       |
      | About           |
      | Logout          |
      | Reset App State |

      