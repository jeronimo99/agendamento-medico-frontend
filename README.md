# Agendamento Médico - Frontend

Este projeto é a aplicação frontend do projeto de conclusão de curso de Jerônimo Costa Ramalho no curso de Engenharia de Software pela UNICESUMAR.

Esta é uma SPA (Single Page Application) feita em `React`, servida por uma RESTful API.

Esta aplicação deve ser inicializada juntamente com a sua contraparte [https://github.com/jeronimo99/agendamento-medico-backend](backend)

## Instalação

Tenha instalado o `node` e o gerenciador de pacotes `npm` em sua máquina. Clone este repositório e instale as dependências.

`npm install`

## Modo de Desenvolvedor

`npm start`

Roda a aplicação em modo de desenvolvedor.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

O projeto já vem acompanhado de um arquivo `.env` no diretório root da aplicação para se comunicar com o backend local. Se precisar se conectar com outro backend, modifique a variável de ambiente `REACT_APP_HOST`.

## Testando

`npm test`

Inicializa os testes unitários e de integração.

## Produção

`npm run build`

Faz um build da aplicação para produção no diretório `build`.\
O React é corretamento empacotado e otimizado para a sua melhor performance.

A aplicação está pronta para ser deployada!
