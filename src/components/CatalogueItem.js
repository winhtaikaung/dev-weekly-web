import React from 'react';

const CatalogueItem = (props) => {
    return (
        <div className="small-6 medium-4 large-6 columns">
            <div className="card">
                <img src="https://placeimg.com/640/480/arch"/>
                <div className="card-section">
                    <h4>{props.catalogueItem.name}</h4>
                    <p>This row of cards is embedded in an Flex Block Grid.</p>
                </div>
            </div>
        </div>
    );
};
export default CatalogueItem;