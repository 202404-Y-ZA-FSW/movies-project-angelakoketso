import React, { useState } from 'react';
import Homes from '../Components/Homes/Homes';
import { latest, recommended, upcome } from '../dummyData';
import Upcoming from '../Components/Upcoming/Upcoming';
import Trending from '../Components/Trending/Trending';



const HomePage = () => {
  const [items, setItems] =useState(upcome)
  const [item, setItem] =useState(latest)
  const [rec, setRec] =useState(recommended)
  return (
    <div>
    
       <Homes items ={items}/>
       <Upcoming items ={items} title='Upcoming Movies'/>
       <Upcoming items ={item} title='Upcoming Movies'/>
       <Trending/>
       <Upcoming items ={rec} title='Recommended Movies'/>
    </div>
  )
}

export default HomePage
