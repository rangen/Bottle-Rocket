import React from 'react'
import { ReactComponent as WineIcon } from '../../assets/icon/wine.svg'
import './about.styles.scss'


const About = () => {
  return (
    <div>
      <div className='text-container'>
        <span>Welcome to, </span>
          <span className='company-name'>bottlerocket </span>
        <span>where you can get great quality wines delivered to your door with just the push of a button. We work with wine establishments in your area and provide exclusive offers just for our members.</span>
      </div>
      <h3>How it works:</h3>
      <div className='container'>
        <div className='row'>
          <div className='card col s4'>
            <div className="card-header">
              <h5>Step 1:</h5>
            </div>
            <div className='card-image'>
              <i className="large material-icons">phone_iphone</i>
            </div>
            <div className='card-content about-text'>
              <p>We'll send you a text every day with an exclusive offer. Reply with the offer code as well as the number of bottles you would like to recieve</p>
            </div>
          </div>
          <div className='card col s4'>
            <div className="card-header">
              <h5>Step 2:</h5>
            </div>
            <div className='card-image'>
              <i className="large material-icons">airport_shuttle</i>
            </div>
            <div className='card-content about-text'>
              <p>We'll send you back a message confirming your order. Our drivers will drop off to your door at the scheduled time</p>
            </div>
          </div>
          <div className='card col s4'>
            <div className="card-header">
              <h5>Step 3:</h5>
            </div>
            <div className='card-image'>
              <WineIcon className='icon' />
            </div>
            <div className='card-content about-text'>
              <p>Sit back, relax and and enjoy responsibly!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
