import React from 'react';

import './index.scss';

class FuelLevel extends React.Component {
    constructor(props) {
        super(props);
        this.socket = props.socket;

        this.state = {
            fuelLevel: 0
        }
    }

    componentDidMount() {
        let that = this;
        this.socket.on('data', function (data) {
            that.setState({
                fuelLevel: data.fuelLevel
            });
        });
    }

    render() {
        return (
            <div className="FuelLevel">
                <span className="float-right">{this.state.fuelLevel}%</span>
                <i className="icon icon--fuel"/> / Fuel
                <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: this.state.fuelLevel + "%"}}/>
                </div>
            </div>
        );
    }
}

export default FuelLevel;
