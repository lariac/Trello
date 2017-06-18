import React from 'react';
import BoardStyle from './_Board.scss'
import BoardNavbar from '../BoardNavbar/BoardNavbar'

class Board extends React.Component {
  render() {
    return (
      <div>
          <BoardNavbar/>
        <main className="content">
          
       <div> HOOOLA
       </div>
          
        </main>
      </div>
    )
  };
}

export default Board;