import React from 'react';
import css from './Navbar.module.css';
import sprite from '../../assets/sprite/solid.svg';
import logo from '../../assets/logo/logo_wBL_1.5x.png'


const Navbar = (props) => {

    let icons = '#bars';
    let iconStyle = [css.navBar_icon]
    if (props.sideBar.isSideBarShow) { 
        icons = '#times'
        iconStyle = [css.navBar_icon, css.navBar_icon_open].join(' ')
    }

    let x = 0;
    if (!props.sideBar.isSideBarShow) { x -= 180}
    const rotate = { 
        transform: `rotate(${x}deg)`,
        transition: "all .5s ease-out"
    };

    return (
        <div className={css.navBar_container}>
            <div >
                {/* BONG_STUDIO */}
                <img className={css.navBar_logo} src={logo} alt=""/>
            </div>
            <svg className={iconStyle} style={rotate} onClick={() => props.setIsSideBarShow()}>
                <use href={sprite + icons}/>
            </svg>
        </div>
    )
}

export default Navbar
