import React, { PureComponent } from 'react'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
import './sign-up.styles.scss'

class SignUp extends PureComponent {
  state = {
    success: false,
    errors: [] 
  }

  submitNewUser = (e, formContents) => {
    e.preventDefault();
    console.log('Submitting New User Form!')
    console.dir(formContents)
    const data = JSON.stringify(formContents);
    const target = `http://localhost:3000/subscriptions/new`
    
    const config = {
                  method: "POST",
                  body: data,
                  credentials: 'include',
                  headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                  }
                }

    fetch(target, config)
      .then(resp=>resp.json())
      .then(json=>this.processSignUpResponse(json))
  }

  processSignUpResponse = (data) => {
    debugger
  }

  render() {
    if (this.state.success) {
      return <>SignUp Complete!</>       //on successful signup!
    } else {
      //  signing up or form needs to be updated with error from backend (uniqueness fail for fields etc.)
      return (
        <div className='group'>
          <h1 className='title'>Sign Up for BottleRocket</h1>
          <SignUpForm submit={this.submitNewUser} errors={this.state.errors} />
        </div>
      )
    }
  }
}

export default SignUp
