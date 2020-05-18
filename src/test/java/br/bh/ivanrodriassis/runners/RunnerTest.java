package br.bh.ivanrodriassis.runners;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
//		features = "src/test/resources/features/aprender_cucumber.feature",
		features = "src/test/resources/features/alugar_filme.feature",		
		glue = "br.bh.ivanrodriassis.steps",
		tags = {}, // permite executar cenários ou feature desejada, basta adicionar o identificador "@esse", "~@ignore" / {"@tipo1", "@tipo2"} / {"@tipo1, @tipo2"} / 
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
		monochrome = true, // junto com o plugin não exibe mais caracteres especiais, mais agradável
		snippets = SnippetType.CAMELCASE,  /* o método segue o padrão da linguagem java. Exemplo "abrirBrowser". Primeira letra de cada palavra em maiúsculo */
		dryRun = false,  // Validar se o mapeamento está correto, útil na montagem do cenário, se estiver ok voltar para exc. normal
		strict = false // Exibe erro ao identificar passos a mais no script
	)

public class RunnerTest {
	
}
