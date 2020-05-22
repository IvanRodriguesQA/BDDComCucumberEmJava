$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Cadastro de contas",
  "description": "\nComo um usuário \nGostaria de cadastrar contas\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 20,
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 25,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;1"
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 26,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 27,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3"
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Já existe uma conta com esse nome!"
      ],
      "line": 28,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 343265,
  "status": "passed"
});
formatter.before({
  "duration": 98007,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 9,
      "value": "#Background"
    }
  ],
  "line": 10,
  "name": "# Define os passos que são sempre executados nos cenários",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "informo o usuário \"ivan.assis@teste\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "a senha \"teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 16,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 11629587769,
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
  "duration": 381715627,
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
  "duration": 902094605,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 895118602,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 44202804,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 266090104,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 456752880,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "informo a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 102537535,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 524402600,
  "status": "passed"
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
  "duration": 43240294,
  "status": "passed"
});
formatter.after({
  "duration": 278077106,
  "status": "passed"
});
formatter.after({
  "duration": 1988400634,
  "status": "passed"
});
formatter.before({
  "duration": 156030,
  "status": "passed"
});
formatter.before({
  "duration": 173583,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 9,
      "value": "#Background"
    }
  ],
  "line": 10,
  "name": "# Define os passos que são sempre executados nos cenários",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "informo o usuário \"ivan.assis@teste\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "a senha \"teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 16,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 10017866895,
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
  "duration": 164788618,
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
  "duration": 93504863,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1696091644,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 69103237,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 257073521,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 530280542,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "informo a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 54968385,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 419884948,
  "status": "passed"
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
  "duration": 58789656,
  "status": "passed"
});
formatter.after({
  "duration": 101779814,
  "status": "passed"
});
formatter.after({
  "duration": 1811117428,
  "status": "passed"
});
formatter.before({
  "duration": 135551,
  "status": "passed"
});
formatter.before({
  "duration": 96544,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 9,
      "value": "#Background"
    }
  ],
  "line": 10,
  "name": "# Define os passos que são sempre executados nos cenários",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "informo o usuário \"ivan.assis@teste\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "a senha \"teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 16,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 9861325436,
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
  "duration": 100313133,
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
  "duration": 55240462,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1441905165,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 123646439,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 259204306,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 503586739,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "informo a conta \"Conta mesmo nome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta mesmo nome",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 91230238,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 477853983,
  "status": "passed"
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
  "duration": 73724163,
  "status": "passed"
});
formatter.after({
  "duration": 101888548,
  "status": "passed"
});
formatter.after({
  "duration": 1964048744,
  "status": "passed"
});
});