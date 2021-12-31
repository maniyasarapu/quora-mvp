import React from 'react'
import Navbar from '../navbar/Navbar'
import Space from '../space/Space'
import "./Quora.css"
import Feed from '../feed/Feed'
import Slide from '../slides/Slide'

const Quora = () => {
    return (
        <div className='quora'>
            <Navbar/>
           <div className='quora_main'>
               <Space/>
               <Feed/>
               <Slide/>
           </div>
        </div>
    )
}

export default Quora
