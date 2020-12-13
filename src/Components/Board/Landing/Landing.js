import React, { useState } from 'react'
import css from './Landing.module.css'

import img_1 from '../../../assets/img/img_1_compressed2.jpg';
import images from '../../../srcList/imagesList'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import './blur.css';

export const Landing = () => {
    const [preload, setPreload] = useState(false)

    return (
        <div className={css.landing_container}>
            <div className={css.landing_text_container}>
                    <h1>LAPLAND</h1>
                    <h2>DEC 2019</h2>
                    <h4>NORWAY - SWEDEN - FINLAND</h4>
            </div>
            <div className={css.img_wrapper}>
                <LazyLoadImage 
                    afterLoad={() => setPreload(true)}
                    effect="blur"
                    width="100%"
                    height="100%"
                    threshold={0}
                    style={{objectFit: "cover", objectPosition: "center center"}}
                    // visibleByDefault={true}
                    src={img_1}
                    alt="img_1.jpg"/>
    
            </div>

            {/*this is for preload image*/
                (preload) && <div style={{display: "none", visibility: "hidden", opacity: "0"}}>
                    {
                        (images.reduce((arr, item, index) => {
                            if (index < 10 ) { 
                                arr.push(<img src={item.img} alt={item.id} key={item.id}/>);
                            }

                            return arr;
                        }, [])
                    )}
                </div>
            }
        </div>
    )
}
