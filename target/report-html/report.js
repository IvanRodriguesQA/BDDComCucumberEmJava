$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/alugar_filme.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Alugar Filme",
  "description": "Como um usuário\r\nEu quero cadastrar aluguéis de filmes \r\nPara controlar preços e datas de entrega",
  "id": "alugar-filme",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 9,
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "id": "alugar-filme;deve-alugar-um-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Sem DataTable"
    },
    {
      "line": 11,
      "value": "#Dado um filme com estoque de 2 unidades"
    },
    {
      "line": 12,
      "value": "#E que o preço de aluguel seja R$ 3"
    }
  ],
  "line": 14,
  "name": "um filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ],
      "line": 15
    },
    {
      "cells": [
        "preco",
        "3"
      ],
      "line": 16
    },
    {
      "cells": [
        "tipo",
        "comum"
      ],
      "line": 17
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "o preço do aluguel será R$ 3",
  "keyword": "Então "
});
formatter.step({
  "line": 21,
  "name": "a data de entrega será em 1 dia",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "o estoque do filme será 1 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilme(DataTable)"
});
formatter.result({
  "duration": 2201423474,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 48871275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 11074173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 1393535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 161392,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Não deve alugar filme sem estoque",
  "description": "",
  "id": "alugar-filme;não-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 28,
  "name": "não será possível por falta de estoque",
  "keyword": "Então "
});
formatter.step({
  "line": 29,
  "name": "o estoque do filme será 0 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 158955,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 137013,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.nãoSeráPossívelPorFaltaDeEstoque()"
});
formatter.result({
  "duration": 56561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 130674,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 31,
      "value": "#Scenario Outline"
    }
  ],
  "line": 32,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 33,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 34,
  "name": "que o preço de aluguel seja R$ \u003cpreco\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "que o preço de aluguel seja R$ \u003cpreco\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "que o tipo de aluguel seja \u003ctipo\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 38,
  "name": "o preço do aluguel será R$ \u003cvalor\u003e",
  "keyword": "Então "
});
formatter.step({
  "line": 39,
  "name": "a data de entrega será em \u003cqtdDias\u003e dias",
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "a pontuação será de \u003cpontuacao\u003e pontos",
  "keyword": "E "
});
formatter.examples({
  "comments": [
    {
      "line": 42,
      "value": "#Examples"
    }
  ],
  "line": 43,
  "name": "",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontuacao"
      ],
      "line": 44,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;1"
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ],
      "line": 45,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;2"
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ],
      "line": 46,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;3"
    },
    {
      "cells": [
        "10",
        "extendido",
        "20",
        "3",
        "2"
      ],
      "line": 47,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;4"
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ],
      "line": 48,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;5"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 45,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 33,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 34,
  "name": "que o preço de aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "que o preço de aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "que o tipo de aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 38,
  "name": "o preço do aluguel será R$ 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 39,
  "name": "a data de entrega será em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "a pontuação será de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 137988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 149203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 121410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDeAlguelSejaExtendido(String)"
});
formatter.result({
  "duration": 103369,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 111659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 199912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 429568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 172608,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 33,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 34,
  "name": "que o preço de aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "que o preço de aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "que o tipo de aluguel seja comum",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 38,
  "name": "o preço do aluguel será R$ 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 39,
  "name": "a data de entrega será em 1 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "a pontuação será de 1 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 177971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 133112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 144327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comum",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDeAlguelSejaExtendido(String)"
});
formatter.result({
  "duration": 137988,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 116534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 139451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 436882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 141889,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 33,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 34,
  "name": "que o preço de aluguel seja R$ 10",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "que o preço de aluguel seja R$ 10",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "que o tipo de aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 38,
  "name": "o preço do aluguel será R$ 20",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 39,
  "name": "a data de entrega será em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "a pontuação será de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 174070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 151641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 130187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDeAlguelSejaExtendido(String)"
});
formatter.result({
  "duration": 93618,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 169194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 235506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 475401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 271588,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 33,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 34,
  "name": "que o preço de aluguel seja R$ 5",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "que o preço de aluguel seja R$ 5",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "que o tipo de aluguel seja semanal",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 38,
  "name": "o preço do aluguel será R$ 15",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 39,
  "name": "a data de entrega será em 7 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "a pontuação será de 3 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 177483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 157004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 154566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "semanal",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDeAlguelSejaExtendido(String)"
});
formatter.result({
  "duration": 140914,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 401288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 174558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 458336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 150178,
  "status": "passed"
});
});