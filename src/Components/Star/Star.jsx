import React from 'react'

export default function Star(props) {
    let {txtColor, bgColor} = props
    return (
        <>
            <div className='d-flex align-items-center justify-content-center my-3'>
                <div className={`line ${bgColor}`}></div>
                <i className={`fa-solid fa-star mx-3 ${txtColor}`}></i>
                <div className={`line ${bgColor}`}></div>
            </div>
        </>
    )
}
