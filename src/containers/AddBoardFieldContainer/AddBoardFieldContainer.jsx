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
  showPopOver(){
    this.setState({displayAddField: "hide-add-field", displayPopOver: "show-pop-over"});
  }
  onChange(inputValue){
     this.setState({boardTitle: inputValue});
  } 
  hidePopOver(){
    this.setState({displayAddField: "show-add-field", displayPopOver: "hide-pop-over"});
  }
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
    //   invalidAccount: state.invalidAccount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBoard: (boardInformation) => dispatch(addBoard(boardInformation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBoardFieldContainer);
