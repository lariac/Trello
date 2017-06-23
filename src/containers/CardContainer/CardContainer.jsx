import React from 'react';
import Card from '../../components/Card/Card'
import { connect } from 'react-redux'

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
        console.log("ESTOY EN CAAAAARD CONTAINEEEER!");
    const {cardDescription, cardDueDate, currentUserName } = this.props;


    return <Card cardDescription={cardDescription} cardDueDate={cardDueDate} currentUserName = {currentUserName} />
  
  
  }
};


const mapStateToProps = state => {
  return {
    boardListList: state.boardList,
    currentUserName: state.currentUser.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

CardContainer.defaultProps = {
  boardList: [],
  cardDescription: "",
  cardDueDate: "",
  currentUserName: ""
}
export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
