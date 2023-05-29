import React from 'react'

const Footer = () => {

  const date = new Date();

  return (
    <div className='container flex bg-deepBlue max-w-full h-20 text-white items-center justify-center'>
        <div>&copy; {date.getFullYear()} All rights reserved</div>
    </div>
  )
}

export default Footer