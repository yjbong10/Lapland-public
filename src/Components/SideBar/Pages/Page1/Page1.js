import React, { Fragment } from 'react'
import css from '../Page.module.css'

const Page1 = () => {
    const contents = [{
        title: `Oslo`,
        day: `Day 1`,
        paras: [{
            subTitle: `Oslo city tour`,
            ol: [{
                li: `Visit Viking Ship Museum, housing 3 of the best preserved Viking
                ships; Oseberg , Gokstad and Tune.`
            }]
        }]
    }, {
        title: `Oslo – Tromso`,
        day: `Day 2`,
        paras: [{
            subTitle: `Oslo city tour`,
            ol: [{
                li: `Visit Vigeland Sculpture Park with over 200 sculptures created by
                Gustav Vigeland placed around a large park.`
            }, {
                li: `Enjoy great vista of Aker Brygge from Akershus Fortress.`
            }, {
                li: `See Oslo’s key landmarks such as the Royal Palace, City Hall and the
                iconic Oslo Opera House.`
            }]
        }]
    }, {
        title: `Tromso`,
        day: `Day 3`,
        paras: [{
            subTitle: `Tromso city tour`,
            ol: [{
                li: `Visit Polaria Aquarium to learn about arctic wild life. Browse the
                “Arctic Walkway”, watch the visual films and check out the bearded
                seals in an open pool during feeding time.`
            }, {
                li: `Photostop at the famous Arctic Cathedral, a stunning architectural
                creation known as “Opera House of Norway”.`
            }]
        }, {
            subTitle: `Mount Storsteinen "Northern Lights" hunt`,
            ol: [{
                li: `After dinner, begin your Aurora Borealis hunt by taking the
                "fjellheisen" cable car to the top of 420metre hill viewpoint. Enjoy
                great views of Tromso while anticipating the appearance of the
                dancing lights􀀏`
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

export default Page1

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