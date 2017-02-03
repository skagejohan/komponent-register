import * as React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';
import App from './app';
import Components from './components';
import Home from './home';

export default class AppRouter extends React.Component<null, null> {
    render() {
        console.log('Rendering router!');

        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="komponenter" component={Components} />
                    <Route path="layout" component={Home} />
                </Route>
            </Router>
        );
    }
}