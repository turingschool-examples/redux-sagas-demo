import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class Main extends Component {
  componentWillMount = () => {
    if(!this.props.loggedIn) {
      this.props.history.push('/login')
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if(!nextProps.loggedIn) {
      this.props.history.push('/login')
    }
  }

  render = () => (
    <div>
      This is the main page
      <button onClick={this.props.logOut}>Log Me Out</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn,
})

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(actions.logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
