# Timer React

Projeto simples de um timer feito em React + Vite, mostrando um pouco sobre boas práticas com o React. Por se tratar de um projeto simples, mais ligado a manipulação de tempo e countdown, somente alguns pontos foram abordados.

Seguintes pontos abordados:

- Uso de constante para definir um valor de time inicial.
- Um único estado pra guardar o tempo em segundos (Unidade de medida base que atende a maioria dos casos de uso).
- Utilização de métodos do Javascript para as resoluções tanto em script quanto no render.
- Manipulção visual do tempo apenas no render respeitando a lógica e evitando problemas de cálculo.
- Utilização de function para manipular o estado evitando ter que trabalhar com old value, garantindo melhor performance do aplicação.

## Instalação e uso

Com o Node/NPM instalados, execute os seguintes passos:


```
   git clone https://github.com/Iscrimou/timer-react.git
```

Entre no diretório do projeto e execute:

```
   npm install
   npm run dev
```

No navegador teste utilizando o link `localhost:5173`.
