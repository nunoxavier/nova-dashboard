import React from 'react';

import WarningLights from '../WarningLights';
import Speedometer from '../Speedometer';
import Tachometer from '../Tachometer';
import Odometer from '../Odometer';
import WaterTemperature from '../WaterTemperature';
import FuelLevel from '../FuelLevel';
import Clock from '../Clock';

import './index.scss';

class Dashboard extends React.Component {
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
