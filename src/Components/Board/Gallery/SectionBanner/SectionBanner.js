import React, { useState } from 'react'
import css from './SectionBanner.module.css'

const SectionBanner = (props) => {

    const [Click, setClick] = useState(false)
    let bannerContainerStyle = [css.banner_container]
    if(Click) {
        bannerContainerStyle = [css.banner_container, css.stroke_animation].join(' ')
        setTimeout(() => {
            setClick(false)
        }, 2500)
    }

    return (
        <div className={bannerContainerStyle} onMouseEnter={() => setClick(true)}>
            <h3>{props.text}</h3>
        </div>
    )
}

export default SectionBanner
