import React from 'react';

import './index.scss';

class Tachometer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalRPM: 8, // make 8 a config
            maxRPM: 8 * 1000, // make 8 a config
            orangeAt: 4,
            redAt: 6,
            rpm: 0,
        }
    }

    componentDidMount() {
        this.tachometerID = setInterval(
            () => this.tick(),
            100
        );
    }

    componentWillUnmount() {
        clearInterval(this.tachometerID);
    }

    tick() {
        if (this.state.rpm + 100 <= this.state.maxRPM) {
            this.setState({
                rpm: this.state.rpm + 100
            });
        } else {
            this.setState({
                rpm: 0
            });
        }
    }

    render() {

        const totalRPMS = this.state.totalRPM * 1000;
        const totalBlocks = 5 * this.state.totalRPM;
        let totalActive = (this.state.rpm * totalBlocks) / totalRPMS;
        totalActive = Number(totalActive.toFixed(0));

        let rpmSections = [];
        let rpmNumbers = [];
        for (let i = 0; i < this.state.totalRPM; i++) {
            let classes = [];
            let blocks = [];

            classes.push('block-group');
            if (i >= this.state.redAt) {
                classes.push('block--red');
            } else if (i >= this.state.orangeAt) {
                classes.push('block--orange');
            } else {
                classes.push('block--green');
            }

            for (let j = 0; j < 5; j++) {
                blocks.push(<div key={j} className={'block ' + (totalActive-- > 0 ? 'active' : '')}/>);
            }

            rpmNumbers.push(<div key={i} className="number">{i}</div>);
            rpmSections.push(<div key={i} className={classes.join(' ')}>{blocks}</div>);
        }

        return (
            <div className="row justify-content-center Tachometer">
                <div className="col">
                    <div className="numbers-container">
                        {rpmNumbers}
                    </div>
                    <div className="blocks-container">
                        {rpmSections}
                    </div>
                    <div className="times"><span>x</span>1000</div>
                </div>
            </div>
        );
    }
}

export default Tachometer;
