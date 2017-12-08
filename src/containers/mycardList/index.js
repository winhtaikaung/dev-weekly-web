import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getCards} from './actions/MyCardListActions'
import LinkCardItem from '../../components/LinkCardItem'

export class MyCardList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: []
        }
    }

    componentWillMount() {
        this
            .props
            .getCards(1, 10);
    }

    componentWillReceiveProps(newProps) {
        this.setState({cards: newProps.items, paging: newProps.paging})
    }

    render() {
        return (
            <div>
                {this.state.cards && this
                    .state
                    .cards
                    .map((item, index) => <LinkCardItem key={index} cardInfo = {item}/>)
}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getCards
    }, dispatch);
}

export default connect(state => ({items: state.MyCardListReducer.items, paging: state.MyCardListReducer.paging}), mapDispatchToProps)(MyCardList);