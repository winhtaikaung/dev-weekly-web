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
/* Populated by react-webpack-redux:reducers */
class App extends Component {

  constructor(props, context) {
    super(props);
  }

  render() {
    const {actions} = this.props;
    // return <Main actions={actions}/>;
    return (
      <div>
            <div></div>
        <div>
          {this.props.children}
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
