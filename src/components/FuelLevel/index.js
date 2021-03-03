import React from 'react';

import './index.scss';

class FuelLevel extends React.Component {
    constructor(props) {
        super(props);
        this.socket = props.socket;

        this.state = {
            fuelLevel: 0
        }
    }

    componentDidMount() {
        let that = this;
        this.socket.on('data', function (data) {
            if (data.fuelLevel !== that.state.fuelLevel) {
                that.setState({
                    fuelLevel: data.fuelLevel
                });
            }
        });
    }

    render() {
        const LEVELS = [
            {
                from: 0,
                class: 'low'
            },
            {
                from: 25,
                class: 'normal'
            },
        ];

        // min: 0 | max: 100
        let fuelLevel = this.state.fuelLevel;
        let level;
        let totalSteps = 16;
        let steps = [];
        for (let i = 0; i < totalSteps; i++) {
            steps.push(<div key={i} />);
        }

        LEVELS.forEach((item, i) => {
            if (item.from <= fuelLevel) {
                level = item.class;
            }
        });

        return (
            <div className="FuelLevel row no-gutters">
                <div className={"col-10 gauge gauge--" + level}>
                    <div className="label">
                        <i className="icon icon--fuel align-text-bottom"/> Fuel level %
                    </div>
                    <div className="bar-container">
                        <div className="bar" style={{width: fuelLevel + '%'}} />
                    </div>
                    <div className="steps d-flex justify-content-between">
                        {steps}
                    </div>
                </div>
                <div className="col-2 amount">{fuelLevel}</div>
            </div>
        );
    }
}

export default FuelLevel;
