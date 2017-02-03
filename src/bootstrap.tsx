import AppRouter from './app.router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
__webpack_public_path__ = "http://localhost:8080/";

ReactDOM.render(
    <AppContainer>
        <AppRouter />
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./app.router', function () {
        const NewAppRouter = require('./app.router').default;
        ReactDOM.render(
            <AppContainer>
                <NewAppRouter />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}