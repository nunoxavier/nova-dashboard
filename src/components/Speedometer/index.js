import React from 'react';

import './index.scss';

class Speedometer extends React.Component {
    constructor(props) {
        super(props);
        this.socket = props.socket;

        this.state = {
            isKMS: true,
            amount: 0.0
        }
    }

    componentDidMount() {
        let that = this;
        this.socket.on('data', function (data) {
            that.setState({
                amount: data.speed
            });
        });
    }

    render() {

        const intoBits = (number) => {
            let bits = number.toFixed(0).split('');
            let total = bits.length;
            for (let i = 0; i < 3 - total; i++) {
                bits.unshift(null);
            }
            return bits;
        };

        let bits = intoBits(this.state.amount);

        let numbers = [];
        for (let i = 0; i <= 2; i++) {
            let classes = ['number'];
            if (bits[i] !== null) {
                classes.push('number--' + bits[i]);
            }
            numbers.push(<div key={i} className={classes.join(' ')}><p/><p/><p/><p/><p/><p/><p/></div>);
        }

        return (
            <div className="Speedometer mt-4">
                <div className="counter">
                    {numbers}
                </div>
                <div className="legend">
                    {this.state.isKMS &&
                    <p>KMH</p>
                    }
                    {!this.state.isKMS &&
                    <p>MPH</p>
                    }
                </div>
            </div>
        );
    }
}

export default Speedometer;
