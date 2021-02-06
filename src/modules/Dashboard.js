import WarningLights from './WarningLights';
import Speedometer from './Speedometer';
import Tachometer from './Tachometer';
import Odometer from './Odometer';
import WaterTemperature from './WaterTemperature';
import FuelLevel from './FuelLevel';

import './Dashboard.scss';

function Dashboard({ count, handleIncrementClick, handleDecrementClick }) {
    return (
        <div className="Dashboard container-fluid">
            <h1>Helloworld React & Redux! {count}</h1>
            <button onClick={handleDecrementClick}>Decrement</button>
            <button onClick={handleIncrementClick}>Increment</button>

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
