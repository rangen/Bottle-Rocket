import React from 'react';
import { ReactComponent as GitHub } from '../../assets/icon/icons8-github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icon/icons8-linkedin.svg';
import './footer.styles.scss'

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
      <div className='comp-name'>
        <p>2020 BottleRocket</p>
      </div>
      <div className='icons'>
        Don Mallory:
        <a href='https://github.com/rangen'target="_blank">
          <GitHub className='footer-icon'/>
        </a>
        Sean Dever:
        <a href='https://github.com/Seanbon0611'target="_blank">
          <GitHub className='footer-icon'/>
        </a>
        <a href='https://www.linkedin.com/in/sean-dever-3a03b29a/' target='_blank'>
          <LinkedIn className='footer-icon'/>
        </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
