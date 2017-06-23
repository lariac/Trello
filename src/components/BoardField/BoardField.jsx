import React from 'react';
import BoardFieldStyle from './_BoardField.scss';
import { Route, Redirect } from 'react-router'


class BoardField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

this.handleDeleteBoard = this.handleDeleteBoard.bind(this);
this.handleViewBoard = this.handleViewBoard.bind(this);
  //  this.deleteBoard = this.deleteBoard.bind(this);
  }

  handleDeleteBoard(e) {
    e.stopPropagation();
    console.log("authenticate user: " + this.props.authenticatedUserId);
    this.props.deleteBoard(this.props.id, this.props.authenticatedUserId);
  }

  handleViewBoard(){
    //alert('hola');
  //  const url = "/board/" +  this.props.id;

  //  this.context.router.history.push("/board/" +  this.props.id);
this.props.getBoardInformation(this.props.id);
this.context.router.history.push("/board/" +  this.props.id);
  }

  render() {
    return (
      <a id={this.props.id} className="board-field" onClick={this.handleViewBoard}>
        <span className="board-field-fade"></span>
        <span className="board-field-details is-badged">
          <span className="board-field-details-name">{this.props.Boardtitle}</span>
        </span>
        <button className="board-field-delete show-delete-icon" onClick={this.handleDeleteBoard}>
          <img className="board-field-delete-icon" src={require("../../img/delete-icon.svg")} />
        </button>
      </a>
    )
  };
}

BoardField.PropTypes = {
  deleteBoard: React.PropTypes.func.isRequired,
  id: React.PropTypes.string,
  displayDeleteIcon: React.PropTypes.string,
  getBoardInformation: React.PropTypes.func.isRequired
}

BoardField.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default BoardField;



