import React from 'react';
import AddBoardField from '../../components/AddBoardField/AddBoardField'
import { object, func, bool, string } from 'prop-types';
import { connect } from 'react-redux'
import { addBoard } from '../../redux/actionCreators'

class AddBoardFieldContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAddField: "show-add-field",
      displayPopOver:"hide-pop-over",
      boardTitle: "",
    };
    this.showPopOver = this.showPopOver.bind(this);
    this.onChange = this.onChange.bind(this);
    this.hidePopOver = this.hidePopOver.bind(this);
    this.resetInput = this.resetInput.bind(this);


    AddBoardFieldContainer.propTypes = {
      displayAddField: string,
      displayPopOver: string,
      showPopOver: func,
      onChange: func,
      boardTitle: string,
      currentUserId: string,
      hidePopOver: func,
      resetInput: func
    }
  }

  //Method to show the popover in order to create a new board 
  showPopOver(){
    this.setState({displayAddField: "hide-add-field", displayPopOver: "show-pop-over"});
  }

  //Method to handle the input value for the title during the creation of a new board
  onChange(inputValue){
     this.setState({boardTitle: inputValue});
  } 

  //Method to hide the popover that shows the option to create a new board
  hidePopOver(){
    this.setState({displayAddField: "show-add-field", displayPopOver: "hide-pop-over"});
  }

  //Method to reset the input value for the title of the board
   resetInput(){
      this.setState({boardTitle:""});
  }
  render() {
     const { currentUserId, addBoard } = this.props;
    return (
      <AddBoardField
        displayAddField= {this.state.displayAddField}
        displayPopOver= {this.state.displayPopOver}
        showPopOver = {this.showPopOver}
        onChange = {this.onChange}
        boardTitle = {this.state.boardTitle}
        currentUserId = {currentUserId}
        addBoard = {addBoard}
        hidePopOver = {this.hidePopOver}
        resetInput = {this.resetInput}
      />
    );
  }
};

const mapStateToProps = state => {
  return {
    currentUserId: state.currentUser.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBoard: (boardInformation) => dispatch(addBoard(boardInformation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBoardFieldContainer);
