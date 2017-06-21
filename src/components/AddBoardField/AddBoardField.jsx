import React from 'react';
import AddBoardFieldStyle from './_AddBoardField.scss'


class AddBoardField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


    };

  }

  handleAddBoard() {

    alert("ACCION!!");
  }

  render() {

    return (

      <div>
        <a className="board-field add-board" href="/b/mK71YOBC/welcome-board" onClick={this.handleAddBoard}>
          <span> Create new board...
        </span>
        </a>
        <div className="add-pop-over "> HOOOOLAAAAAA


        <div className="add-pop-over-header">
            <span className="add-pop-over-header-title">Create Board</span>
            <a href="#" className="add-pop-over-header-close-btn">
              <img src={require("../../img/close-Icon.svg")} className="icon-size" />
            </a>
          </div>
          <div className="add-pop-over-content">
            <form>
              <label className="add-pop-over-font">Title</label>
              <input id="boardNewTitle"
                className="add-pop-over-input"
                type="text" name="name"
                placeholder="Like “Team Product Sprint” for example…"
                value=""
                dir="auto" />
                <input className="add-pop-over-button" 
                type="submit" 
                value="Create"/>
            </form>
          </div>
        </div>
      </div>
    )
  };
}

export default AddBoardField;