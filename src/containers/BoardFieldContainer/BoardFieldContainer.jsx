import React from 'react';
import BoardField from '../../components/BoardField/BoardField'
import { connect } from 'react-redux'
import { deleteBoard, getBoardInformation } from '../../redux/actionCreators'
import { arrayOf, object, func, bool, string, shape } from 'prop-types';
import AddBoardFieldContainer from '../AddBoardFieldContainer/AddBoardFieldContainer'

class BoardFieldContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    BoardFieldContainer.defaultProps = {
      authenticatedUserId: " "
    }
  }

  render() {
    console.log("esto tiene el board field container: " + this.props.boards);
    const allBoards = this.props.boards;
    const { deleteBoard, authenticatedUserId, getBoardInformation} = this.props;
    return <ul className="boards-panel-wrapper boards-panel"> {allBoards.map((item) => {
      console.log("estoy retornando un elemento!");
      return <li key={item._id} className="boards-panel-item"> <BoardField
        id={item._id}
        Boardtitle={item.title}
        deleteBoard={deleteBoard}
        authenticatedUserId={authenticatedUserId} 
        getBoardInformation = {getBoardInformation}
     />
      </li>
    })}
      <li className="boards-panel-item add-board"><AddBoardFieldContainer /></li>
    </ul>

  }

};

const mapStateToProps = state => {
  return {
    boards: Array.isArray(state.boards) ? state.boards : [],
    authenticatedUserId: state.currentUser.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBoard: (boardId, userId) => dispatch(deleteBoard(boardId, userId)),
    getBoardInformation: (boardId) => dispatch(getBoardInformation(boardId))
  };
};

BoardFieldContainer.propTypes = {
  id: React.PropTypes.string,
  Boardtitle: React.PropTypes.string,
  boards: arrayOf(shape({
    _id: string,
    name: string,
    idMembers: Array,
    authenticatedUserId: string
  })),
  deleteBoard: React.PropTypes.func,
  getBoardInformation: React.PropTypes.func
}


export default connect(mapStateToProps, mapDispatchToProps)(BoardFieldContainer);