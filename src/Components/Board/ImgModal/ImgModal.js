import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';
import './lightbox_customs_style.css'

const ImgModal = (props) => {
    const index = props.images.findIndex(item => item.id === props.imgModal.id);
    const [photoIndex, setPhotoIndex] = useState(index)
    return (
        <>
            <Lightbox
                mainSrc={props.images[photoIndex].img}
                nextSrc={props.images[(photoIndex + 1) % props.images.length].img}
                prevSrc={props.images[(photoIndex + props.images.length - 1) % props.images.length].img}
                onCloseRequest={props.clicked}
                onMovePrevRequest={() =>
                    setPhotoIndex((photoIndex + props.images.length - 1) % props.images.length)
                }
                onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % props.images.length)
                }
                animationDuration={600}
                imagePadding={0}
                animationOnKeyInput={true}
            />
            {/* this is for preload next image, it does not display on dom */}
            <div style={{display: "none", visibility: "hidden"}}>
                <img src={props.images[(photoIndex + 1) % props.images.length].img} alt="preload" />
                <img src={props.images[(photoIndex + 2) % props.images.length].img} alt="preload" />
            </div>
  
        </>
    )
}

export default ImgModal
