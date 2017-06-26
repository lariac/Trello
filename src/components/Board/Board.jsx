import React from 'react';
import BoardStyle from './_Board.scss'
import ListContainer from '../../containers/ListContainer/ListContainer'
import AddListContainer from '../../containers/AddListContainer/AddListContainer'
import BoardNavbarContainer from '../../containers/BoardNavbarContainer/BoardNavbarContainer';
import { object } from 'prop-types';
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }


  render() {
    const { openBoard, boardList } = this.props;
    let listTitle = "";
    let idList = "";
    return (
    
      <div>
        <header className="header-style">
          <BoardNavbarContainer />
        </header>
        <main className="content">
          <div className="row ">
            <div className="col-md-10 row-col-style">
              <div className="board-title">
                {openBoard.title}
              </div>
            </div>
            <div className="col-md-2">
            </div>
          </div>
          <div className="list-wrapper">
            {boardList.map((item) => {
               listTitle = item.title;
               idList = item._id
              return <ListContainer 
              key = {item._id} 
              listTitle={listTitle} 
              list = {item}
              idList= {idList}/>
            })}
            <AddListContainer/>
          </div>
        </main>
      </div>
    )
  };
}

Board.defaultProps = {
  openBoard: { title: "Hola" },
  boardList: [{ idCards: "Card1" }],
  list: {},
  idList: ""
}

export default Board;