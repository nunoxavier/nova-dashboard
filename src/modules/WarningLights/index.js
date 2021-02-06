import './index.scss';

function WarningLights() {

    let leftTurn = false;
    let rightTurn = false;
    let lights = false;
    let highBeam = false;
    let lowBeam = false;
    let oilPressure = false;
    let battery = false;
    let parking = true;

    return (
        <div className="WarningLights">
            <div className="row justify-content-center">
                <i className={"icon icon--oil-pressure " + (oilPressure ? 'active' : '')} />
                <i className={"icon icon--battery " + (battery ? 'active' : '')} />
                <i className={"icon icon--parking " + (parking ? 'active' : '')} />
                <i className={"icon icon--lights " + (lights ? 'active' : '')} />
                <i className={"icon icon--low-beam " + (lowBeam ? 'active' : '')} />
            </div>
            <div className="row justify-content-center">
                <i className={"icon icon--left-turn " + (leftTurn ? 'active' : '')} />
                <i className={"icon icon--high-beam " + (highBeam ? 'active' : '')} />
                <i className={"icon icon--right-turn " + (rightTurn ? 'active' : '')} />
            </div>
        </div>
    );
}

export default WarningLights;
