import React from 'react'
import GoogleMapReact from 'google-map-react';
//import {Paper , Typograpphy, useMediaQuery} from '@mui/material';
//import locationOutlinedIcon from '@mui/icons-material'


const Map = ( {setCoordinates,setBounds,coordinates}) => {

  //const coordinates = { lat:0 , lng:0}; 
  
  return (
    <div style={{ width:'100%', height:'85vh' }}>
      <GoogleMapReact
      bootstrapURLKeys={{key:'AIzaSyBkaLQkJiN733rrFCHy6m2S6AG_It0hXwo'}}
      defaultCenter = {coordinates}
      center={coordinates}
      defaultZoom = {14}
      margin={[50, 50,50,50]}
      options={''}
      onChildClick ={''}
      onChange={ 
         
        (e)=>{
          
          //console.log(e);
           setCoordinates({lat: e.center.lat, lng:e.center.lng});
           setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})



      }}

          onLoad={ (e)=>{
            setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})

          }}
      

      >


      </GoogleMapReact>





    </div>
  )
}

export default Map