# Criando um front-end totalmente componentizado na prática com ReactJS

Este projeto foi criado com o [Create React App](https://github.com/facebook/create-react-app)  e é a atividade prática da aula **Criando um front-end totalmente componentizado na prática com ReactJS** que faz parte do bootcamp da Eduzz.

## Scripts

Para inicar o projeto, entre na respectiva pasta, e execute:

### `yarn start`

Executa o projeto no modo desenvolvimento.
Para visualizar acesse a url [http://localhost:3000](http://localhost:3000) em seu browser.

### `yarn test`

Executa o test runner no modo interativo, ativando o modo watch o que fará com que as modificações no código disparem nova execução dos testes.

### `yarn build`

Fará o buid da aplicação para posterior deploy em produção. Para maiores detalhes consultar a seção [deployment](https://facebook.github.io/create-react-app/docs/deployment) da docmentação do React.

## Observações



### Estrutura de pastas

A estrutura de pastas usadas neste projeto é um pouco diferente dá que foi apresentada pelo instrutor. Os motivos de ter feio esta escolha foram: para fins de implementar alguns testes unitários nos componentes e utilizar a abordagem TDD; para aprendizado de componentização, experimentando uma maior divisão e especialização nos componentes.

### Testes unitários

Durante o projeto tentei ao máximo utilizar a abordagem TDD, de forma que para vários dos compenentes existe o teste correspondente. Sendo que para cada funcionalidade adicional procurei antes de implemetnar a funcionaliade criar o respectivo teste unitário

### Interface

Apesar da mudança na estrutura das pastas e dos componentes e também da inclusão dos testes, na medida do possível mantive a mesma interface que foi apresentada pelo instrutor e para isso reaproveitei, fazendo as devidas adaptações, o CSS fornecido no projeto original da aula.
