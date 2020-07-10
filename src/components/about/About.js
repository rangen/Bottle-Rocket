import React from 'react'
import { ReactComponent as WineIcon } from '../../assets/icon/wine.svg'
import './about.styles.scss'


const About = () => {
  return (
    <div>
      <div className='text-container'>
        {/* <span>Welcome to </span> */}
          <span className='company-name' >bottlerocket </span>
        <span>connects you with local wine merchants and couriers
                to bring you great bottles of wine, <i> at rocket speed</i></span>
          <br /><br />
        <span>Sign up for <span className='company-name' >bottlerocket </span>
                and receive daily text offers for unique bottles of wine, which upon purchase are hand delivered within hours by local couriers</span>
          <br />
       
      </div>
      <div className='container'>
        <div className='row'>
          <div className='card col s4'>
            <div className="card-header">
              {/* <h5>Step 1:</h5> */}
            </div>
            <div className='card-image'>
              <i className="large material-icons">phone_iphone</i>
            </div>
            <div className='card-content about-text'>
              <p>Receive offers from your local wine shop by linking your mobile number</p><br />
              <p>When you recieve an offer that makes you thirsty, reply to the message with the offer keyword and a quantity</p><br />
            </div>
          </div>
          <div className='card col s4'>
            <div className="card-header">
              {/* <h5>Step 2:</h5> */}
            </div>
            <div className='card-image'>
              <i className="large material-icons">airport_shuttle</i>
            </div>
            <div className='card-content about-text'>
              <p>Your local merchant processes your order using saved payment info</p><br />
              <p> BottleRocket then generates an optimized route for a delivery driver that services your address</p>
            </div>
          </div>
          <div className='card col s4'>
            <div className="card-header">
              {/* <h5>Step 3:</h5> */}
            </div>
            <div className='card-image'>
              <WineIcon className='icon' />
            </div>
            <div className='card-content about-text'>
              <p>Receive real-time updates about your delivery status and meet your courier curbside with ID when they arrive</p><br />
              <p>Enjoy! Finding great bottles of wine has never been so fast and easy </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
