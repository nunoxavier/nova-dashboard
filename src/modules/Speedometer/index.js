import './index.scss';

function Speedometer() {

    const isKMS = true;
    let amount = 57;

    var mph = 57;
    var hundreds = "mph__number mph__number";
    var tens = "mph__number mph__number";
    var ones = "mph__number mph__number";
    if (mph > 100){
        hundreds += "--" + (mph + "")[0]
        tens += "--" + (mph + "")[1]
        ones += "--" + (mph % 10)
    } else if (mph > 9){
        tens += "--" + (mph + "")[0]
        ones += "--" + (mph % 10)
    } else {
        ones += "--" + (mph % 10)
    }

    return (
        <div className="Speedometer">
            <div className="mph__container">
                <div className="mph--background">
                    <span className="mph__number--default" />
                    <span className="mph__number--default" />
                    <span className="mph__number--default" />
                </div>
                <div className="mph">
                    <span className={hundreds} />
                    <span className={tens} />
                    <span className={ones} />
                </div>
            </div>
        </div>
    );
}

export default Speedometer;
