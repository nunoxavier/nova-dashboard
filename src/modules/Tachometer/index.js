import './index.scss';

function Tachometer() {

    const totalRPM = 8;
    const orangeAt = 3;
    const redAt = 6;
    // const totalBlocks = 5 * totalRPM;
    let totalActive = 24;

    let rpmSections = [];
    let rpmNumbers = [];
    for (let i = 0; i < totalRPM; i++) {
        let classes = [];
        let blocks = [];

        classes.push('block-group');
        if (i >= redAt) {
            classes.push('block--red');
        } else if (i >= orangeAt) {
            classes.push('block--orange');
        } else {
            classes.push('block--green');
        }

        for (let j = 0; j < 5; j++) {
            blocks.push(<div key={j} className={'block ' + (totalActive-- > 0 ? 'active' : '')} />);
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

export default Tachometer;
