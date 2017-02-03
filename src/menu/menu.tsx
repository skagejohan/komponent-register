import * as React from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component<any, any> {
    render() {
        return (
            <ul className="menu">
                <li>
                    <Link to="/komponenter">Komponenter</Link>
                </li>
                <li>
                    <Link to="/layout">Layout</Link>
                </li>
            </ul>
        );
    }
}