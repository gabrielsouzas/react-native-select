# Componente Select para React Native

Desenvolvi esse componente em um projeto de React Native após não encontrar nenhum componente já desenvolvido que atendesse as minhas necessidades. Por isso decidi criar esse repositório com esse componente para que outras pessoas também possam utilizá-lo em seus projetos.

## Principais funcionalidades

- Passagem de propriedades:

  - options (array) - Um array de opções a serem exibidas no Select;
  - setSelectedItem (useState(string)): Função do useState para capturar a opção selecionada;
  - placeholder (string) - Texto do Select enquanto vazio.

- Filtro:
  - Ao digitar no Select, os dados são filtrados e mostrados ao usuário;
  - O usuário também tem a opção de clicar na seta no canto esquerdo para abrir a lista de opções, sem filtro.

## Principais vantagens

- Estilização a vontade;
- Adaptação na renderização da lista do Select, também podendo receber um array de objetos;
- Fácil inserção de novas propriedades para controlar o Select e os dados retornados.

## Uso

Salve o componente na sua lista de componentes:

```
 react-native-select/
    ├── src/
    │   ├── components/
    └   └   └── Select/
```
