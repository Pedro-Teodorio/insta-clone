Pedro-Teodorio: Crie um README explicando como executar minha aplicação e pra que ela serve

Workspace: # Insta Clone

Este é um projeto de clone do Instagram desenvolvido com React Native e Expo. A aplicação permite visualizar um feed de postagens, curtir e descurtir postagens.

## Estrutura do Projeto

```
.expo/
.gitignore
app.json
App.tsx
assets/
index.ts
package.json
src/
  components/
    Feed.tsx
  image/
tsconfig.json
```

## Pré-requisitos

- Node.js instalado
- Expo CLI instalado globalmente (`npm install -g expo-cli`)

## Instalação

1. Clone o repositório:

```sh
git clone <URL_DO_REPOSITORIO>
```

2. Navegue até o diretório do projeto:

```sh
cd insta-clone
```

3. Instale as dependências:

```sh
npm install
```

## Executando a Aplicação

Para iniciar a aplicação, utilize um dos seguintes comandos:

- Para iniciar no modo padrão:

```sh
npm start
```

- Para iniciar no Android:

```sh
npm run android
```

- Para iniciar no iOS:

```sh
npm run ios
```

- Para iniciar no navegador:

```sh
npm run web
```

## Funcionalidades

- Visualizar um feed de postagens
- Curtir e descurtir postagens

## Estrutura de Componentes

- App.tsx: Componente principal que renderiza o cabeçalho e o feed de postagens.
- Feed.tsx: Componente que representa uma postagem individual no feed.

## Estilos

Os estilos são definidos utilizando StyleSheet do React Native e estão localizados nos próprios componentes.

## Contribuição

Sinta-se à vontade para contribuir com o projeto. Para isso, siga os passos abaixo:

1. Faça um fork do projeto
2. Crie uma nova branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Faça o push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

