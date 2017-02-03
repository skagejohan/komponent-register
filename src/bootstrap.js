let app = require('./app');
__webpack_public_path__ = "http://localhost:8080/";

app();

if (module.hot) {
    module.hot.accept('./app', function () {
        app = require('./app');
        app();
    });
}