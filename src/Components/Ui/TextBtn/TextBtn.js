import React from 'react';
import css from './TextBtn.module.css';
import Sprite from '../../../assets/sprite/regular.svg'

const Button = (props) => {

    let btnStyle = [css.btn_container]
    if(props.disabled) btnStyle = [css.btn_container, css.btn_disabled].join(' ')
    if(props.loop) btnStyle = [css.btn_container, css.btn_loop].join(' ')

    return (
        <button className={btnStyle} style={props.style} onClick={props.clicked}>
            <span className={css.btn_text}>{props.text}</span>
            <svg className={css.btn_icon}>
                <use href={Sprite + props.icon}/>
            </svg>
        </button>
    )
}

export default Button
