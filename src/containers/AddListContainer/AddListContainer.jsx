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
  showPopOver(){
    this.setState({displayAddList: "hide-add-list", displayPopOver: "show-pop-over"});
  }
  onChange(inputValue){
     this.setState({listTitle: inputValue});
  } 
  hidePopOver(){
    this.setState({displayAddList: "show-add-list", displayPopOver: "hide-pop-over"});
  }
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
    //   invalidAccount: state.invalidAccount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addList: (listInformation) => dispatch(addList(listInformation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListContainer);