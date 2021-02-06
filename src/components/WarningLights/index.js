import React from 'react';

import './index.scss';

class WarningLights extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftTurn: false,
            rightTurn: false,
            lights: false,
            highBeam: false,
            lowBeam: false,
            oilPressure: false,
            battery: false,
            parking: true
        }
    }

    componentDidMount() {
        this.warningLightsID = setInterval(
            () => this.tick(),
            500
        );
    }

    componentWillUnmount() {
        clearInterval(this.warningLightsID);
    }

    tick() {
        this.setState({
            leftTurn: !this.state.leftTurn,
            rightTurn: !this.state.rightTurn,
        });
    }

    render() {
        return (
            <div className="WarningLights">
                <div className="row justify-content-center">
                    <i className={"icon icon--oil-pressure " + (this.state.oilPressure ? 'active' : '')}/>
                    <i className={"icon icon--battery " + (this.state.battery ? 'active' : '')}/>
                    <i className={"icon icon--parking " + (this.state.parking ? 'active' : '')}/>
                    <i className={"icon icon--lights " + (this.state.lights ? 'active' : '')}/>
                    <i className={"icon icon--low-beam " + (this.state.lowBeam ? 'active' : '')}/>
                </div>
                <div className="row justify-content-center">
                    <i className={"icon icon--left-turn " + (this.state.leftTurn ? 'active' : '')}/>
                    <i className={"icon icon--high-beam " + (this.state.highBeam ? 'active' : '')}/>
                    <i className={"icon icon--right-turn " + (this.state.rightTurn ? 'active' : '')}/>
                </div>
            </div>
        );
    }
}

export default WarningLights;
