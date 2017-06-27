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
  }
  render() {
    const {openBoard, boardList} = this.props;
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

