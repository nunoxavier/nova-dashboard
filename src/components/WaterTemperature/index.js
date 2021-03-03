import React from 'react';

import './index.scss';

class WaterTemperature extends React.Component {
    constructor(props) {
        super(props);
        this.socket = props.socket;

        this.state = {
            waterTemperature: 0
        }
    }

    componentDidMount() {
        let that = this;
        this.socket.on('data', function (data) {
            if (data.waterTemperature !== that.state.waterTemperature) {
                that.setState({
                    waterTemperature: data.waterTemperature
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
                from: 60,
                class: 'normal'
            },
            {
                from: 95,
                class: 'high'
            },
            {
                from: 105,
                class: 'very-high'
            },
        ];

        // min: 0 | max: 120
        let temperature = this.state.waterTemperature;
        let level;
        let totalSteps = 21;
        let steps = [];
        for (let i = 0; i < totalSteps; i++) {
            steps.push(<div key={i} />);
        }

        LEVELS.forEach((item, i) => {
            if (item.from <= temperature) {
                level = item.class;
            }
        });

        return (
            <div className="WaterTemperature mb-3 row no-gutters">
                <div className={"col-10 gauge gauge--" + level}>
                    <div className="label">
                        <i className="icon icon--water-temperature align-text-bottom"/> Water temp ºC
                    </div>
                    <div className="bar-container">
                        <div className="bar" style={{width: ((100 / 120) * temperature) + '%'}} />
                    </div>
                    <div className="steps d-flex justify-content-between">
                        {steps}
                    </div>
                </div>
                <div className="col-2 amount">{temperature}</div>
            </div>
        );
    }
}

export default WaterTemperature;
