# 📱 Componente Select para React Native

Desenvolvi esse componente em um projeto de React Native após não encontrar nenhum componente já desenvolvido que atendesse as minhas necessidades. Por isso decidi criar esse repositório com esse componente para que outras pessoas também possam utilizá-lo em seus projetos.

## ⚙️ Principais funcionalidades

#### 🔗 Passagem de propriedades:

- **_options (array)_** - Um array de opções a serem exibidas no Select;
- **_setSelectedItem (useState(string))_**: Função do useState para capturar a opção selecionada;
- **_placeholder (string)_** - Texto do Select enquanto vazio.

#### 🔍 Filtro:

- Ao digitar no Select, os dados são filtrados e mostrados ao usuário;
- O usuário também tem a opção de clicar na seta no canto esquerdo para abrir a lista de opções, sem filtro.

## 💪 Principais vantagens

- Estilização a vontade;
- Adaptação na renderização da lista do Select, também podendo receber um array de objetos;
- Fácil inserção de novas propriedades para controlar o Select e os dados retornados.

## 📝 Uso

💾 Salve o componente na sua lista de componentes:

```
 react-native-select/
    ├── src/
    │   ├── components/
    └   └   └── Select/
```

📞 Chame o componente Select em seu aplicativo:

```javascript
<Select
  options={options}
  placeholder="Select an item"
  setSelectedItem={setSelectedItem}
/>
```

🎮 Crie os controladores das propriedades:

```javascript
const [selectedItem, setSelectedItem] = useState('');
const options = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
```

🖌️ Altere os estilos de acordo com as necessidades do seu aplicativo em:

```
 Select/
   └── style.js
```

## 🤔 Considerações finais

Essa é a primeira versão desse componente, então é possível que tenham algumas redundâncias e falhas, assim que possível continuarei avançando seu desenvolvimento.

## 🤝 Colaborações

Este repositório está aberto a sugestões de melhoria, sinta se a vontade para entrar em contato comigo.

Atenciosamente:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/104937852?v=4" width="100px;" alt="Foto do Gabriel Souza da Silva no GitHub"/><br>
        <sub>
          <b>Gabriel Souza</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
