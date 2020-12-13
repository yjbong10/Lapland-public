import React, { useEffect } from 'react'
import css from './Gallery.module.css';
import ImgModal from '../ImgModal/ImgModal';

import images from '../../../srcList/imagesList';
import videos from '../../../srcList/videosList';

import './mansonry.css'
import Masonry from 'react-masonry-css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SectionBanner from './SectionBanner/SectionBanner';
import VidModal from './VidModal/VidModal';

const Gallery = (props) => {

    const { setIsImgLoaded } = props
    useEffect(() => {
      setIsImgLoaded(false)
      return () => {
        setIsImgLoaded(false)
      }
    }, [setIsImgLoaded])

    const activateFullscreen = (element) => {
      //first check if user alread on fullscreen
      if (document.fullscreenElement === null) {
          if(element.requestFullscreen) {
            element.requestFullscreen();        // W3C spec
          }
          else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();     // Firefox
          }
          else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();  // Safari
          }
          else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();      // IE/Edge
          }
        }
      };
    
    const deactivateFullscreen = () => {
      //first check if user already exited full screen
      if (document.fullscreenElement !== null) {
          if(document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          }
      }
    };


    // map through images array imported from scrList 
    const lastId = images[images.length - 1].id
    const imgMap = images.map(item => {
        return (item.id !== lastId) 
            ? <div key={item.id}>
                <LazyLoadImage 
                    effect="blur"
                    width="100%"
                    height="100%"
                    src={item.img} 
                    alt={item.img}
                    threshold={100}
                    onClick={() => imgOnClick(item.id)}
                    />
                </div>
            : <div key={item.id}>
                <LazyLoadImage 
                    effect="blur"
                    width="100%"
                    height="100%"
                    src={item.img} 
                    alt={item.img} 
                    threshold={100}
                    afterLoad={() => props.setIsImgLoaded(true)}
                    onClick={() => imgOnClick(item.id)}
                    />
                </div>
    })

    const imgOnClick = (id) => {
      activateFullscreen(document.documentElement)  
      props.setIsImgModalShow(true, id)
    }

    const imgModalOnClose = () => {
        deactivateFullscreen()
        props.setIsImgModalShow(false)
    }


    // map through videos array imported from scrList 
    const vidMap = videos.map(item => {
      return <div className={css.video_container} key={item.id}>
        <div className={css.video_container_overlay} onClick={() => vidOnClick(item.id)}></div>
          <iframe 
            title={item.id}
            src={item.vid}
            width="100%" 
            allowFullScreen={true}
            height="250px"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
      </div>
    })

    const vidOnClick = (id) => {
      activateFullscreen(document.documentElement)  
      props.setIsVidModalShow(true, id)
    }

    const vidModalOnClose = () => {
        deactivateFullscreen()
        props.setIsVidModalShow(false)
    }

    // break point for masonry grid
    const breakpointColumnsObj = {
        default: 3,
        1920: 4,
        1420: 3,
        650: 2,
        450: 1
      };
      
    return (
        <div className={css.bg}>
          <div data-section>
            <SectionBanner text="GALLERY"/>
            {(props.imgModal.isShow) && 
                <ImgModal 
                    clicked={imgModalOnClose} 
                    imgModal={props.imgModal} 
                    images={images}/>
            } 
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {imgMap}
            </Masonry>
          </div>

      
          {/* {(props.isImageLoaded) &&  */}
            <div data-section>
              <SectionBanner text="VIDEO"/>
              {(props.vidModal.isShow) &&
                  <VidModal  
                    clicked={vidModalOnClose}
                    vidModal={props.vidModal} 
                    videos={videos}
                    />
              }
              <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column">
                  {vidMap}
              </Masonry>
            </div>
          {/* }  */}

          
        </div>
    )
}

export default Gallery
