import React, { Component } from 'react'

class SignOut extends Component {

  state = {
    color: 'black'
  }

  componentDidMount() {
    this.blinker = setInterval(this.animateMsg, 250)
    console.log('Logging out in 10 seconds...')
    setTimeout(this.logout, 1800)
  }

  animateMsg = () => {
    // const colors = ['black', 'gray']
    // const newColor = colors[~~(Math.random() * colors.length)]
    const colors = {'black': 'gray', 'gray': 'black'}
    this.setState({
      color: colors[this.state.color]
    })
  }

  logout = () => {
    clearInterval(this.blinker)

    const config = {
            method: 'DELETE',
            credentials: 'include',
            headers: {
              "accept": "application/json",
              "content-type": "application/json"
            }
    }

    fetch('http://localhost:3000/logout', config)
      .then(resp=>resp.json())
      .then(json=>this.props.afterLogout(json))
  }

  render() {
    return (
      <div>
        <h1 style={{color: this.state.color}}>Logging Out...</h1>
      </div>
    )
  }
}

export default SignOut