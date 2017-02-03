import * as React from 'react';

export default class Menu extends React.Component<any, any> {
    render() {
        return (
            <ul className="menu">
                <li>
                    <a href="/komponenter">Komponenter</a>
                </li>
                <li>
                    <a href="/layout">Layout</a>
                </li>
            </ul>
        );
    }
}