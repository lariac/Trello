import React from 'react';
import BoardFieldStyle from './_BoardField.scss'


class BoardField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }


  render() {

    return (
     
        <a className="board-field" href="/b/mK71YOBC/welcome-board"><span className="board-field-fade"></span>
          <span
            className="board-field-details is-badged"><span title="Welcome Board"
              dir="auto" className="board-field-details-name">{this.props.Boardtitle}</span></span>
        </a>
      
      
    )
  };
}

export default BoardField;