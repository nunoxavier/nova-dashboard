import React from 'react';

import './index.scss';

class Development extends React.Component {
    constructor(props) {
        super(props);
        this.socket = props.socket;

        this.state = {
            socketWarning: false,
            development: false,
            ips: [],
        }
    }

    componentDidMount() {
        let that = this;
        this.socket.on('data', function (data) {
            that.setState({
                ips: data.development.ips,
                socketWarning: false,
            });
        });

        this.socket.on('disconnect', () => {
            that.setState({
                socketWarning: true,
            })
        });
    }

    showDevelopmentInfo() {
        let that = this;
        this.setState({
            development: !that.state.development
        });
    }

    developmentMenu() {
        return (
            <div className="developmentMenu">
                <ul className="list-unstyled">
                    {Object.keys(this.state.ips).map((key, i) => {
                        return (
                            <li key={i}>{key}: {this.state.ips[key].join(' | ')}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div className="Development">
                {this.state.socketWarning ? <span className="socketWarning">Connection error!</span> : null}
                <button className="toggle" onClick={this.showDevelopmentInfo.bind(this)}>D</button>
                {this.state.development ? this.developmentMenu() : null }
            </div>
        );
    }
}

export default Development;
