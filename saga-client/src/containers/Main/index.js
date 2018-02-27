import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
  componentWillMount = () => {
    if(!this.props.loggedIn) {
      this.props.history.push('/login')
    }
  }

  render = () => (
    <div>
      This is the main page
    </div>
  )
}

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn,
})

export default connect(mapStateToProps, null)(Main)
