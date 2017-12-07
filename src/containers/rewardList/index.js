import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getmerchantList} from '../rewardList/actions/RewardListAction'
import CatalogueItem from '../../components/CatalogueItem'

export class RewardList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            fetchLimit: 10,
            items: [],
            paging: {}
        };
        this.handleScroll = this
            .handleScroll
            .bind(this);
    }

    handleScroll() {
        const windowHeight = "innerHeight" in window
            ? window.innerHeight
            : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;

        // Detect When User Scrolls To Bottom of Page
        if (windowBottom >= docHeight) {
            this
                .props
                .getmerchantList(this.state.paging.next_page, this.state.fetchLimit);
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillMount() {

        this
            .props
            .getmerchantList(1, this.state.fetchLimit);
    }

    componentWillReceiveProps(newProps) {

        if (this.state.items) {

            this.setState({
                items: [
                    ...this.state.items,
                    ...newProps.items
                ],
                paging: newProps.paging
            })
        }
    }

    render() {
        if (this.state.items) {
            if (this.state.items.length !== 0) {
                return (
                    <div className="row">

                        {this.state.items && this
                            .state
                            .items
                            .map((item, index) => <CatalogueItem key={index} catalogueItem={item}/>)
}

                    </div>
                );
            } else {
                return (
                    <div className="row"> No Items Found</div>
                )
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        this.setState({items: [], paging: {}})
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getmerchantList
    }, dispatch);
}

export default connect(state => ({items: state.MerchantListReducer.items, paging: state.MerchantListReducer.paging}), mapDispatchToProps)(RewardList);
