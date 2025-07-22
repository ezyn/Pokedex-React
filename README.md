# Pokedex React

## Descrição

Este projeto é uma aplicação web que funciona como uma Pokédex, permitindo aos usuários visualizar informações detalhadas sobre os Pokémon. Ele foi desenvolvido como um desafio técnico, demonstrando habilidades em React e outras tecnologias web.

## Funcionalidades

*   **Listagem de Pokémon:** Exibe uma lista paginada de Pokémon, mostrando suas imagens e nomes.
*   **Detalhes do Pokémon:** Ao clicar em um Pokémon, o usuário é direcionado para uma página de detalhes que mostra:
    *   Nome
    *   Imagem
    *   Tipos
    *   Habilidades
    *   Lista de Movimentos
*   **Tema Claro/Escuro:** Possibilidade de alternar entre um tema claro e um tema escuro.
*   **Responsividade:** O layout se adapta a diferentes tamanhos de tela, proporcionando uma boa experiência em dispositivos móveis e desktops.
*   **Navegação:**  Uso de rotas para navegar entre a listagem e os detalhes de cada Pokémon.

## Ferramentas Utilizadas e Justificativas

*   **React:**  Framework JavaScript para construir interfaces de usuário (UI) de forma eficiente e com componentes reutilizáveis.  Foi escolhido por sua popularidade, flexibilidade e por ser uma ótima opção para o desenvolvimento de aplicações web interativas.
*   **Styled-components:**  Biblioteca para estilizar componentes React usando CSS-in-JS.  Permite escrever CSS de forma modular e com escopo para cada componente, tornando o código mais organizado e fácil de manter.
*   **React Router:**  Biblioteca para roteamento no React.  Facilita a navegação entre as diferentes páginas da aplicação.
*   **Axios:**  Cliente HTTP baseado em Promise para fazer requisições à API PokeAPI (para obter os dados dos Pokémon).  Foi escolhido por sua simplicidade e facilidade de uso.
*   **PokeAPI:**  API RESTful que fornece dados sobre os Pokémon.
*   **Vite:** Ferramenta de build que otimiza e agiliza o processo de desenvolvimento React.

## Decisões Adotadas

*   **Mobile First:** A aplicação foi projetada com a abordagem "mobile first", pensando primeiramente em dispositivos móveis e, em seguida, adaptando o layout para telas maiores. Isso garante uma boa experiência para usuários de dispositivos móveis.
*   **Componentização:** A aplicação foi estruturada em componentes reutilizáveis (PokemonCard, PokemonDetail, ThemeContext, etc.) para tornar o código mais modular, organizado e fácil de manter.
*   **Gerenciamento de Estado:**  O estado dos dados (lista de Pokémon, detalhes do Pokémon, tema) foi gerenciado usando o `useState` e `useContext` do React.
*   **Tratamento de Erros:** Implementação de tratamento de erros para lidar com possíveis problemas ao buscar dados da API.
*   **Otimização:**  Uso do `useCallback` para otimizar a função `loadMore` e evitar re-renderizações desnecessárias.

## Como Rodar o Projeto

1.  **Pré-requisitos:**
    *   Node.js e npm instalados na sua máquina.

2.  **Clone o repositório:**
    ```bash
    git clone <url_do_repositorio>
    cd quest-react-avancado-pokedex
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Rodar a aplicação:**
    ```bash
    npm run dev
    ```

5.  **Acessar a Aplicação:**  Abra o seu navegador e acesse o endereço fornecido pelo terminal
    ```
    http://localhost:5173/
    ```