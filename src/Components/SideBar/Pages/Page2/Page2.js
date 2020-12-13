import React, { Fragment } from 'react'
import css from '../Page.module.css'

const Page2 = () => {
    const contents = [{
        title: `Tromso – Narvik – Abisko (Kiruna)`,
        day: `Day 4`,
        paras: [{
            subTitle: `Mount Storsteinen "Northern Lights" hunt`,
            ol: [{
                li: `After dinner, begin your Aurora Borealis hunt by taking the
                "fjellheisen" cable car to the top of 420metre hill viewpoint. Enjoy
                great views of Tromso while anticipating the appearance of the
                dancing lights.`
            }]
        }]
    }, {
        title: `Kiruna – Rovaniemi (Phya)`,
        day: `Day 5`,
        paras: [{
            subTitle: `Kiruna Ice hotel experience`,
            ol: [{
                li: `Cross the Swedish border to Kiruna for lunch and visit the fascinating
                Ice Hotel in Jukkassarvi, built entirely with snow and ice.`
            }]
        }]
    }, {
        title: `Rovaniemi (Phya)`,
        day: `Day 6`,
        paras: [{
            subTitle: `Huskies Safari`,
            ol: [{
                li: `Meet the adorable Siberian huskies before experiencing the thrilling
                husky sled ride (2persons/sled) as musher in control of your own
                teams of dogs. Enjoy every bit of this exciting slalom as the huskies pull
                you at a speedy but safe pace through the breathtaking countryside.
                (alternatively, you can choose to be driven only).`
            }]
        }, {
            subTitle: `Santa Claus Village`,
            ol: [{
                li: `In Rovaniemi , visit the most magical winter wonderland village of
                Santa Claus.`
            }, {
                li: `“Meet” with Santa Claus and send your friends and relatives special
                greeting cards from the Santa Claus Post Office.`
            }, {
                li: `Collect an Arctic Circle certificate in your personal to signify that you
                have crossed the Arctic Circle.`
            }]
        }]
    }]

    
    const contentsMap = contents.map(item => {
        const contentParasMap = item.paras.map(para => {
                return <Fragment key={item.day + para.subTitle}>
                    <h6>{para.subTitle}</h6>
                    <ul>
                        {para.ol.map(list => {
                            return <li key={item.day + list.li}>{list.li}</li>
                        })}
                    </ul>
                </Fragment>
        })
    
        return (
            <div className={css.content_sections} key={item.day + item.title}>
                <div className={css.title_container}>
                    <h5>{item.day}</h5>
                    <h5>{item.title}</h5>
                </div>
                <div className={css.paras_container}>
                    {contentParasMap}
                </div>
            </div>
        )
    })


    return (
        <>
            {contentsMap}
        </>
    )
}

export default Page2

// array template
/*

{
    title: ``,
    day: ``,
    paras: [{
        subTitle: ``,
        ol: [{
            li: ``
        }]
    }]
}

{
        subTitle: ``,
        ol: [{
            li: ``
        }]
    }

*/