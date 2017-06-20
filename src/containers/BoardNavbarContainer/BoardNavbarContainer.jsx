import React from 'react';
import BoardNavbar from '../../components/BoardNavbar/BoardNavbar'
import { connect } from 'react-redux'
import { logOut } from '../../redux/actionCreators'
import { object, func, bool } from 'prop-types';
import { Route, Redirect } from 'react-router'


class BoardNavbarContainer extends React.Component {
  constructor(props) {
    super(props);
  
    BoardNavbarContainer.propTypes = {
      logOut: func,
      isAuthenticated: bool
    }
  }
  componentDidUpdate() {
    console.log('COMPONENT UPDATE!!' + this.props.signUpSuccess);

    if (this.props.isAuthenticated === false) {
      this.context.router.history.push('/home')
    }
  }
  render() {
    const { logOut } = this.props;
    return (
      <BoardNavbar
      logOut={logOut} />
    );
  }
};

  const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  };
};

BoardNavbarContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardNavbarContainer);
