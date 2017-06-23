import React from 'react';
import List from '../../components/List/List'
import { object, array, string } from 'prop-types';
import { connect } from 'react-redux'
import { deleteList, addCard } from '../../redux/actionCreators'

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        displayAddCard: "show-add-card",
        displayNewCardEdition: "hide-new-card-edition",
        textAreaContent: ""
    };

    this.showAddCardEdition = this.showAddCardEdition.bind(this);
    this.onChange = this.onChange.bind(this);
    this.hideAddCardEdition = this.hideAddCardEdition.bind(this);

  }

  showAddCardEdition(){
    this.setState({displayAddCard: "hide-add-card", displayNewCardEdition: "show-new-card-edition"  });
  }

  onChange(inputValue){
    this.setState({textAreaContent: inputValue });
  }

  hideAddCardEdition(){
    this.setState({displayAddCard: "show-add-card", displayNewCardEdition: "hide-new-card-edition"  });
  }

  render() {
    console.log("ESTOY RENDERIZANDO UN LIST CONTAINER!!!s");
    const { boardList, listTitle, list, idList, deleteList, openBoard, showAddCardEdition, onChange, authenticatedUserId, addCard, hideAddCardEdition  } = this.props
    return <List listTitle ={listTitle} boardList={boardList} 
    list = {list} 
    idList={idList}
    deleteList = {deleteList}
    openBoard = {openBoard[0]}
    displayAddCard = {this.state.displayAddCard}
    displayNewCardEdition = {this.state.displayNewCardEdition} 
    showAddCardEdition = {this.showAddCardEdition}
    onChange = {this.onChange}
    textAreaContent = {this.state.textAreaContent}
    showAddCardEdition = {this.showAddCardEdition}
    authenticatedUserId={authenticatedUserId}
    addCard = {addCard}
    hideAddCardEdition = {this.hideAddCardEdition} />
  }

};


const mapStateToProps = state => {
  return {
    boardList: state.boardList ? state.boardList : [],
    openBoard: state.openBoard ? state.openBoard : [],
    authenticatedUserId: state.currentUser.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteList: (idList, idBoard) => dispatch(deleteList(idList, idBoard)),
    addCard: (cardInformation) => dispatch(addCard(cardInformation))
  };
};


ListContainer.PropTypes = {
  boardList: array,
  listTitle: "Default list title",
  list: {},
  idList: string,
  openBoard: array,
  authenticatedUserId: string
}
export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
