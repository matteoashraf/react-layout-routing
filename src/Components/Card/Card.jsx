import React from 'react'

export default function Card(props) {
    let { img } = props
    return (
        <>
            <div className="card-item col-md-6 col-lg-4">
                <div onClick={()=>props.changeImgSrc(img.img)} className="inner position-relative rounded-3 overflow-hidden">
                    <img src={img.img} alt="pic" className='w-100' />
                    <div className="overlay position-absolute top-0 end-0 bottom-0 start-0 text-white d-flex justify-content-center align-items-center">
                        <i className='fa fa-plus fa-5x'></i>
                    </div>
                </div>
            </div>
        </>
    )
}
