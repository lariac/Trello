import React from 'react';
import Home from '../../components/Home/Home'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router'

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidUpdate() {
    if (this.props.isAuthenticated != undefined && this.props.isAuthenticated === true) {
      this.context.router.history.push('/board')
    }
  }

  componentWillMount() {
    if (this.props.isAuthenticated != undefined && this.props.isAuthenticated === true) {
      this.context.router.history.push('/board')
    }
  }

  render() {
    return <Home/>
  }
};


const mapStateToProps = state => {
  return {
       isAuthenticated: state.isAuthenticated
  }
}


HomeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default connect(mapStateToProps, null)(HomeContainer);
