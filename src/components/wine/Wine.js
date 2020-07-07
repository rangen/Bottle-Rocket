import React from 'react'
import { Button, Divider, makeStyles } from '@material-ui/core'
import './wine.styles.scss'

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: '10px'
  },
  button: {
    height: '10%',
    width: '46%'
  }
}));

const Wine = ({ wine, deleteWine, wineID }) => {
  const classes = useStyles();
  return (
    <div className='row'>
    <div className='col s12 m7'>
      <div className="card">
        <div className="card-image">
          <img alt='' src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F10%2FPNGPIX-COM-Wine-Bottle-PNG-Transparent-Image.png&f=1&nofb=1' />
          <span>{wine.attributes.fullName}</span>
        </div>
        <div>
            <Button className={classes.button} color='secondary' variant="contained" onClick={(e)=>deleteWine(e, wineID)} >Delete Wine</Button>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default Wine