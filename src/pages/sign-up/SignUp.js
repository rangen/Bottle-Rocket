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

    // api.app.setupIntent()
    // .then(res => res.json())
    // .then(data => console.log(data))

}

  render() {
    if (this.state.success) {
      return (
            <>
              <div className='text-container'>
                <span>Thanks for signing up for <span className='company-name' >bottlerocket </span></span>
                <br /><br />
                <span>Look for our introductory text message at the number you provided explaining how
                          you can get great bottles of wine, fast!
                </span>
                <br /><br />
                <span>We want to stay friends forever, but if you ever need a break from all the awesome offers,
                        simply send the message <i>pause</i>.
                </span>
                <br /><br />
                <span>We'd really miss you, but if you get thirsty again, we'll welcome you back with open arms.
                   Send the message <i>resume</i> and all will be forgiven.
                </span>


                <br /><br /><br />
                <span>Cheers!</span>
                <br /><br />
                <span> Sean Dever + Don Mallory @ <span className='company-name' >bottlerocket </span></span>
                 <i>
                  <br /><br />
                  (in tribute to Matthew Campbell, the best dad ever)</i>
                


              </div>
      </>       //on successful signup!
      )
    } else {
      //  signing up or form needs to be updated with error from backend (uniqueness fail for fields etc.)
      return (
        <div className=''>
          <h3 className='title'>Sign Up for BottleRocket</h3>
          <SignUpForm submit={this.submitNewUser} errors={this.state.errors} />
        </div>
      )
    }
  }
}

export default SignUp
