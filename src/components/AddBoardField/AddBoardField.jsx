import React from 'react';
import AddBoardFieldStyle from './_AddBoardField.scss'


class AddBoardField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


    };
    AddBoardField.defaultProps = {
      displayAddField: "show-add-field",
      displayPopOver: "hide-pop-over"
    };

    this.handleAddBoard = this.handleAddBoard.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleAddBoard() {
    this.props.showPopOver();
  }

  handleOnChange(e) {

    e.preventDefault();
    const inputValue = e.target.value;
    this.props.onChange(inputValue)
  }

  handleOnSubmit(e){
    e.preventDefault();
    const boardInformation = {title: this.props.boardTitle, idMembers: [this.props.currentUserId]}
    this.props.hidePopOver();
    this.props.resetInput();
    this.props.addBoard(boardInformation);
  }

  render() {

    return (

      <div>
        <div className={this.props.displayAddField}>
          <a className="board-field add-board" onClick={this.handleAddBoard}>
            <span> Create new board...
        </span>
          </a>
        </div>

        <div className={this.props.displayPopOver}>
          <div className="add-pop-over" >
            <div className="add-pop-over-header">
              <span className="add-pop-over-header-title">Create Board</span>
              <a href="#" className="add-pop-over-header-close-btn">
                <img src={require("../../img/close-Icon.svg")} className="icon-size" onClick={this.props.hidePopOver} />
              </a>
            </div>
            <div className="add-pop-over-content">
              <form onSubmit={this.handleOnSubmit}>
                <label className="add-pop-over-font">Title</label>
                <input id="boardNewTitle"
                  className="add-pop-over-input"
                  type="text"
                  name="boardTitle"
                  placeholder="Like “Team Product Sprint” for example…"
                  value={this.props.boardTitle}
                  onChange={this.handleOnChange}
                  dir="auto"
                  />
                <input className="add-pop-over-button"
                  type="submit"
                  value="Create" />
              </form>
            </div>
          </div>
        </div>


      </div>
    )
  };
}

AddBoardField.propTypes = {
  addBoard: React.PropTypes.func.isRequired
}


export default AddBoardField;