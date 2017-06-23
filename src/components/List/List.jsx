import React from 'react';
import ListStyle from './_List.scss'
import Card from '../Card/Card'
import CardContainer from '../../containers/CardContainer/CardContainer'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleShowAddCardEdition = this.handleShowAddCardEdition.bind(this);
    this.handleDeleteList = this.handleDeleteList.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAddCard = this.handleAddCard.bind(this);
  }

  handleShowAddCardEdition(e) {
    e.preventDefault();
    this.props.showAddCardEdition();


  }

  handleAddCard(e) {
    e.preventDefault();
  /*  console.log("el id de la lista es: " + this.props.list._id);
    console.log("el contenido de la caja de texto es: " + this.props.textAreaContent);
    const idList =  this.props.list._id; */
    const cardInformation = {idList: this.props.list._id, description: this.props.textAreaContent, idBoard: this.props.openBoard._id, idMembers:[this.props.authenticatedUserId] }
    this.props.addCard(cardInformation);
    this.props.hideAddCardEdition();
  }

  handleDeleteList() {
    // const idBoard = this.props.boardList[0]._id;
    console.log("el id del board es: ");
    const idBoard = this.props.openBoard._id;
    this.props.deleteList(this.props.idList, idBoard);
  }

  handleOnChange(e) {
    console.log("ENTRE A HANDLE ON CHANGE!!");
    e.preventDefault();
    let textAreaValue = e.target.value;
    this.props.onChange(textAreaValue);
  }


  render() {
    const { boardList, listTitle, list } = this.props;
    let counter = 0;
    return (
      <div>
        <div className="thumbnail list-panel">

          <div className="list-title"> {listTitle}

          </div>

          <div id={this.props.idList} className="delete-list" onClick={this.handleDeleteList}>
            <img className="delete-list-icon" src={require('../../img/red-delete-icon.svg')} />
          </div>
          <div className="list-panel-card">

            {console.log("boardlist es: ")}
            {console.log(boardList)}

            {list.idCards.map((item, list) => {
              console.log(item)
              ++counter;
              return <CardContainer key={counter}
                cardDescription={item.description}
                cardDueDate={item.dueDate}
                userName={item.idMembers[0].charAt(0)} />
            })}

            <div className={this.props.displayNewCardEdition}>
              <div className="add-card list-panel-card">
                <div className="add-card-text-area">
                  <textarea className="add-card-text-area-style"
                    dir="auto"
                    onChange={this.handleOnChange}
                    value={this.props.textAreaContent} >
                  </textarea>
                </div>
                <div className="add-card-panel-button">
                  <div className="add-card-panel-button-controls">
                    <input className="add-card-button"
                      type="submit"
                      value="Add"
                      onClick={this.handleAddCard} />
                    <div href="#" className="">
                      <img src={require("../../img/close-Icon.svg")} className="icon-size" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className={this.props.displayAddCard}>
            <div className="list-panel-add-card">
              <button type="submit" className="list-panel-add-card__button" onClick={this.handleShowAddCardEdition}>
                <img src={require("../../img/add-Icon.svg")} />
              </button>
              <span className="list-panel-add-card__font"> Add Card </span>
            </div>
          </div>


        </div>
      </div>
    )
  };
}

List.defaultProps = {
  boardList: [{ idCards: ["Card 1"] }],
  cardDescription: "",
  cardDueDate: "",
  displayAddCard: "show-add-card",
  displayNewCardEdition: "hide-new-card-edition",
  textAreaContent: ""
}

List.propTypes = {
  deleteList: React.PropTypes.func.isRequired,
  addCard: React.PropTypes.func.isRequired
}





export default List;