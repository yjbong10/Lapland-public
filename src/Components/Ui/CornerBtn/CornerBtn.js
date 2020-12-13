import React from 'react'
import IconBtn from '../IconBtn/IconBtn'
import css from './CornerBtn.module.css'

const CornerBtn = (props) => {

    let style = [css.cornerBtn_container]
    switch(props.position) {
        case "bottom-left":
            style = [css.cornerBtn_container, css.bottom_left].join(' ')
            break;

        case "top-left":
            style = [css.cornerBtn_container, css.top_left].join(' ')
            break;

        case "middle-left":
            style = [css.cornerBtn_container, css.middle_left].join(' ')
            break;

        case "bottom-right":
            style = [css.cornerBtn_container, css.bottom_right].join(' ')
            break;

        case "top-right":
            style = [css.cornerBtn_container, css.top_right].join(' ')
            break;

        case "middle-right":
            style = [css.cornerBtn_container, css.middle_right].join(' ')
            break;

        case "top-middle":
            style = [css.cornerBtn_container, css.top_middle].join(' ')
            break;

        case "bottom-middle":
            style = [css.cornerBtn_container, css.bottom_middle].join(' ')
            break;

        default:
            break;
    }

    return (
        <div className={style} onClick={props.clicked}>
            <IconBtn icon={props.icon} />
        </div>
    )
}

export default CornerBtn
