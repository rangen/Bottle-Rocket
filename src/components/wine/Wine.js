import React from 'react'
import './wine.styles.scss'

const Wine = ({ wine, deleteWine, wineID }) => {
  return (
        <div class="row">
          <div class="col s4 m7">
            <div class="card">
             <div class="card-image">
              <img src={wine.attributes.imageUrl ? wine.attributes.imageUrl : 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F10%2FPNGPIX-COM-Wine-Bottle-PNG-Transparent-Image.png&f=1&nofb=1'} />
              <a class="btn-floating halfway-fab waves-effect waves-light red lighten-3" onClick={(e)=>deleteWine(e, wineID)}><i class="material-icons">clear</i></a>
            </div>
            <div class="card-content">
              <p>{wine.attributes.fullName}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Wine


//   // <div className='row'>
  //   // <div className='col s12 m3'>
  //     <div className="card hoverable">
  //       <div className="card-image">
  //         <img className='responsive-image' 
  //           alt='' 
  //           src={wine.attributes.imageUrl ? wine.attributes.imageUrl : 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F10%2FPNGPIX-COM-Wine-Bottle-PNG-Transparent-Image.png&f=1&nofb=1'} />
  //         <span>{wine.attributes.fullName}</span>
  //       </div>
  //       <div className='card-action'>
  //         <a class="waves-effect waves-teal btn-flat">Button</a>
  //         {/* <button className='btn-flat' color='secondary' variant="contained"  >Delete Wine</button> */}
  //       </div>
  //     </div>
  // //   </div>
  // // </div></div>