import WarningLights from './WarningLights';
import Speedometer from './Speedometer';
import Tachometer from './Tachometer';

import './Dashboard.css';

function Dashboard() {
  return (
    <div className="Dashboard">
        <div className="overlay" />
        <div className="container-fluid">
            <div className="row">
                <WarningLights />
            </div>
            <div className="row justify-content-center">
                <div className="col-4">
                    odometer / water tmp / fuel lvl
                </div>
                <div className="col-6">
                    <Speedometer />
                </div>
                <div className="col-2">
                    kms / mph
                </div>
            </div>
            <div className="row justify-content-center">
                <Tachometer />
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
