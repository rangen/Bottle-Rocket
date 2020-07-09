import React, { PureComponent } from 'react'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
import './sign-up.styles.scss'
import api from '../../services/api'

class SignUp extends PureComponent {
  state = {
    success: false,
    errors: [] 
  }

  submitNewUser = (e, formContents) => {
    const newState = {};
    e.preventDefault();
    const data = JSON.stringify(formContents);
    
    const config = {
                  method: "POST",
                  body: data,
                  credentials: 'include',
                  headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                  }
                }

    api.app.signUp(config)
      .then(resp=> {
                  newState.success = resp.status === 200
                  return resp.json()
              })
      .then(json=>{
                  newState.errors = json.errors || []
      })
      .then(()=>this.setState(newState))


    api.app.setupIntent({
      method: "POST",
      body: data,
      credentials: 'include',
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
    }
  })
}

  render() {
    if (this.state.success) {
      return <>
              <p>Thanks for signing up!  We'll send a confirmation email to {} to verify these details.</p>
              <p>Once you're signed up, you'll be receiving delicious offers straight to your phone in no time!</p>
            </>       //on successful signup!
    } else {
      //  signing up or form needs to be updated with error from backend (uniqueness fail for fields etc.)
      return (
        <div className=''>
          <SignUpForm submit={this.submitNewUser} errors={this.state.errors} />
        </div>
      )
    }
  }
}

export default SignUp
