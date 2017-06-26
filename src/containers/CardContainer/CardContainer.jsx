import React from 'react';
import Card from '../../components/Card/Card'
import { connect } from 'react-redux'
import { deleteCard } from '../../redux/actionCreators'

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const {cardDescription, cardDueDate, currentUserName, idCard, deleteCard, openBoard } = this.props;


    return <Card cardDescription={cardDescription} 
    cardDueDate={cardDueDate} 
    idCard={idCard} 
    currentUserName = {currentUserName}
    deleteCard = {deleteCard}
    openBoard = {openBoard[0]}/>
  }
};


const mapStateToProps = state => {
  return {
    openBoard: state.openBoard ? state.openBoard: [],
    currentUserName: state.currentUser.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   deleteCard: (idCard, idBoard) => dispatch(deleteCard(idCard, idBoard))
  };
};


CardContainer.defaultProps = {
  boardList: [],
  cardDescription: "",
  cardDueDate: "",
  currentUserName: "",
  idCard: ""
}
export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
