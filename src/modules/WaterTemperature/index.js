import './index.scss';

function WaterTemperature() {

    let temperature = 70; // ºC
    let progress = temperature;
    if (progress > 100) {
        progress = 100;
    }

    return (
        <div className="WaterTemperature mb-3">
            <span className="float-right">{temperature}ºC</span>
            <i className="icon icon--water-temperature" /> / Water temp
            <div className="progress">
                <div className="progress-bar bg-info" role="progressbar" style={{width: progress + "%"}} />
            </div>
        </div>
    );
}

export default WaterTemperature;
