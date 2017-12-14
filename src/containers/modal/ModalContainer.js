import React, {Component} from 'react';
import LinkCardModal from '../../components/linkcard/LinkCardModal'

class ModalContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalStyle: {
                overlay: {
                    backgroundColor: 'rgba(4, 4, 4, 0.87)'
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-20%',
                    transform: 'translate(-50%, -50%)'
                }
            },
            isModalOpen: false,
            labelTitle: "",
            modalDialogIndex: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({isModalOpen: nextProps.isModalOpen, labelTitle: nextProps.labelTitle, modalDialogIndex: nextProps.modalDialoglIndex})
    }

    render() {
        switch (this.state.modalDialogIndex) {
            case 0:
                return (
                    <div>User Profile</div>
                );
                break;
            case 1:
                return (
                    <div>{this.returnLinkCardModal(this.props)}</div>
                );
                break;
            case 2:
                return (
                    <div>PromoCode</div>
                );
                break;
            case 3:
                return (
                    <div>Contact Us</div>
                );
                break;
            case 4:
                return (
                    <div>Terms of Service</div>
                );
                break;
            default:
                return (
                    <div>PromoCode</div>
                );
                break;
        }
    }

    onAfterModelOpened(e) {
        // console.log("Modal Opened");
    }

    onModelClosed(e) {
        // console.log("model Closed");
    }

    onDismissDialog() {
        this.setState({isModalOpen: false})
    }

    returnLinkCardModal(props) {
        return (<LinkCardModal
            isOpen={this.state.isModalOpen}
            onAfterOpen={this
            .onAfterModelOpened
            .bind(this)}
            onModelClose={this
            .onModelClosed
            .bind(this)}
            onClickDismiss={this
            .onDismissDialog
            .bind(this)}
            style={this.state.modalStyle}
            contentLabel={props.labelTitle}/>)
    }

}
// TODO Connection to reducer will be done here
export default ModalContainer;