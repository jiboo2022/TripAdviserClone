import React from 'react';
import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import Logo from './triadvisor.jpg';
import SearchBar from './SearchBar';

const Header = () => {
  return (

    

    <Stack
    direction='row'
    alighItems = 'center'
    p={2}
    sx={{ position: 'sticky' ,
     background: '#000', top: 0, justifyContent:'space-between'}}>


<span style={{ color:'white', fontWeight:'bold', marginTop:'14px'}}>TRIP ADVISOR</span>

   <span style={{marginLeft:'55%',color:'white',marginTop:'14px',fontSize:'15px'}}> Explore New Places</span>< SearchBar/>  


    </Stack>
    
    
    
  );
}

export default Header