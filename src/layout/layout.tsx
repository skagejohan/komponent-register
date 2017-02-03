import * as React from 'react';

interface ILayoutProps {
    left?: JSX.JSXElement
    right?: JSX.JSXElement
    middle?: JSX.JSXElement
}

export default class Layout extends React.Component<ILayoutProps, any> {
    render() {
        const {
            left,
            right,
            middle
        } = this.props;

        const createLeft = () => {
            if(!left) {
                return null
            }

            return (
                <div className="container-left">
                    {left}
                </div>
            );
        };

        const createRight = () => {
            if(!right) {
                return null;
            }
            
            return (
                <div className="container-right">
                    {right}
                </div>
            )
        }

        const createMiddle = () => {
            return (
                <h1>Middle</h1>
            );
        }

        return (
            <div className="container">
                <div className="container-top">

                </div>
                <div className="container-bottom">
                    {createLeft()}
                    <div className="container-middle">
                        
                    </div>
                    {createRight()}
                </div>
            </div>
        );
    }
}