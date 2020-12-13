import React, { useState } from 'react'
import css from './VidModal.module.css'
import ReactDOM from 'react-dom';


const VidModal = (props) => {
    const index = props.videos.findIndex(item => item.id === props.vidModal.id);
    const [videoIndex, setVideoIndex] = useState(index)

    return ReactDOM.createPortal (
        <div className={css.vidModal_container}>
            <div className={css.wrapper}>
           
                <iframe 
                    title="video"
                    src={props.videos[videoIndex].vid}
                    allowFullScreen={true}
                    width="160" height="90" 
                    frameBorder="0"
                    >
                </iframe>
                <div className={css.vidModal_overlay}  onClick={props.clicked}></div>
            </div>


        {/* next prev button */}
            <button 
                onClick={() => setVideoIndex((videoIndex + props.videos.length - 1) % props.videos.length)}
                type="button" 
                className={[css.btn, css.btn_back].join(' ')}></button>
            <button 
                onClick={() => setVideoIndex((videoIndex + 1) % props.videos.length)}
                type="button" 
                className={[css.btn, css.btn_next].join(' ')}></button>

                
        {/* toolbar */}
            <div className={css.vidModal_toolbar_container}>
                <ul className={css.vidModal_toolbar}>
                    <li className={css.vidModal_toobar_items}>
                        <button onClick={props.clicked} className={css.toolbar_close_btn} type="button"></button>
                    </li>
                </ul>
            </div>
        </div>,
        document.getElementById('vidModalPortal')
    )
}

export default VidModal
