import { Data } from "@react-google-maps/api";
import axios from "axios";

export const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (ne,sw)=>{

    try{

        const {data:{data}} = await axios.get(URL, {
  
  
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            limit: '20',
           
           
          },
          headers: {
            'X-RapidAPI-Key': 'aea2f3d6c3msh6f47c1df67d7febp18ba24jsn4620106823de',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });

        //const data = await response.json();
       
        return data;


    } catch(error){
          
        console.log(error);

         }




}