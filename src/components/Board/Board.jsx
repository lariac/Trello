import React from 'react';
import BoardStyle from './_Board.scss'
import BoardNavbar from '../BoardNavbar/BoardNavbar'
import ListContainer from '../../containers/ListContainer/ListContainer'

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    Board.defaultProps = {
      boardTitle: "This is the project title"
    };
  }


  render() {

    return (
      <div>
        <header className="header-style">
          <BoardNavbar />
        </header>
        <main className="content">

          <div className="row ">

            <div className="col-md-10 row-col-style">
              <div className="board-title"> {this.props.boardTitle}
              </div>
            </div>
            <div className="col-md-2">
            </div>

          </div>


          <div className="list-wrapper">
            <ListContainer listTitle={this.props.listTitle} />
            <ListContainer listTitle={this.props.listTitle} />
            <ListContainer listTitle={this.props.listTitle} />
            <ListContainer listTitle={this.props.listTitle} />
            <ListContainer listTitle={this.props.listTitle} />
            <ListContainer listTitle={this.props.listTitle} />

            <ListContainer listTitle={this.props.listTitle} />
            <ListContainer listTitle={this.props.listTitle} />
            <ListContainer listTitle={this.props.listTitle} />


          </div>

        </main>
      </div>
    )
  };
}

export default Board;