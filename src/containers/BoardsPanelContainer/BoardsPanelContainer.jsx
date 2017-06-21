import React from 'react';
import BoardsPanel from '../../components/BoardsPanel/BoardsPanel'
import { connect } from 'react-redux'
import { getUserBoards} from '../../redux/actionCreators'
import { arrayOf, object, func, bool, string } from 'prop-types';

class BoardsPanelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    BoardsPanelContainer.propTypes = {
      getBoards: func,
      isLoading: bool,
      boards: arrayOf(object),
      authenticatedUserId: string
    }

    BoardsPanelContainer.defaultProps = {
      authenticatedUserId: " "
    }
  }

    componentWillMount(){

      this.props.getBoards(this.props.authenticatedUserId);
    }

  render() {
    return (
      <BoardsPanel />
    );
  }
};

const mapStateToProps = state => {
  return {
  /*  errors: state.errorsAccount,
    isLoading: state.isLoading,
    loginSuccess: state.loginSuccess,
    loginError: state.loginError,
    isAuthenticated: state.isAuthenticated, */
    boards: Array.isArray(state.boards) ? state.boards : [],
    authenticatedUserId: state.currentUser.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBoards: (authenticatedUserId) => dispatch(getUserBoards(authenticatedUserId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(BoardsPanelContainer);
