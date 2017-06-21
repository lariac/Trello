import React from 'react';
import BoardNavbar from '../BoardNavbar/BoardNavbar'
import BoardsPanelStyle from './_BoardsPanel.scss'
import BoardField from '../BoardField/BoardField'
import AddBoardFieldContainer from '../../containers/AddBoardFieldContainer/AddBoardFieldContainer'

class BoardsPanel extends React.Component {
  render() {
    return (
      <div>
        <header>
          <BoardNavbar />
        </header>
        <main className="content boards-panel">

          <div className="row">

            <div className="col-md-10 row-col-style">
              <div className="boards-section">
                <img className="boards-section-logo" src={require("../../img/user.svg")} />
                <h3 className="boards-section-title"> My Personal Boards</h3>
              </div>
            </div>
          </div>

      
            <ul className="boards-panel-wrapper boards-panel">
              <li className="boards-panel-item"><BoardField Boardtitle = "Welcome Board" /></li>
              <li className="boards-panel-item"><BoardField Boardtitle = "Welcome Bssssoard" /></li>
              <li className="boards-panel-item"><BoardField Boardtitle = "Welcome Board"  /></li>
              <li className="boards-panel-item"><BoardField Boardtitle = "Welcome" /></li>
              <li className="boards-panel-item"><BoardField Boardtitle = "Board"/></li>
              <li className="boards-panel-item"><BoardField Boardtitle = "Buuu" /></li>

              <li className="boards-panel-item add-board"><AddBoardFieldContainer/></li>
    
            </ul>
  


        </main>
      </div>
    )
  };
}

export default BoardsPanel;