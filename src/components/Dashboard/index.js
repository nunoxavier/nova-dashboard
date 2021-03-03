import React from "react";
import socketIOClient from "socket.io-client";

import Development from '../Development';
import WarningLights from '../WarningLights';
import Speedometer from '../Speedometer';
import Tachometer from '../Tachometer';
import Odometer from '../Odometer';
import WaterTemperature from '../WaterTemperature';
import FuelLevel from '../FuelLevel';
import Clock from '../Clock';
import LoadingScreen from '../LoadingScreen';

import './index.scss';

const socket = socketIOClient('http://localhost:8080');

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoading: true
        };
    }

    componentDidMount() {
        let that = this;
        socket.on('data', function (data) {
            setTimeout(function () {
                that.setState({
                    showLoading: false,
                })
            }, 1000);
        });
    }

    render() {
        return (
            <div>
                {this.state.showLoading ? <LoadingScreen /> : null}
                <Development socket={socket}/>
                <div className="Dashboard container-fluid">
                    <WarningLights socket={socket}/>
                    <div className="MiddleModule row justify-content-center">
                        <div className="col-4" style={{marginTop: "-72px"}}>
                            <Clock/>
                            <Odometer socket={socket}/>
                            <WaterTemperature socket={socket}/>
                            <FuelLevel socket={socket}/>
                        </div>
                        <div className="col-8">
                            <Speedometer socket={socket}/>
                        </div>
                    </div>
                    <Tachometer socket={socket}/>
                </div>
            </div>
        )
    };
}

export default Dashboard;
