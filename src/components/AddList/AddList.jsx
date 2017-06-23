import React from 'react';
import AddListStyle from './_AddList.scss'


class AddList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


    };
    AddList.defaultProps = {
      displayAddList: "show-add-list",
      displayPopOver: "hide-pop-over"
    };

    this.handleAddList = this.handleAddList.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    
  }

  handleAddList() {
    this.props.showPopOver();
  }

  handleOnChange(e) {

    e.preventDefault();
    const inputValue = e.target.value;
    console.log("hanle en change event!!!");
    this.props.onChange(inputValue)
  }

  handleOnSubmit(e) {
    e.preventDefault();
    console.log("password del user " + this.props.currentUserId);
    console.log("id del board " + this.props.openBoard._id);
    const listInformation = { title: this.props.listTitle, idBoard: this.props.openBoard._id, idMembers: [this.props.currentUserId] }
    this.props.hidePopOver();
    this.props.resetInput();
    this.props.addList(listInformation);
  }

  render() {
    console.log("title es:" + this.props.listTitle);
    return (
      <div>
        <div className={this.props.displayAddList}>
          <a className="thumbnail add-list-panel" onClick={this.handleAddList}>
            <div className="list-title">
              <span> Create new List...</span>
            </div>
          </a>
        </div>

        <div className={this.props.displayPopOver}>

          <div className="add-list-panel">
            <div className="add-list">
              <form onSubmit = {this.handleOnSubmit}>
                <input
                  className="add-list-input"
                  type="text"
                  name="name"
                  placeholder="Add a list…"
                  autoComplete="off"
                  maxLength="512"
                  value={this.props.listTitle}
                  onChange={this.handleOnChange}
                  dir="auto" />
                <div className="add-list-button-panel">
                  <input className="add-list-button"
                    type="submit"
                    value="Create" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

AddList.propTypes = {
  addList: React.PropTypes.func.isRequired
}


export default AddList;