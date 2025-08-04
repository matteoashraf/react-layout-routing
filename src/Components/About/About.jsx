import React from 'react'
import Star from '../Star/Star'

export default function About() {
  return (
    <>
      <div className="about bg-turquoise vh-90 d-flex justify-content-center align-items-center">
        <div className="inner text-white">
          <h2 className='fw-bold fs-1 text-uppercase text-center'>about component</h2>
          <Star txtColor={'text-white'} bgColor={'bg-white'} />
          <div className="container">
            <div className="row px-5">
              <div className="col-md-6 ps-md-5">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className="col-md-6 pe-5">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
