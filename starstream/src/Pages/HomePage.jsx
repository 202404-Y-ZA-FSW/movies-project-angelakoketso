import React, { useState } from 'react';
import Homes from '../Components/Homes/Homes';
import { homeData } from '../dummyData';



const HomePage = () => {
  const [items, setItems] =useState(homeData) 
  return (
    <div>
      <section className='home'>
       <Homes items ={items}/>
      </section>
      
    </div>
  )
}

export default HomePage
