import './index.scss';

function Speedometer() {

    const intoBits = (number) => {
        let bits = number.toFixed(1).split('');
        let total = bits.length;
        for (let i = 0; i < 5 - total; i++) {
            bits.unshift(null);
        }
        bits.splice(-2, 1);
        return bits;
    };

    const isKMS = true;
    let amount = 100.8;
    let bits = intoBits(amount);

    let numbers = [];
    for (let i = 0; i <= 3; i++) {
        let classes = ['number'];
        if (bits[i] !== null) {
            classes.push('number--' + bits[i]);
        }
        numbers.push(<div key={i} className={classes.join(' ')}><p/><p/><p/><p/><p/><p/><p/></div>);
    }

    return (
        <div className="Speedometer">
            <div className="counter">
                {numbers}
            </div>
            <div className="legend">
                {isKMS &&
                    <p>KMH</p>
                }
                {!isKMS &&
                    <p>MPH</p>
                }
            </div>
        </div>
    );
}

export default Speedometer;
