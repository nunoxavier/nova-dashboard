import React from 'react';

import './index.scss';

class WaterTemperature extends React.Component {
    constructor(props) {
        super(props);
        this.socket = props.socket;

        this.state = {
            waterTemperature: 0
        }
    }

    componentDidMount() {
        let that = this;
        this.socket.on('data', function (data) {
            that.setState({
                waterTemperature: data.waterTemperature
            });
        });
    }

    render() {

        let progress = this.state.waterTemperature;
        if (progress > 100) {
            progress = 100;
        }

        return (
            <div className="WaterTemperature mb-3">
                <span className="float-right">{this.state.waterTemperature}ºC</span>
                <i className="icon icon--water-temperature"/> / Water temp
                <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: progress + "%"}}/>
                </div>
            </div>
        );
    }
}

export default WaterTemperature;
