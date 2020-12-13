import React from 'react'
import css from './Footer.module.css';

const Footer = (props) => {
    return (
        <div className={css.footer_container}>
            {(props.isImageLoaded)
                ? <p className={css.footer_text}>&copy; 2020 Bong Studio. All Rights Reserved.</p>
                : <p className={css.footer_loading}>Loading...</p>
            }
        </div>
    )
}

export default Footer
