# 📽️ Movie Magic
![Imagem da aplicação](./public/ezgif-4-06d821f01c.gif)

Movie Magic combina tecnologias de ponta para proporcionar uma experiência de usuário fluida e rica em recursos.

## Índice
| [✨ Funcionalidades](#funcionalidades) | [🛠️ Tecnologias Utilizadas](#tecnologias-utilizadas) | [📋 Pré-requisitos](#pre-requisitos) | [⚙️ Instalação](#instalacao) | [🚀 Uso](#uso) | [📸 Screenshots](#screenshots) | [🤝 Contribuindo](#contribuindo) | [📜 Licença](#licenca) |

<a id="funcionalidades"></a>
## ✨ Funcionalidades

- Exibição de listas de filmes com informações detalhadas.
- Interface moderna e responsiva usando Tailwind CSS.
- Integração com a API do TMDB para obter dados atualizados dos filmes.
- Navegação suave entre as listas de filmes usando SwiperJS.
- Componentes reutilizáveis criados com shadcn.
- Autenticação de usuários com NextAuth (GitHub, Google, e email).
- Conexão com banco de dados PostgreSQL usando Prisma.

<a id="tecnologias-utilizadas"></a>
## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Next.js 14**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e eficiente.
- **shadcn**: Conjunto de componentes para React.
- **SwiperJS**: Biblioteca para criação de sliders/carrosséis.
- **TMDB API**: API para obter dados de filmes, programas de TV e atores.
- **Prisma**: ORM (Object-Relational Mapping) para Node.js e TypeScript, conectado ao PostgreSQL.
- **NextAuth**: Biblioteca para autenticação em Next.js.

<a id="pre-requisitos"></a>
## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/)

Além disso, é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

<a id="instalacao"></a>
## ⚙️ Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/MonteiroCM/MovieMagic.git
    ```

2. Acesse o diretório do projeto:
    ```bash
    cd MovieMagic
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```
    ou
    ```bash
    yarn install
    ```

4. Crie um arquivo `.env.local` na raiz do projeto e adicione suas variáveis de ambiente:
    ```
    NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
    DATABASE_URL=postgresql://user:password@localhost:5432/mydb
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_nextauth_secret
    GITHUB_ID=your_github_client_id
    GITHUB_SECRET=your_github_client_secret
    GOOGLE_ID=your_google_client_id
    GOOGLE_SECRET=your_google_client_secret
    ```

<a id="uso"></a>
## 🚀 Uso

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```
ou
```bash
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação em funcionamento.

<a id="screenshots"></a>
## 📸 Screenshots

Adicione aqui screenshots da aplicação para demonstrar o design e as funcionalidades. Por exemplo:

![Screenshot 1](./public/screenshot1.png)
*Opções para login com GitHub e Google.*

![Screenshot 2](./public/screenshot2.png)
*Tela com visualização mediante a autenticação*

<a id="contribuindo"></a>
## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma [issue](https://github.com/MonteiroCM/MovieMagic/issues) ou enviar um pull request.

<a id="licenca"></a>
## 📜 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](./LICENSE) para detalhes.

---

Se precisar de mais alguma informação, estarei à disposição.