import React from 'react';

import './index.scss';

class LoadingScreen extends React.Component {
    render() {
        return (
            <div className="LoadingScreen container-fluid">
                <div className="loadingContent row align-items-center">
                    <div className="col-8 offset-2">
                        <i className="novaLogo" />
                        <p>Waiting for connection...</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoadingScreen;
