import React from 'react';

import './index.scss';

class WarningLights extends React.Component {
    constructor(props) {
        super(props);
        this.socket = props.socket;

        this.state = {
            toggles: {
                leftTurn: false,
                rightTurn: false,
                hazard: false,
                lights: false,
                highBeam: false,
                lowBeam: false,
                oilPressure: false,
                battery: false,
                parking: false
            },
            status: {
                leftTurn: false,
                rightTurn: false,
            }
        }
    }

    componentDidMount() {
        let that = this;
        this.socket.on('data', function (data) {
            that.setState({
                toggles: data.lights,
            });
        });

        that.warningLightsID = setInterval(
            () => that.tick(),
            500
        );
    }

    componentWillUnmount() {
        clearInterval(this.warningLightsID);
    }

    // Note we should check if the state.toggle is on and only then enable / blink the light
    tick() {
        let status = this.state.status;

        if (this.state.toggles.hazard) {
            status.leftTurn = status.rightTurn = !status.leftTurn;
        } else {
            if (this.state.toggles.leftTurn) {
                status.leftTurn = !status.leftTurn;
            } else {
                status.leftTurn = false;
            }
            if (this.state.toggles.rightTurn) {
                status.rightTurn = !status.rightTurn;
            } else {
                status.rightTurn = false;
            }
        }

        this.setState(status);
    }

    render() {
        return (
            <div className="WarningLights">
                <div className="row justify-content-center">
                    <i className={"icon icon--oil-pressure " + (this.state.toggles.oilPressure ? 'active' : '')}/>
                    <i className={"icon icon--battery " + (this.state.toggles.battery ? 'active' : '')}/>
                    <i className={"icon icon--parking " + (this.state.toggles.parking ? 'active' : '')}/>
                    <i className={"icon icon--hazard " + (this.state.toggles.hazard ? 'active' : '')}/>
                    <i className={"icon icon--lights " + (this.state.toggles.lights ? 'active' : '')}/>
                    <i className={"icon icon--low-beam " + (this.state.toggles.lowBeam ? 'active' : '')}/>
                </div>
                <div className="row justify-content-center">
                    <i className={"icon icon--left-turn " + (this.state.status.leftTurn ? 'active' : '')}/>
                    <i className={"icon icon--high-beam " + (this.state.toggles.highBeam ? 'active' : '')}/>
                    <i className={"icon icon--right-turn " + (this.state.status.rightTurn ? 'active' : '')}/>
                </div>
            </div>
        );
    }
}

export default WarningLights;
