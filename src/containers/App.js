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
/* Populated by react-webpack-redux:reducers */
class App extends Component {

  constructor(props, context) {
    super(props);
    this.state = {
      navitems: [
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
      is_drawer_open:false 
    }
  }

  onNavClick(drwerState) {
    this.setState({is_drawer_open: drwerState})
  }

  render() {
    const {actions} = this.props;
    // return <Main actions={actions}/>;
    return (
      <div className="off-canvas-wrapper">
        <div id="base-container">
          <div
            className={`off-canvas position-left position-left is-transition-push`+`${!this.state.is_drawer_open?" is-close":" is-open"}`}
            id="offCanvas"
            data-off-canvas>
            <ul>
              <li>asdfasdf</li>
              <li>asdfasdf</li>
              <li>asdfasdf</li>
              <li>asdfasdf</li>
              <li>asdfasdf</li>
            </ul>
          </div>
          <TopMenuBar
            onNavClick={this
            .onNavClick
            .bind(this)}
            isDrawerClose={this.state.is_drawer_open}/>
          <div className="off-canvas-content" data-off-canvas-content>

            <div className="view-container">
              {this.props.children}
            </div>
            <BottomNavBar navItems={this.state.navitems}/>
          </div>

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
