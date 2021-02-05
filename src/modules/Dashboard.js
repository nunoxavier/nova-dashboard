import WarningLights from './WarningLights';
import Speedometer from './Speedometer';
import Tachometer from './Tachometer';

import './Dashboard.scss';

function Dashboard() {
    return (
        <div className="Dashboard container-fluid">
            <WarningLights/>
            <div className="MiddleModule row justify-content-center">
                <div className="col-4">
                    odometer / water tmp / fuel lvl
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
