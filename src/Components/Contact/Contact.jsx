import React, { useState } from 'react'
import Star from '../Star/Star'

export default function Contact() {
  const [formData, setFormData] = useState({
    userName: '',
    userAge: '',
    userEmail: '',
    userPassword: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <div className="contact vh-90 my-4">
        <div className="inner text-center">
          <h1 className='fw-bold fs-1 text-uppercase text-blue'>contact section</h1>
          <Star txtColor={'text-blue'} bgColor={'bg-blue'} />
            <form className='w-50 mx-auto'>
              <div className='form-group'>
                <input 
                  type="text" 
                  id='userName' 
                  name='userName' 
                  placeholder='userName' 
                  className='form-control' 
                  value={formData.userName}
                  onChange={handleChange}
                />
                <label className='floating-label' htmlFor="userName">Username</label>
              </div>
              
              <div className='form-group'>
                <input 
                  type="text" 
                  id='userAge' 
                  name='userAge' 
                  placeholder='userAge' 
                  className='form-control' 
                  value={formData.userAge}
                  onChange={handleChange}
                />
                <label className='floating-label' htmlFor="userAge">Age</label>
              </div>
              
              <div className='form-group'>
                <input 
                  type="email" 
                  id='userEmail' 
                  name='userEmail' 
                  placeholder='userEmail' 
                  className='form-control' 
                  value={formData.userEmail}
                  onChange={handleChange}
                />
                <label className='floating-label' htmlFor="userEmail">Email</label>
              </div>
              
              <div className='form-group'>
                <input 
                  type="password" 
                  id='userPassword' 
                  name='userPassword' 
                  placeholder='userPassword' 
                  className='form-control' 
                  value={formData.userPassword}
                  onChange={handleChange}
                />
                <label className='floating-label' htmlFor="userPassword">Password</label>
              </div>
              
              <button className='btn d-block bg-turquoise text-white'>Send Message</button>
            </form>
        </div>
      </div>
    </>
  )
}
