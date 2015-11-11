## Brownbag Kekanto
#### Acelerando o desenvolvimento no front-end
* [matheus.cesario@kekanto.com](mailto:matheus.cesario@kekanto.com)
* [github.com/matheus-santos](https://github.com/matheus-santos)

------------
[//]: # (Why)

## Cascading Style Sheets (CSS)
Linguagem que descreve o estilo de um documento
```css
.div {
    border: 1px solid red
    background-color: white
}
```

---
## Cascading Style Sheets (CSS)
Podemos descrever o elemento de diversas formas:

* Elemento (`div`, `button`, `span`)
* Classes (`.btn-success`, `.block`)
* Ids (`#item-1`, `#item-2`)

---
## Cascading Style Sheets (CSS)
Meu primeiro estilo
```css
<link rel="stylesheet" type="text/css" href="theme.css">
```

---
## Cascading Style Sheets (CSS)
Alguns problemas recorrentes do dev CSS:

* Recarregamento de toda a página (ruim)
* Fácil de perder o controle
* Descrições redundantes
* Conflitos de declarações
* Problemas com modularidade

---
## Cascading Style Sheets (CSS)
A solução para isso? Dividir o projeto em componentes:

* `buttons.css`
* `box.css`
* `inputs.css`



------------
[//]: # (How)
## Automatizando processos
Como manter a sanidade em um projeto CSS grande?

* Componentes
* Tarefas agendadas (_tasks_)
* Observadores (_watchers_)

---
## Automatizando processos
Cuidar manualmente dos componentes é uma tarefa:

* Cansativa 
* Passiva de erros
* Desafiadora pois aumenta a complexidade do projeto
* Demorada

---
## Automatizando processos
Afortunadamente, existem ferramentas que tornam o processo automático e simples.



------------
[//]: # (What)
## Ferramentas
[Gulp](https://github.com/gulpjs/gulp) é uma ferramenta
que nos ajuda a automatizar processos repetitivos como:

* Concatenar
* Minificar
* Validar código (lint)

---
## Ferramentas
Setup:
```bash
npm install --save-dev gulp
```

Task:
```javascript
var gulp = require("gulp");

gulp.task("default", function() {
  // place code for your default task here
});
```

Run:
```css
gulp
```

---
## Ferramentas
Com o Gulp, podemos automatizar processos complexos como a **compilação** de arquivos.

---
## Syntatically Awesome Style Sheets (SASS)
[SASS](http://sass-lang.com/) é uma extensão do CSS que facilita o desenvolvimento de estilos.

---
## Syntatically Awesome Style Sheets (SASS)
Setup
```bash
# From http://sass-lang.com/install
sudo su -c "gem install sass"
```

---
## Syntatically Awesome Style Sheets (SASS)
Sintaxe simples e recursos como `@mixins`, `@import` e `@extend`
fazem do SASS uma ferramenta muito útil no projeto
Mais em [http://sass-lang.com/guide](http://sass-lang.com/guide)



------------
## Congruindo os tópicos
Podemos montar um fluxo para compilar o SASS e atualizar a página automagicamente:

1. Instalar as dependencias (SASS, Gulp e módulos auxiliares)
2. Construir uma tarefa no gulp (`styles`)
3. Escrever nosso componente em formato SASS
4. Executar comando `gulp styles`

--- 
## Congruindo os tópicos
Para finalizar o fluxo, podemos criar processos que irão verificar alterações salvas e executar tarefas. Esses são chamados de Watchers
```javascript
// Compiling SASS files
gulp.task("styles", function() { return buildCSS(); });

// Creating Watcher
gulp.task("watch-all", function() {
    // Watch .sass files
    gulp.watch("static/sass/**/*.sass", ["styles"]);
});
```

---
## Congruindo os tópicos
Com o [LiveReload](http://livereload.com/), nossas alterações podem ser vistas em tempo real (ou quase isso).

```javascript
gulp.task("watch-all", function() {

    // Watch .sass files
    gulp.watch("static/sass/**/*.sass", ["styles"]);

    // Starting LiveReload server
    livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['static/dist/**/*']).on('change', livereload.changed);
});
```


------------
## The Block, Element, Modifier methodology (BEM)
Convenção de nomes para classes CSS no HTML.
* [http://getbem.com/introduction/](http://getbem.com/introduction/)
* [https://css-tricks.com/bem-101](https://css-tricks.com/bem-101/)

---
## The Block, Element, Modifier methodology (BEM)
Esta convenção nos ajuda a descrever nossos componentes de forma concisa clara.

* Kekanto Delivery



------------
## Concluindo
Com poucas ferramentas de fácil aprendizado, é possível:

* Criar projetos modulares e organizados
* Ter uma resposta a alterações em tempo real
* Trabalhar em equipe de forma mais harmoniosa
* Abstrair tarefas massantes e focar no projeto