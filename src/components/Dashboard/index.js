import React from "react";
import socketIOClient from "socket.io-client";

import WarningLights from '../WarningLights';
import Speedometer from '../Speedometer';
import Tachometer from '../Tachometer';
import Odometer from '../Odometer';
import WaterTemperature from '../WaterTemperature';
import FuelLevel from '../FuelLevel';
import Clock from '../Clock';

import './index.scss';

const SOCKET_ENDPOINT = 'http://localhost:8080';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        var that = this;
        this.socket = socketIOClient(SOCKET_ENDPOINT);
        this.socket.on('data', function (data) {
            console.log(data);
            // that.setState({ rpm: data.rpm });
        });
        this.socket.emit('fetchData');
    }

    render() {
        return (
            <div className="Dashboard container-fluid">
                <WarningLights/>
                <div className="MiddleModule row justify-content-center">
                    <div className="col-4">
                        <Odometer/>
                        <WaterTemperature/>
                        <FuelLevel/>
                        <Clock/>
                    </div>
                    <div className="col-8">
                        <Speedometer/>
                    </div>
                </div>
                <Tachometer/>
            </div>
        )
    };
}

export default Dashboard;
