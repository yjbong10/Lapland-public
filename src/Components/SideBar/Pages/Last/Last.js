import React from 'react'
import css from './Last.module.css'
import logo from '../../../../assets/logo/logo_xBL_1.5x.png'
import ETW_logo from '../../../../assets/logo/ETW5.png'
import sprite from '../../../../assets/sprite/brands.svg'

const Last = () => {
    return (
        <div className={css.last_page_container}> 


            <div className={css.content_section}>
                <h4>12D9N</h4>
                <h3>LapLand</h3>
                <p>21 December 2019</p>
                <p><em>to</em></p>
                <p>1 January 2020</p>
            </div>


            <div className={css.logo_section}>
                <div className={css.BS_logo}>
                    <img src={logo} alt=""/>
                </div>
                <div className={css.ETW_logo}>
                    <img src={ETW_logo} alt=""/>
                </div>
            </div>


            <div className={css.link_section}>
                <a href="https://www.youtube.com" 
                    target="_blank"
                    rel="noopener noreferrer">
                    <svg className={css.youtube_icon}>
                        <use href={sprite + '#youtube'}/>
                    </svg>
                </a>
                <a href="https://drive.google.com/drive" 
                    target="_blank"
                    rel="noopener noreferrer">
                    <svg className={css.google_drive_icon}>
                        <use href={sprite + '#google-drive'}/>
                    </svg>
                </a>
            </div>


            <p className={css.footer_section}>&copy; 2020 Bong Studio. All Rights Reserved.</p>
        </div>
    )
}

export default Last
