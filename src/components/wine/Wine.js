import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
// import theme from '../../theme'
import './wine.styles.scss'

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: '10px'
  },
  button: {
    height: '35px',
    width: '46%'
  }
}));

const Wine = ({ wine, deleteWine, wineID }) => {
  const classes = useStyles();
  return (
    // <div className='row'>
    // <div className='col s12 m3'>
      <div className="card hoverable">
        <div className="card-image">
          <img className='responsive-image' 
            alt='' 
            src={wine.attributes.imageUrl ? wine.attributes.imageUrl : 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F10%2FPNGPIX-COM-Wine-Bottle-PNG-Transparent-Image.png&f=1&nofb=1'} />
          <span>{wine.attributes.fullName}</span>
        </div>
        <div className='card-action'>
            <Button className={classes.button} color='secondary' variant="contained" onClick={(e)=>deleteWine(e, wineID)} >Delete Wine</Button>
        </div>
      </div>
  //   </div>
  // </div>
    
  )
}

export default Wine