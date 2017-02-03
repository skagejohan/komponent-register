import * as React from 'react';
import Layout from './layout';
import Menu from './menu';

export default class App extends React.Component<any, any> {
    render() {
        return (
            <Layout
                left={<Menu />}
                middle={this.props.children}
            />
        );
    }
}