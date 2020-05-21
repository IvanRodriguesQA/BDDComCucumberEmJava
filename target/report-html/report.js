$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Cadastro de contas",
  "description": "\nComo um usuário \nGostaria de cadastrar contas\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 19,
  "name": "informo a conta \"\u003c\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 24,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;1"
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 25,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 26,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3"
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Já existe uma conta com esse nome!"
      ],
      "line": 27,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 338389,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 8,
      "value": "#Background"
    }
  ],
  "line": 9,
  "name": "# Define os passos que são sempre executados nos cenários",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "informo o usuário \"ivan.assis@teste\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "a senha \"teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 15,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 15667212607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ivan.assis@teste",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 726645109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 172171410,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1954318060,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 86968733,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 286917731,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 710164523,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 19,
  "name": "informo a conta \"\u003c\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c\u003e",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 216280868,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3158799707,
  "status": "passed"
});
formatter.before({
  "duration": 153104,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 8,
      "value": "#Background"
    }
  ],
  "line": 9,
  "name": "# Define os passos que são sempre executados nos cenários",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "informo o usuário \"ivan.assis@teste\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "a senha \"teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 15,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 15332876623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ivan.assis@teste",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 454584284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 925787631,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 858193826,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 72709126,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 270106071,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 709170812,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 19,
  "name": "informo a conta \"\u003c\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c\u003e",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 180015779,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2099130722,
  "status": "passed"
});
formatter.before({
  "duration": 109708,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 8,
      "value": "#Background"
    }
  ],
  "line": 9,
  "name": "# Define os passos que são sempre executados nos cenários",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "informo o usuário \"ivan.assis@teste\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "a senha \"teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 15,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 14746001996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ivan.assis@teste",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 205216934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 754743045,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 833962976,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 82909048,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 277005487,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 677283804,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 19,
  "name": "informo a conta \"\u003c\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c\u003e",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 95198299,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2107790344,
  "status": "passed"
});
});