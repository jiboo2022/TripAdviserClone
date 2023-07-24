import React,{useState, useEffect} from 'react';
import { CssBaseline, Grid } from '@mui/material';
import  Header from './components/Header/Header';
import  List from './components/List/List';
import  Map from './components/Map/Map';
import { getPlacesData } from './components/api';




const App = () => {

  const [places, setPlaces]= useState([]);

  const [coordinates, setCoordinates]= useState({});
  const [bounds, setBounds] = useState({});


  useEffect( ()=>{

    navigator.geolocation.getCurrentPosition( ({coords:{latitude,longitude}})=>{
        setCoordinates({lat:latitude, lng:longitude})

    } )



  },[] )


 // const swlat = bounds.sw:{lat};
  //const swlng = bounds.sw.lng;

    /* const swlat = bounds.sw.lat;
     const swlnd = bounds.sw.lng;
     const nelat = bounds.ne.lat;
     const nelnd = bounds.ne.lng;  */


    

   //console.log(bounds.ne,bounds.sw);

   
     useEffect( ()=>{
  //console.log(coordinates,bounds)
                   
    getPlacesData(bounds.ne,bounds.sw).then( (data)=>setPlaces(data));

         console.log(places)

   },[coordinates, bounds,places ] )  
 /*console.log(places);*/
  
  
    return (
    <>

      <CssBaseline />
      <Header/>
      <Grid container spacing={3} style={{width: '100%'}}>

        <Grid item xs={12} md={4}>

                <List places={places}/>

        </Grid>

        <Grid item xs={12} md={8}>

            <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates = {coordinates}
              
            />
        </Grid>





      </Grid>


    
    
    
    
    
    
    
    </>
  )
}

export default App