import React from 'react';
import CardStyle from './_Card.scss'
import CardMembers from '../CardMembers/CardMembers'


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    Card.defaultProps = {
      description: "",
      dueDate: "",
      username: "J"
    };
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
  }
  handleDeleteCard(e) {
    e.preventDefault();
    const idCard = this.props.idCard;
    const idBoard = this.props.openBoard._id;
    this.props.deleteCard(idCard, idBoard);

  }
  render() {

    return (
      <div>
        <div className="thumbnail card-panel">
        

          <p className="card-panel__description-font">{this.props.cardDescription}

          </p>


          <div className="users-panel">
            <span className="users-panel-due-date users-panel-due-date__font">{this.props.dueDate}</span>
            <div className="users-panel-members">
              <CardMembers currentUserName={
                this.props.currentUserName} />
            </div>
          </div>
        </div>
      </div>
    )
  };
}

Card.propTypes = {
  deleteCard: React.PropTypes.func.isRequired,
  openBoard : []
}

export default Card;