/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {} from '../actions/';
import Main from '../components/App';
import {Link} from 'react-router';
import BottomNavBar from '../components/BottomNavBar'
import TopMenuBar from '../components/TopMenuBar'
import NavDrawer from '../components/NavDrawer'
import ModalContainer from './modal/ModalContainer'
/* Populated by react-webpack-redux:reducers */
class App extends Component {

  constructor(props, context) {
    super(props);
    this.state = {
      bottomNavitems: [
        {
          linkTo: "rewards",
          icon: "http://iconfinder.com/q=demo",
          text: "My rewards"
        }, {
          linkTo: "mycards",
          icon: "http://iconfinder.com/q=demo",
          text: "My Cards"
        }
      ],
      navDrawerItems: [
        {
          icon: "http://iconfinder.com/q=demo",
          text: "User Profile"
        }, {
          icon: "http://iconfinder.com/q=demo",
          text: "Link Rapid KL Card"
        }, {
          icon: "http://iconfinder.com/q=demo",
          text: "PromoCode"
        }, {
          icon: "http://iconfinder.com/q=demo",
          text: "Contact us"
        }, {
          icon: "http://iconfinder.com/q=demo",
          text: "Terms of Service"
        }
      ],
      isDrawerOpen: false,
      isModelOpen: false,
      modelTitle: "",
      modalDialoglIndex: 0
    }
  }

  onNavClick(drawerState) {
    this.setState({isDrawerOpen: drawerState, isModelOpen: false})
  }

  onNavItemClick(index, drawerState) {
    this.setState({isDrawerOpen: drawerState, isModelOpen: true, modelTitle: this.state.navDrawerItems[index].text, modalDialoglIndex: index})
  }

  render() {
    const {actions} = this.props;
    // return <Main actions={actions}/>;
    return (
      <div className="off-canvas-wrapper">
        <div id="base-container">
          <NavDrawer
            isDrawerOpen={this.state.isDrawerOpen}
            drawerItems={this.state.navDrawerItems}
            onNavItemClick={this
            .onNavItemClick
            .bind(this)}/>
          <TopMenuBar
            onNavClick={this
            .onNavClick
            .bind(this)}
            isDrawerClose={this.state.isDrawerOpen}/>
          <div className="off-canvas-content" data-off-canvas-content>
            <div className="view-container">
              {this.props.children}
            </div>
            <BottomNavBar navItems={this.state.bottomNavitems}/>
          </div>
          <ModalContainer
            isModalOpen={this.state.isModelOpen}
            labelTitle={this.state.modelTitle}
            modalDialoglIndex={this.state.modalDialoglIndex}/>
        </div>
      </div>
    );
  }
}
/* Populated by react-webpack-redux:reducers
 *
 * HINT: if you adjust the initial type of your reducers, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.shape({})
};

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};
function mapStateToProps(state) { // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducers */
  const props = {};
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {};
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
