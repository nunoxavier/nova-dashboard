import WarningLights from './WarningLights';
import Speedometer from './Speedometer';
import Tachometer from './Tachometer';
import Odometer from './Odometer';
import WaterTemperature from './WaterTemperature';
import FuelLevel from './FuelLevel';

import './Dashboard.scss';

function Dashboard() {
    return (
        <div className="Dashboard container-fluid">
            <WarningLights/>
            <div className="MiddleModule row justify-content-center">
                <div className="col-4">
                    <Odometer />
                    <WaterTemperature />
                    <FuelLevel />
                </div>
                <div className="col-8">
                    <Speedometer/>
                </div>
            </div>
            <Tachometer/>
        </div>
    );
}

export default Dashboard;
