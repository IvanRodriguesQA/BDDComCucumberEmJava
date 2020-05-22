# language: pt  
@unitários
Funcionalidade: Alugar Filme
	Como um usuário
	Eu quero cadastrar aluguéis de filmes 
	Para controlar preços e datas de entrega
	

Cenário: Deve alugar um filme com sucesso
 #Sem DataTable	
	#Dado um filme com estoque de 2 unidades
	#E que o preço de aluguel seja R$ 3
		
	Dado um filme     
	 | estoque | 2		 |
	 | preco   | 3 		 |
	 | tipo    | comum |
	
	Quando alugar
	Então o preço do aluguel será R$ 3
	E a data de entrega será em 1 dia
	E o estoque do filme será 1 unidade

	
Cenário: Não deve alugar filme sem estoque
	Dado um filme com estoque de 0 unidades
	Quando alugar
	Então não será possível por falta de estoque
	E o estoque do filme será 0 unidade
	
#Scenario Outline	
Esquema do Cenário: Deve dar condições conforme tipo de aluguel
	Dado um filme com estoque de 2 unidades
	E que o preço de aluguel seja R$ <preco>
	E que o preço de aluguel seja R$ <preco>
	E que o tipo de aluguel seja <tipo> 
	Quando alugar
	Então o preço do aluguel será R$ <valor>
	E a data de entrega será em <qtdDias> dias
	E a pontuação será de <pontuacao> pontos
	
#Examples
Exemplos:	
	|  preco  |  tipo       |  valor  | qtdDias  |  pontuacao  |
	|    4    |  extendido  |    8		|    3     |     2       |
	|    4    |  comum      |    4		|    1     |     1       |
	|    10   |  extendido  |   20		|    3     |     2       |
	|    5    |  semanal		|   15		|    7     |     3       |

# Cenário antes de criar o Esquema do Cenário
#Cenário: Deve dar condições especiais para categoria extendida 
	#Dado um filme com estoque de 2 unidades
	#E que o preço de aluguel seja R$ 4
	#E que o tipo de aluguel seja extendido 
	#Quando alugar
	#Então o preço do aluguel será R$ 8
	#E a data de entrega será em 3 dias
	#E a pontuação será de 2 pontos
	

#Cenário: Deve alugar para categoria comum
	#Dado um filme com estoque de 2 unidades
	#E que o preço de aluguel seja R$ 4
	#E que o tipo de aluguel seja comum 
	#Quando alugar
	#Então o preço do aluguel será R$ 4
	#E a data de entrega será em 1 dia
	#E a pontuação será de 1 pontos
	