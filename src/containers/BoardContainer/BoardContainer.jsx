import React from 'react';
import Board from '../../components/Board/Board'
import { connect } from 'react-redux'
import { getBoardInformation } from '../../redux/actionCreators'
import { object, func, bool, array, string } from 'prop-types';
import { Route, Redirect } from 'react-router'
class BoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    const idOpenBoard = this.props.match.params.id;
    console.log("id del board es: " + this.props.match.params.id);
   // this.props.getBoardInformation(idOpenBoard);
    //this.props.getBoardInformation(this.props.idOpenBoard);
  }
  render() {
    const {openBoard, boardList} = this.props;
    console.log("VAMOA MIRAR");
    console.log();
    console.dir(openBoard[0]);
    console.log(boardList);
    return <Board 
    openBoard = {openBoard[0]}
    boardList = {boardList}/>
   
  }
}

const mapStateToProps = state => {
  return {
    openBoard: state.openBoard,
    boardList: state.boardList ? state.boardList : []
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
   // getBoardInformation: (boardId) => dispatch(getBoardInformation(boardId))
  };
};

BoardContainer.defaultProps={
  boardList: []
}

BoardContainer.PropTypes = {
  openBoard: Array,
  boardList: Array
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);

