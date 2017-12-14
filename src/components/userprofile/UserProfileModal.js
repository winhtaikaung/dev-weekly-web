import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import {Form} from 'react-form';

const UserProfileModal = (props) => {
    return (
        <Modal
            className="dialog-modal"
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
                <div className="grid-x grid-padding-x align-middle ">
                    <div className="medium-5 small-6 large-6 cell">
                        <img
                            className="avatar"
                            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
                    </div>
                    <h5 className="medium-6 small-6 large-6 cell">John Doe</h5>
                </div>
                <div className="grid-x grid-padding-x align-middle ">
                    <div className="medium-4 small-12 large-4 cell">
                        <span>Rapid Points</span>

                    </div>
                    <div className="medium-8 small-12 large-8 cell">
                        <div
                            className="progress "
                            role="progressbar"
                            tabIndex="0"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuetext="50 percent"
                            aria-valuemax="100">
                            <div
                                className="progress-meter"
                                style={{
                                width: '50%'
                            }}></div>
                        </div>
                    </div>

                </div>

                <div className="grid-x grid-padding-x align-middle ">
                    <div className="medium-4 small-12 large-4 cell">
                        Gender

                    </div>
                    <fieldset className="medium-8 small-12 large-8 cell">
                        <input type="radio" name="pokemon" value="Male" id="pokemonRed" required/>
                        <label htmlFor="pokemonRed">Male</label>
                        <input type="radio" name="pokemon" value="Female" id="pokemonBlue"/>
                        <label htmlFor="pokemonBlue">Female</label>
                        <input type="radio" name="pokemon" value="Other" id="pokemonYellow"/>
                        <label htmlFor="pokemonYellow">Other</label>
                    </fieldset>
                </div>

                <div className="grid-x grid-padding-x align-middle ">
                    <div className="medium-4 small-12 large-4 cell">
                        Birthday
                    </div>
                    <div className="medium-8 small-12 large-8 cell">
                        <input
                            className="medium-12 small-12 large-12 cell"
                            type="date"
                            placeholder="DD/MM/YY"/>
                    </div>
                </div>

                <div className="grid-x grid-padding-x align-middle ">
                    <div className="medium-4 small-12 large-4 cell">
                        Email
                    </div>
                    <div className="medium-8 small-12 large-8 cell">
                        <input
                            className="medium-12 small-12 large-12 cell"
                            type="email"
                            placeholder="Enter you email"/>
                    </div>
                    <div className="medium-4 small-12 large-4 cell">
                        Phone
                    </div>
                    <div className="medium-8 small-12 large-8 cell">
                        <input
                            className="medium-12 small-12 large-12 cell"
                            type="tel"
                            placeholder="+609823645"/>
                    </div>
                </div>
                <div className="grid-x grid-padding-x align-justify">
                    <button type="text" className="small-12 medium-5 large-5 cell button">OK</button>

                    <button
                        type="text"
                        onClick={() => props.onClickDismiss()}
                        className="small-12 medium-5 large-5 cell alert button">CANCEL</button>
                </div>
            </form>
        </Modal>

    );
}

UserProfileModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    style: PropTypes.object.isRequired,
    onAfterOpen: PropTypes.func,
    onModelClose: PropTypes.func,
    labelTitle: PropTypes.string

};

export default UserProfileModal