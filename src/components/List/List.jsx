import React,{useState} from 'react';
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select  } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({places}) => {

   /*const places = [
    {name:'Federal Palace Hotel', location:'Victoria Island',},
    {name:'SHeraton Hotel',location:'Ikeja',},
    {name:'Protea Hotel',location:'Ikeja',},
    {name:'Orientals Hotel',location:'Victoria island',},
    {name:'Continental Hotel',location:'Victoria island',},
    {name:'Radisson Blu Hotel',location:'Ikeja',},
    {name:'The Wheatbaker',location:'Ikoyi',},
    {name:'The George Hotel',location:'Ikeja',},
    {name:'Legend Hotel',location:'Ikeja',},
    {name:'Villa Monument Hotel',location:'Ikoyi',},
    {name:'SHeraton Hotel ',location:'Lekki',},

  ];*/

  const [type, setType] = useState('restaurant');
  const [ratings, setRatings] = useState('');

  return (
    <div style={{ padding: '25px'}}>
      <Typography>Restaurants Hotels & Attractions Around you</Typography>

      <FormControl style={{ margin:10, minWidth: 120, marginBottom: '30px',}}>
        <InputLabel>Type</InputLabel>
        <Select onChange={ (e)=> setType(e.target.value)} value={type}>

           <MenuItem value='restaurants'>Restaurants</MenuItem>
           <MenuItem value='hotels'>Hotels</MenuItem>
           <MenuItem value='attractions'>Attractions</MenuItem>
           
        </Select>
      </FormControl>

      <FormControl style={{ margin:10, minWidth: 120, marginBottom: '30px',}}>
        <InputLabel>Ratings</InputLabel>
        <Select onChange={ (e)=> setRatings(e.target.value)} value={ratings}>

           <MenuItem value='0'>All</MenuItem>
           <MenuItem value='2'>Above 2.0</MenuItem>
           <MenuItem value='3'>Above 3.0</MenuItem>
           <MenuItem value='4'>Above 4.0</MenuItem>
           <MenuItem value='4.5'>Above 4.5</MenuItem>
           
        </Select>
      </FormControl>

      <Grid container spacing={3} style={{ height: '75vh', overflow: 'auto',}}>
       {
           
           places.map( (place, i)=> (
        
        
            <Grid item key={i} xs={12}>

              <PlaceDetails  place={place}/>
              
              </Grid>
          
          ))

       }
        


      </Grid>
  
    </div>
  )
}

export default List