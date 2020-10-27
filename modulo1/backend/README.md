# Nível 01
## back-end com Node.js

Neste módulo foram abordados os conceitos básicos do Node.js e Express.

### Tópicos abordados:
1. Forma de processamento em pilha do Node.js e encadeamento das funções à medida em que são chamadas;
1. Rotas HTTP (GET, POST, PUT, PATCH, DELETE);
2. Parâmetros de requisições (route params, query params e body);
3. Status HTTP de retorno e a importância de manter a semântica para cada tipo de rota;
4. Middlewares como forma de gerar interrupção total ou injeção de código (para validação ou geração de logs por exemplo);

### Característica interessante aprendida:

Código chamado após o `next()` (sem `return`) no middleware é executado após o próximo middleware executar e toda rota da aplicação pode ser considerada um middleware (contém os parâmetros `request`, `response` e `next`)
