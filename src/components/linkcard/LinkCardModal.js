import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import {Form} from 'react-form';

const LinkCardModal = (props) => {
    return (
        <Modal
            
            isOpen={props.isOpen}
            ariaHideApp={false}
            onAfterOpen={() => props.onAfterOpen()}
            onRequestClose={() => props.onModelClose()}
            shouldCloseOnOverlayClick={false}
            style={props.style}
            contentLabel={props.contentLabel}>
            <form>
                <div className="row align-center">
                    <h4
                        className="medium-12 small-12 large-12 column"
                        style={{
                        'textAlign': 'center'
                    }}>{props.contentLabel}</h4>
                </div>
                <div className="row ">
                    <input
                        name="textViewCanID"
                        className="medium-12 small-12 large-12 columns"
                        required="required"
                        type="text"
                        placeholder="Enter Your CandID 1000 4387 9839 0987"/>

                </div>
                <div className="row align-justify">
                    <button type="text" className="small-12 medium-5 large-5 columns button">OK</button>

                    <button
                        type="text"
                        onClick={() => props.onClickDismiss()}
                        className="small-12 medium-5 large-5 columns alert button">CANCEL</button>
                </div>
            </form>
        </Modal>

    );
}

LinkCardModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    style: PropTypes.object.isRequired,
    onAfterOpen: PropTypes.func,
    onModelClose: PropTypes.func,
    labelTitle: PropTypes.string

};

export default LinkCardModal