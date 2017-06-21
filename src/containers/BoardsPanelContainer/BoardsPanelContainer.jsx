import React from 'react';
import BoardsPanel from '../../components/BoardsPanel/BoardsPanel'
import { connect } from 'react-redux'
import { getUserBoards } from '../../redux/actionCreators'
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
      authenticatedUserId: string,
      openBoard: object
    }

    BoardsPanelContainer.defaultProps = {
      authenticatedUserId: " "
    }
  }

  componentDidMount() {

   // console.log("ENTRE A ");
    this.props.getBoards(this.props.authenticatedUserId);
  }

   componentDidUpdate() {

    //this.props.getBoards(this.props.authenticatedUserId);
   // console.log("ENTRE A DID UPDATE!!");
  }


  render() {
      console.log("RENDERIZAR!!");
    const { boards, openBoard } = this.props;
    return (
      <BoardsPanel boards={boards} />
    );
  }
};

const mapStateToProps = state => {
  return {
    boards: Array.isArray(state.boards)  ? state.boards : [],
    openBoard: state.openBoard,
    authenticatedUserId: state.currentUser.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBoards: (authenticatedUserId) => dispatch(getUserBoards(authenticatedUserId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(BoardsPanelContainer);
