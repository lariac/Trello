import React from 'react';
import AddList from '../../components/AddList/AddList'
import { object, func, bool, string, array } from 'prop-types';
import { connect } from 'react-redux'
import { addList } from '../../redux/actionCreators'

class AddListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAddList: "show-add-list",
      displayPopOver:"hide-pop-over",
      listTitle: "",
    };
    this.showPopOver = this.showPopOver.bind(this);
    this.onChange = this.onChange.bind(this);
    this.hidePopOver = this.hidePopOver.bind(this);
    this.resetInput = this.resetInput.bind(this);


    AddListContainer.propTypes = {
      displayAddList: string,
      displayPopOver: string,
      showPopOver: func,
      onChange: func,
      boardTitle: string,
      currentUserId: string,
      hidePopOver: func,
      openBoard: array,
      addList: func
      
    }
  }

  //Method to show the popover in order to create a new list 
  showPopOver(){
    this.setState({displayAddList: "hide-add-list", displayPopOver: "show-pop-over"});
  }

  //Method to handle the input value of the list's title when a list is being created
  onChange(inputValue){
     this.setState({listTitle: inputValue});
  } 

  //Method to hide popover that shows the option to create a new list
  hidePopOver(){
    this.setState({displayAddList: "show-add-list", displayPopOver: "hide-pop-over"});
  }

  //Method to reset input of the list's title 
  resetInput(){
      this.setState({listTitle:""});
  }
  render() {
     const { currentUserId, openBoard, addList  } = this.props;

    return (
      <AddList
        displayAddList= {this.state.displayAddList}
        displayPopOver= {this.state.displayPopOver}
        showPopOver = {this.showPopOver}
        onChange = {this.onChange}
        listTitle = {this.state.listTitle}
        currentUserId = {currentUserId}
        openBoard = {openBoard[0]}
        addList = {addList}
        hidePopOver = {this.hidePopOver}
        resetInput = {this.resetInput}
      />
    );
  }
};

const mapStateToProps = state => {
  return {
    currentUserId: state.currentUser.id,
    openBoard : state.openBoard ? state.openBoard: []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addList: (listInformation) => dispatch(addList(listInformation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListContainer);