import React from 'react';

import './index.scss';

class Odometer extends React.Component {
    constructor(props) {
        super(props);
        this.socket = props.socket;

        this.state = {
            total: 0,
            trip: 0
        }
    }

    componentDidMount() {
        let that = this;
        this.socket.on('data', function (data) {
            that.setState({
                total: data.odometer,
                trip: data.trip
            });
        });
    }

    render() {
        return (
            <div className="Odometer mb-3">
                total: {this.state.total}<br />
                trip: {this.state.trip}
            </div>
        );
    }
}

export default Odometer;
