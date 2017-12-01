import React from 'react';

const CatalogueItem = (props) => {
    return (
        <div className="small-6 medium-4 columns">
            <div className="card">
                <img src="https://raw.githubusercontent.com/aleksik/react-scratchcard/master/example/src/card.jpg"/>
                <div className="card-section">
                    <h4>This is a row of cards.</h4>
                    <p>This row of cards is embedded in an Flex Block Grid.</p>
                </div>
            </div>
        </div>
    );
};
export default CatalogueItem;