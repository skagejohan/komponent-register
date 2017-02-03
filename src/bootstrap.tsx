import App from './app';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
__webpack_public_path__ = "http://localhost:8080/";

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./app', function () {
        const NewApp = require('./app').default;
        ReactDOM.render(
            <AppContainer>
                <NewApp />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}