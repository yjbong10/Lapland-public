import React, { Fragment } from 'react'
import css from '../Page.module.css'

const Page3 = () => {

    const contents = [{
        title: `Rovaniemi (Phya) – Luosto – Saariselka`,
        day: `Day 7`,
        paras: [{
            subTitle: `Amethyst Mine Discovery`,
            ol: [{
                li: `Board the Pendolino tractor up to the snow mountain top to marvel at
                the fabulous panaroma view of the national park with its frozen trees.`
            }, {
                li: `Visit the Amethyst mine, learn about the history of this jewel and try to
                dig your own amethyst stones (Amethyst panning).`
            }]
        }, {
            subTitle: `Reindeer Farm Experience`,
            ol: [{
                li: `Upon arrival at one of region’s Reindeer farm, adjourn to a Lappish
                wooden hut “Kota” to enjoy a traditional Lappish lunch.`
            }, {
                li: `Enjoy feeding reindeers while listening to Lapland tales.`
            }, {
                li: `Experience riding a reindeer sleigh and be rewarded with a
                Reindeer driving license.`
            }]
        }, {
            subTitle: `Aurora Glass Cabin Stay Experience`,
            ol: [{
                li: `Check into the premium Glass Cabins with glass-roofed arctic view
                rooms and witness Lapland’s ever-changing nature while enjoying the
                comforts of a hotel room. Each room has its own bathroom with
                shower.`
            }, {
                li: `Hunt for the Northern Lights with your tour
                manager with walking away from hotel.`
            }]
        }]
    }, {
        title: `Saariselka – Kirkenes`,
        day: `Day 8`,
        paras: [{
            subTitle: `Sami Siida Museum`,
            ol: [{
                li: `Visit the National Museum of the Finnish Sámi, providing a window
                into the Sámi culture & Nordic countryside.`
            }, {
                li: `See the collections & exhibitions displaying the spiritual & cultural
                pride of the Sámi people.`
            }]
        }, {
            subTitle: `Arctic Crab Safari & King Crab dinner`,
            ol: [{
                li: `Begin the evening by hop on a sledge pulled by snowmoblie to the
                frozen Barents Sea to pick up the giant king crabs from the cage and
                pose with them.`
            }, {
                li: `Afterwhich, feast on the succulent and fresh king crabs for dinner.`
            }]
        }]
    }, {
        title: `Kirkenes – Oslo`,
        day: `Day 9`,
        paras: [{
            subTitle: `Oslo city tour`,
            ol: [{
                li: `Browse the busy Karl Johan Street, the heartbeat of the capital city.`
            }]
        }]
    }, {
        title: `Oslo`,
        day: `Day 10`,
        paras: [{
            subTitle: `Oslo city`,
            ol: [{
                li: `Oslo at leisure until check-out & transfer to airport.`
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

export default Page3