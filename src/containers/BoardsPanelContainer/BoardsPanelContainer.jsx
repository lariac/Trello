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
      openBoard: arrayOf(object)
    }

    BoardsPanelContainer.defaultProps = {
      authenticatedUserId: " "
    }
  }

  componentWillMount() {

    console.log("ENTRE A COMPONENT DID MOUUUUUUNT!!");

   // console.log("ENTRE A ");

   if(this.props.authenticatedUserId != undefined){
        this.props.getBoards(this.props.authenticatedUserId);
   }
   else{
       this.context.router.history.push('/home')
   }
   
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

BoardsPanelContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(BoardsPanelContainer);
