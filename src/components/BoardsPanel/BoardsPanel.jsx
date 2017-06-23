import React from 'react';
import BoardNavbarContainer from '../../containers/BoardNavbarContainer/BoardNavbarContainer'
import BoardsPanelStyle from './_BoardsPanel.scss'
import BoardField from '../BoardField/BoardField'
import { arrayOf, shape, string, bool } from 'prop-types';
import BoardFieldContainer from '../../containers/BoardFieldContainer/BoardFieldContainer'


class BoardsPanel extends React.Component {
  constructor(props) {
    super(props);

    BoardsPanel.propTypes = {
     
    }
  }
  render() {
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
            <BoardFieldContainer boards={this.props.boards} />           
        </main>
      </div>
    )
  };
}

BoardsPanel.propTypes = {
  boards: React.PropTypes.arrayOf(React.PropTypes.object)
}



export default BoardsPanel;