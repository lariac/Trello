import React from 'react';
import ListStyle from './_List.scss'
import Card from '../Card/Card'
import CardContainer from '../../containers/CardContainer/CardContainer'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    List.defaultProps = {
      listTitle: "Design Thinking Session"
    };
  }

  render() {

    return (
      <div>
        <div className="thumbnail list-panel">
          <div className="list-title"> {this.props.listTitle}
          </div>

          <div className="list-panel-card">
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
          </div>
          <div className="list-panel-add-card">
            <button type="submit" className="list-panel-add-card__button">
              <img src={require("../../img/add-Icon.svg")} />
            </button>
            <span className="list-panel-add-card__font"> Add Card </span>
          </div>
        </div>
      </div>
    )
  };
}

export default List;