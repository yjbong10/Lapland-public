import React, { useEffect, useRef, useState } from 'react'
import CornerBtn from '../Ui/CornerBtn/CornerBtn';
import css from './Board.module.css';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import { Landing } from './Landing/Landing';


const Board = (props) => {
    //setBar show when landing animation complete (5s)
    //clearTimeout when user scroll (sideBar will not show)

    const [timer, setTimer] = useState(null)
    const timerStart = () => {
        setTimer(setTimeout(() => {
            props.setIsSideBarShow(true)
        }, 20000))
    }

    useEffect(() => {
        timerStart()
        // eslint-disable-next-line 
    }, [])

    const boardRef =useRef()
    const [sectionArr, setSectionArr] = useState([])
    const [currSection, setCurrSection] = useState(0)

    //select all of the element with data-section attribute 
    //used to scroll to top
    useEffect(() => {
        const sectionAll = boardRef.current.querySelectorAll('[data-section]')
        setSectionArr(sectionAll)
    }, [])
    

    const lastIndex = sectionArr.length - 1;
    const nextSection = (currSection + 1) % sectionArr.length
    const prevSection = (currSection + lastIndex) % sectionArr.length

     //scroll to next section top when clicked
    const scrollDownBtn = (e) => {
        sectionArr[nextSection].scrollIntoView({
            behavior: 'smooth'
        })
    }

    const handleScroll = () => {
        if(timer) {
            clearTimeout(timer) 
            // setTimer(null)
        }
        //current scroll position on entire board;
        //entire board scroll height
        //viewport height 
        const scrollTop = boardRef.current.scrollTop;    
        const height = boardRef.current.scrollHeight;
        const offsetHeight= boardRef.current.offsetHeight;

        //check if current position is larger than curret section top, if yes means scroll in inside current section
        //and if current position is larger than next section top, if yes means scroll has entered next section

        if ((scrollTop > sectionArr[currSection].offsetTop) && (scrollTop > sectionArr[nextSection].offsetTop - 20)) {
            //check if next section top is 0, if yes means next section is top section
            //thats mean we are on last section. So will not change to nextSection
            if( sectionArr[nextSection].offsetTop !== 0) {
                setCurrSection(nextSection)
            } 

        //check if current position is lesser than current section top, if yes means we go back to prev section. 
        } else if (scrollTop < sectionArr[currSection].offsetTop) {
            setCurrSection(prevSection)

        //check if board scroll height - viewport height equal to current scroll position
        //if yes means current scroll position has reached the container's available scroll height 
        //thats mean we reached the bottom
        } else if ((height - offsetHeight) === Math.ceil(scrollTop)) {
            setCurrSection(lastIndex)
        }
    } 

    return (
        <div className={css.board_container} ref={boardRef} onScroll={handleScroll}>
            <div data-section>
                <Landing/>
            </div>
            <Gallery {...props} />
            <Footer isImageLoaded={props.isImageLoaded}/>
            <CornerBtn icon="#angle-double-down" position="bottom-left" clicked={scrollDownBtn}/>
        </div>
    )
}

export default Board
