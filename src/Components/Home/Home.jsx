import React from 'react'
import avatar from '../../assets/avataaars.svg'
import Star from '../Star/Star'
export default function Home() {
  return (
    <>
      <div className="home bg-turquoise vh-90 d-flex justify-content-center align-items-center">
        <div className="inner text-center text-white">
          <img src={avatar} alt="" className='avatar my-4' style={{width:'250px'}}/>
          <h1 className='fw-bold fs-1 text-uppercase'>start Framework</h1>
          <Star txtColor={'text-white'} bgColor={'bg-white'} />
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  )
}
