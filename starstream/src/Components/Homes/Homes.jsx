import React, { useState } from 'react';
import Home from './Home';
import { homeData } from '../../dummyData';
import './home.css'

const Homes = () => {
    const [items,setItems] =useState(homeData)
  return (
    <di>
        <div className='home'>
            <Home items={items}/>
        </div>
        <div className='mraging'></div>
    </di>
  )
}

export default Homes
