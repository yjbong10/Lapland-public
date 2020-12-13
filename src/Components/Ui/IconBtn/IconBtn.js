import React from 'react'
import css from './IconBtn.module.css';
import sprite from '../../../assets/sprite/solid.svg';

const IconBtn = (props) => {
    return (
        <svg className={css.navBar_icon}>
            <use href={sprite + props.icon}/>
        </svg>
    )
}

export default IconBtn
