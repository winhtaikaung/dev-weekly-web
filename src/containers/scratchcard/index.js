import React from 'react'
import ScratchCard from 'react-scratchcard'
import {Link} from 'react-router';
class ScratchCardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            setting: {
                width: 640,
                height: 480,
                image: 'https://raw.githubusercontent.com/aleksik/react-scratchcard/master/example/src/c' +
                        'ard.jpg',
                finishPercent: 50
            }
        }
        this.handleOnComplete = this
            .handleOnComplete
            .bind(this);
    }

    handleOnComplete() {

        // TODO On Complete action should trigger here

    }

    render() {
        return (
            <div>
                <ScratchCard {...this.state.setting} onComplete={this.handleOnComplete}>
                    Congratulations! You WON!
                    <Link to={`/home`} className="button pill white">Back Home</Link>
                </ScratchCard>
                
            </div>
        );
    }
}

export default ScratchCardContainer;