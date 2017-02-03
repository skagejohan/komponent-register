import * as React from 'react';

export default class Layout extends React.Component<any, any> {
    render() {
        return (
            <div className="container">
                <div className="container-top">

                </div>
                <div className="container-bottom">
                    <div className="container-left">
                        Left
                    </div>
                    <div className="container-middle">
                        Middle
                    </div>
                    <div className="container-right">
                        Right
                    </div>
                </div>
            </div>
        );
    }
}