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
            <div className="Odometer row mb-3">
                <div className="col-2">Total</div>
                <div className="col-10">{this.state.total}</div>
                <div className="col-2">Trip</div>
                <div className="col-10">{this.state.trip}</div>
            </div>
        );
    }
}

export default Odometer;
