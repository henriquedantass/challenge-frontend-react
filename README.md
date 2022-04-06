## Instalando Dependências

```bash
npm install
# or
yarn
```

## Iniciando LocalHost

Primeiro, inicie o servidor com os seguintes comandos em seu terminal:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000).

<h1 align="center">
  { MARVEL HEROES NFT }
</h1>

## 🚀 Configurando variáveis ambiente

Realize o cadastro no em https://developer.marvel.com/

Após realizer o cadastro você tera uma chave de api publica

Também é necessário configurar o host que terá acesso a sua chave de API.

Arquivo .env :

```bash
NEXT_PUBLIC_API_KEY= YOUR API PUBLIC KEY
NEXT_PUBLIC_API_URL=http://gateway.marvel.com/v1/public
```

## 🚀 Tecnologias

Esse projeto foi desenvolvido utilizando:

- NEXT.JS
- TypeScript
- CHAKRA UI
