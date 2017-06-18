import React from 'react';
import NavbarStyle from './_BoardNavbar.scss'
import $ from 'jquery'





class BoardNavbar extends React.Component {
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

          <img src={require("../../img/Trello-logo.svg")} className="navbar-brand-logo navbar-brand-logo-display" />

        </div>
        <div className="collapse navbar-collapse navbar-collapse-background" id="myNavbar">
          <ul className="nav navbar-nav">


            <li>
              <form className="navbar-form navbar-form-display" role="search">
                <div className="input-group">
                  <input type="text" className="form-control form-control-style navbar-search" placeholder="Search" />
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-default form-control-style__button">
                      <img src={require("../../img/searchIcon.svg")} className="form-control-style__image" />
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
                <div data-toggle="dropdown" className="dropdown-toggle dropdown-font">Marco Solis<b className="caret dropdown-style__caret"></b></div>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
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

export default BoardNavbar;