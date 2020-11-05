# Nível 02

## Backend com Node.js e TypeScript

Na primeira parte deste módulo, criamos um projeto Node e configuramos o TypeScript, o EditorConfig, o ESLint e o debug do VSCode.

### Typescript
Para configurar o TypeScript, instalamos e iniciamos o tsc. Depois disso, alteramos apenas 2 configurações no tsconfig.json:
- `"outDir": "./dist",` para que o código transpilado seja todo salvo na pasta `dist` na raíz do projeto;
- `"rootDir": "./src",` para que a o compilador entenda que código desenvolvido da aplicação começa a partir da pasta `src`.

### EditorConfig
Essa extensão do VSCode permite a criação de um arquivo `.editorconfig` que rege algumas configurações de escopo do projeto, sobrescrevendo os padrões definidos pelo usuário. Assim, evita conflitos de IDEs ou editores de textos de diferentes desenvolvedores trabalhando no mesmo projeto.

### ESLint
O ESLint verifica possíveis erros e indica melhores práticas no desenvolvimento. Neste projeto, ele foi configurado para, também, forçar um estilo de código, o que mantém um padrão de desenvolvimento único no projeto, independente de como cada desenvolvedor individualmente prefira escrever o seu código. Se algum dev não quiser colocar `;` no final de uma sentença, o ESLint se encarrega de colocar automaticamente ao salvar o arquivo.

Para isso, nas configurações do VSCode foi adicionada a opção:
```
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```
Essa opção fica disponível com a instalação da extensão ESLint.

### Debug do VSCode
Ao criar uma configuração de debug, foram modificadas as seguintes configurações:

- `"request": "attach"` para que o debug se conecte à execução atual do node ao invés de iniciar uma nova execução;
- `"protocol": "inspector"` para possibilitar o debug a inspecionar o código node (e por isso é passada a flag `--inspect` no comando `tsc-node-dev`);
- `"restart": true` para que o debugger tente refazer o attach automaticamente após o término da sessão Node.js, ou seja, reattach automático na reinicialização do servidor após alguma edição percebida pelo ts-node-dev.
Mais informações sobre as configurações de debug do VS Code: [https://code.visualstudio.com/docs/nodejs/nodejs-debugging](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
