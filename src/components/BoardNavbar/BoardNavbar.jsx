import React from 'react';
import NavbarStyle from './_BoardNavbar.scss'

class BoardNavbar extends React.Component {
   constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e){
    e.preventDefault();
    this.props.logOut();
  }
  render() {
    return (
      <nav className="navbar fixed-top navbar-inverse ">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle navbar-toggle-button" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <img src={require('../../img/board-Icon.svg')} className="navbar-brand-board-logo" />
          <label className="navbar-brand-board-title">Boards</label>
          
        </div>
        <div className="collapse navbar-collapse navbar-collapse-background" id="myNavbar">
          <ul className="nav navbar-nav">


            <li>
              <form className="navbar-form navbar-form-display" role="search">
                <div className="input-group navbar-form-display">
                  <input type="text" className="form-control form-control-style navbar-search navbar-form-display" placeholder="Search" />
                  <span className="input-group-btn navbar-form-display">
                    <button type="submit" className="btn btn-default form-control-style__button navbar-form-display">
                      <img src={require("../../img/searchIcon.svg")} className="form-control-style__image navbar-form-display" />
                    </button>
                  </span>
                </div>
              </form>
            </li>

            <li>  
              <form className="navbar-form  navbar-form-collapse-display" role="search">
                <div className="input-group">
                  <input type="text" className="form-control-style-collapse navbar-search" placeholder="Search..."/>
                </div>
              </form>
            </li>


            <hr className="navbar-content-division navbar-content-division-display" />

            <li>
              <img src={require("../../img/Trello-logo.svg")} className="navbar-logo navbar-logo-display" />
            </li>

            <li>
              <button className="navbar-button navbar-button__add"></button>
            </li>

            <hr className="navbar-content-division navbar-content-division-display" />

            <li>
              <button className="navbar-button navbar-button__important"></button>
            </li>

            <hr className="navbar-content-division navbar-content-division-display" />

            <li>
              <button className="navbar-button__bell"></button>
            </li>

            <hr className="navbar-content-division navbar-content-division-display" />

            <li>
              <div className="dropdown dropdown-style">
                <div data-toggle="dropdown" className="dropdown-toggle dropdown-font">Marco Sol<b className="caret dropdown-style__caret"></b></div>
                <ul className="dropdown-menu">
                  <li><a href="#" onClick={this.handleLogOut}>Log Out</a></li>
                  <li><a href="#">Another action</a></li>
                </ul>
              </div>
            </li>

            <hr className="navbar-content-division navbar-content-division-display" />


          </ul>
        </div>

      </nav>

    )
  };
}

BoardNavbar.propTypes = {
  logOut: React.PropTypes.func.isRequired
}

export default BoardNavbar;