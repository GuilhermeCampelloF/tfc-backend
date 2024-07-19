# :construction: README em construção ! :construction:

## TRYBE FUTEBOL CLUBE

O projeto Trybe Futebol Clube (TFC) foi desenvolvido durante o curso de formação full-stack pela Trybe.

A aplicação consiste em um site informativo sobre partidas e classificações de futebol! ⚽️

Nesse projeto, foi construído um back-end dockerizado utilizando modelagem de dados através do Sequelize, respeitando as regras de negócio para que a API fosse capaz de ser consumida adequadamente por um front-end previamente implementado.

<details>
<summary><strong>🗄️ ESTRUTURA DO PROJETO 🗄️</strong></summary><br />

O projeto é composto de 4 entidades importantes para sua estrutura:

1️⃣ **Banco de dados:**
  - Container docker MySQL já configurado no docker-compose através de um serviço definido como `db`;
  - Tem o papel de fornecer dados para o serviço de _backend_;

2️⃣ **Back-end:**
 - Roda na porta `3001`, pois o front-end faz requisições para ele nessa porta por padrão;

3️⃣ **Front-end:**
  - Acessado pela url `http://localhost:3000` através dos endpoints construídos;

4️⃣ **Docker:**
  - O `docker-compose` tem a responsabilidade de unir todos os serviços conteinerizados (backend, frontend e db) e subir o projeto completo com o comando `npm run compose:up`;

A modelagem do banco de dados respeita o seguinte diagrama de entidade-relacionamento:

![diagrama-er](https://github.com/user-attachments/assets/34fee149-f567-47fa-a52c-69dbb7872a39)

</details>

## REQUISITOS

- Node.js
- Docker/Docker compose

Após clonar o repositório, é necessário realizar a instalação das depedências gerais na pasta raiz do projeto, através do comando:

```shell
npm install
```

Ainda na raiz do projeto, também é necessário realizar a instalação das dependências próprias dos diretórios _frontend_ e _backend_, com o comando:

```shell
npm run install:apps
```

Realizadas essas etapas, será possível executar/encerrar o projeto completo utilizando os scripts de apoio `npm run compose:up` e `npm run compose:down`, respectivamente.

## 📖 HABILIDADES TRABALHADAS 📖

- Desenvolvimento de API utilizando o método TDD;
- Integração do projeto através do docker compose;
- Modelagem de dados através do Sequelize;
- Autenticação via JWT;

## IMPLEMENTAÇÕES REALIZADAS

- Migrations, models, interfaces, services e controllers necessários para o correto funcionamento do back-end (é possível conferir todas as implementações pelo histórico de commits do projeto)

## ©️ DISCLAIMER

<div align="justify">
Com exceção das alterações destacadas acima no tópico "implementações realizadas", <b>TODOS OS DEMAIS ARQUIVOS</b> foram desenvolvidos e estão sob responsabilidade da TRYBE, incluindo, mas não se limitando ao: front-end pré-implementado, diagrama entidade-relacionamento do sistema e organização dos demais diretórios da aplicação.
</div>
