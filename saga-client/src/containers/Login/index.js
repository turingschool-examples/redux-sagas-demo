import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  componentWillMount = () => {
    if(this.props.loggedIn) {
      this.props.history.push('/main')
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.loggedIn) {
      this.props.history.push('/main')
    }
  }
    
  handleChange = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitLogin = async event => {
    event.preventDefault()
    await this.props.loginUser(this.state)
  }

  render = () => (
    <div>
      <form onSubmit={this.submitLogin}>
        <input 
          type='text' 
          name='email' 
          placeholder='Email' 
          onChange={this.handleChange} />
        <input 
          type='password' 
          name='password' 
          placeholder='Password' 
          onChange={this.handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(actions.submitUserLogin(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
