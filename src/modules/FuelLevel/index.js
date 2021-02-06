import './index.scss';

function FuelLevel() {

    let level = 50; // %

    return (
        <div className="FuelLevel">
            <span className="float-right">{level}%</span>
            <i className="icon icon--fuel" /> / Fuel
            <div className="progress">
                <div className="progress-bar bg-info" role="progressbar" style={{width: level + "%"}} />
            </div>
        </div>
    );
}

export default FuelLevel;
