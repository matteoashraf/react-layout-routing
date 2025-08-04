import React, { useState } from 'react'
import Star from '../Star/Star'
import img1 from '../../assets/port1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
import Card from '../Card/Card'

export default function Portfolio() {
  const [imgSrc, setImgSrc] = useState("")
  let images = [
    { id: 13, img: img1 },
    { id: 24, img: img2 },
    { id: 56, img: img3 },
    { id: 78, img: img1 },
    { id: 98, img: img2 },
    { id: 46, img: img3 }
  ]
  let changeImgSrc = (img) => {
    setImgSrc(img)
  }
  return (
    <>
      <div className="portfolio vh-90 d-flex justify-content-center my-4">
        <div className="inner text-center">
          <h1 className='fw-bold fs-1 text-uppercase text-blue'>portfolio component</h1>
          <Star txtColor={'text-blue'} bgColor={'bg-blue'} />
          <div className="container">
            <div className="row g-5">
              {images.map(img => <Card key={img.id} img={img} changeImgSrc={changeImgSrc} />)}
            </div>
          </div>
        </div>
      </div>
      {imgSrc && <>
        <div onClick={() => changeImgSrc()} className='position-fixed top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center custom-modal'>
          <img src={imgSrc} alt="" className='modalImg' />
        </div>
      </>}
    </>
  )
}
