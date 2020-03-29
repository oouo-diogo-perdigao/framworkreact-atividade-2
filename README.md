# Exercício 2
## Passo 1
O objetivo deste exercício é conseguirmos desenvolver uma SPA (single page application) com múltiplas páginas, utilizando o React Router e outros conceitos abordados na Aula 02. Para isso, crie uma aplicação React utilizando o comando npx create-react-app e logo em seguida, na pasta criada, instale o React Router utilizando o comando npm i -S react-router-dom.

## Passo 2
Seguindo o exemplo visto no codesandbox, defina três rotas:
* “/” - Rota inicial, mostrando uma mensagem de boas vindas genérica;
* “/users” - Tela com listagem de usuários, contendo uma tabela com os seguintes dados:
	* Nome;
	* Email;
	* Idade;
* “/users/:name” - Ao selecionar um usuário na tabela desenvolvida anteriormente, deverá ser encaminhado para a rota em questão passando como parâmetro na URL o nome do usuário selecionado. Nessa tela, deverá ser exibido o nome do usuário recebido via URL. Lembre-se de que, cada tela deverá ser um componente único.

## Passo 3
Na tela de listagem de usuários, adicione um botão para cada usuário da tabela que terá como função remover o usuário da listagem. Para executar esse passo, você deverá ter ao menos dois componentes envolvidos: UsersTable e UserItem.

## Passo 4
Altere o componente utilizado na rota /users/:name para que, sempre no ciclo componentDidMount(), o título da janela seja alterado. Faça isso utilizando a propriedade document.title.

# Para executar

`npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Obs: Como não estou persistindo informações no banco de dados ou em um arquivo, preferi que a lista de usuários seja carregada toda a vez. Mesmo que as informações sejam removidas da lista.

## Autor
Diogo Passos Perdigão Britto