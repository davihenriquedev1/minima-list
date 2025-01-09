# Todo List Application

Este é um projeto de uma aplicação de lista de tarefas (Minima List) desenvolvida com **React**, utilizando **TypeScript** e **TailwindCSS** para a interface. O objetivo é proporcionar uma experiência simples e fluida para gerenciar tarefas.

## Funcionalidades

- Adicionar novas tarefas.
- Marcar tarefas como concluídas.
- Reordenar automaticamente as tarefas para que as concluídas fiquem no final da lista.
- Efeitos visuais para destacar mudanças recentes nas tarefas.

## Tecnologias Utilizadas

- **React** com Hooks para gerenciamento de estado.
- **TypeScript** para tipagem estática e maior robustez no código.
- **TailwindCSS** para estilização rápida e eficiente.

## Estrutura do Projeto

```
src/
├── components/
│   ├── TodoItem.tsx       # Componente individual de uma tarefa
├── types/
│   ├── Item.ts            # Tipo para representar uma tarefa
├── app/
│   ├── page.tsx           # Página principal da aplicação
└── styles/                # Estilos globais (configurado pelo TailwindCSS)
```

## Como Executar o Projeto

1. Clone este repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd <PASTA_DO_PROJETO>
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse a aplicação no navegador:

   ```
   http://localhost:3000
   ```

## Melhorias Futuras

- Persistência de dados no localStorage ou banco de dados.
- Implementação de testes unitários.
- Melhorias na acessibilidade e estilização.
- Implementação de app para dispositivos móveis.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias e correções.

## Licença

Este projeto é licenciado sob a [GPLv3](LICENSE).

---

**Desenvolvido por:** [Davi Henrique](https://github.com/davihenriquedev1)
