import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getmerchantList} from '../merchantlist/actions/MerchantListAction'

export class MerchantList extends React.Component {
    constructor(props) {
        super(props);
        // this.props.dispatch(getmerchantList)

        this.state = {
            items: [],
            paging: {}
        };
    }

    componentWillMount() {
        this.props.getmerchantList(1, 10);
    }

    componentWillReceiveProps(newProps) {
        this.setState({items: newProps.items, paging: newProps.items.paging})
    }

    render() {
        return (
            <div>
                This is Merchant List
            </div>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getmerchantList
    }, dispatch);
}

export default connect(state => ({items: state.MerchantListReducer.items, paging: state.MerchantListReducer.paging}), mapDispatchToProps)(MerchantList);
