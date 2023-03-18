# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Resumo

### React Transition Group

Biblioteca utilizada para trabalhar com animações no React.

Instale com o comando:

npm install react-transition-group

### Transition

Componente utilizado para se gerenciar o estado de uma animação.

Devemos passar as propriedades "in" (booleano, que trata se a animação está entrando ou saindo) e "timeout" (numérico, tempo em milissegundos da animação).

<Transition in={true} timeout={300} >
        {(status) => (
          <div>{status}</div>
        )}
</Transition>

### São 4 estados no total:

entering;
entered;
exiting;
exited.

## Propriedades do Transition

in - indica se a animação está ou não ativa;
timeout - indica o tempo da animação;
appear - indica se queremos animação de entrada logo que a tela carregar;
unmountOnExit - indica se um elemento deve ser removido do DOM ao sair;
mountOnEnter - indica se um elemento já deve ser inserido no DOM quando a tela carregar e ele ainda não tiver entrado.

## Eventos do Transition

onEnter;
onEntering;
onEntered;
onExit;
onExiting;
onExited.

## CSSTransition

Componente que aplica classes automaticamente em seu elemento filho. Recebe as mesmas propriedades e eventos do componente Transition.

Passamos um nome padrão de classe pela propriedade "classNames". Também podemos customizar cada um dos estados.

Os estados disponíveis para customização são:

appear;
appearActive;
enter;
enterActive;
enterDone;
exit;
exitActive;
exitDone.

## TransitionGroup

Componente que serve para grupos de animações. Nos dispensa a necessidade de controlar a propriedade "in", que será controlada automaticamente conforme um elemento for inserido ou removido.
