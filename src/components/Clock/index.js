import React from 'react';

import './index.scss';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="Clock row">
                <div className="col">
                    {this.state.date.toLocaleDateString('pt-PT')}
                </div>
                <div className="col">
                    {this.state.date.toLocaleTimeString('pt-PT')}
                </div>
            </div>
        );
    }
}

export default Clock;
