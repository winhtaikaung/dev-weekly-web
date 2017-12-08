import React from 'react';

const LinkCardItem = (props) => {
    return (
        <div className="small-12 medium-12 large-12 columns">
            <div className="card">
                <div className="row card-section">
                    <div className="small-6 medium-6 large-5 columns">
                        <img src={props.cardInfo.image}/>
                    </div>

                    <div className="small-6 medium-6 large-7 columns">
                        <h4>{props.cardInfo.canID}</h4>
                        <p>This row of cards is embedded in an Flex Block Grid.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LinkCardItem;