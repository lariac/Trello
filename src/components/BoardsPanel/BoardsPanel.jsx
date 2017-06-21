import React from 'react';
import BoardNavbarContainer from '../../containers/BoardNavbarContainer/BoardNavbarContainer'
import BoardsPanelStyle from './_BoardsPanel.scss'
import BoardField from '../BoardField/BoardField'
import AddBoardFieldContainer from '../../containers/AddBoardFieldContainer/AddBoardFieldContainer'
import { arrayOf, shape, string, bool } from 'prop-types';

class BoardsPanel extends React.Component {
  constructor(props) {
    super(props);

    BoardsPanel.propTypes = {
      isFetching: bool,
      boards: arrayOf(shape({
        _id: string,
        name: string,
        idMembers: Array
      }))
    }
  }
  render() {
    const boards = this.props.boards;
    return (
      <div>
        <header>
           <BoardNavbarContainer />
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
            {boards.map((item) => {
              return <li className="boards-panel-item"> <BoardField
                key={item._id}
                Boardtitle={item.title} />
              </li>
            })}

              <li className="boards-panel-item add-board"><AddBoardFieldContainer /></li>
          </ul>
        </main>
      </div>
    )
  };
}

export default BoardsPanel;