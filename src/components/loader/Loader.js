import React from 'react'
import loader from '../../assets/loader.gif'

import ReactDOM from 'react-dom'
const Loader = () => {
  return ReactDOM.createPortal (
    <div className='fixed w-screen h-screen bg-blacktransp z-10'>
      
        <div className=' relative inset-y-1/2 inset-x-1/2'>
        <img src={loader} alt='Loading....'/>
        </div>
    </div>, document.getElementById('loader')
  )
}

export default Loader