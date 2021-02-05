import './index.scss';

function Tachometer() {

    const totalRPM = 8;
    const orangeAt = 3;
    const redAt = 6;

    let rpmSections = [];
    let rpmNumbers = [];
    for (let i = 0; i < totalRPM; i++) {
        let classes = [];
        let blocks = [];

        classes.push('block-container');
        if (i >= redAt) {
            classes.push('block--red');
        } else if (i >= orangeAt) {
            classes.push('block--orange');
        } else {
            classes.push('block--green');
        }

        for (let j = 0; j < 5; j++) {
            blocks.push(<div className={'block block--' + j} />);
        }

        rpmNumbers.push(<div className="number">{i}</div>);
        rpmSections.push(<div className={classes.join(' ')}>{blocks}</div>);
    }

    return (
        <div className="Tachometer">
            <div className="times"><span>x</span>1000</div>
            <div className="rectangles-container">
                {rpmSections}
            </div>
            <div className="numbers-container">
                {rpmNumbers}
            </div>
        </div>
    );
}

export default Tachometer;
