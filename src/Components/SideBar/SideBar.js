import React, { useRef, useEffect } from 'react';
import IconBtn from '../Ui/IconBtn/IconBtn';
import TextBtn from '../Ui/TextBtn/TextBtn';
import Last from './Pages/Last/Last';
import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';
import Page3 from './Pages/Page3/Page3';
import css from './SideBar.module.css';

const SideBar = (props) => {

     //on off sidebar
    let containerStyle = [css.sideBar_container]
    let fullWidthBtnStyle = [css.full_width_btn]

    if(props.sideBar.isSideBarFull) {
        containerStyle = [css.sideBar_container, css.sideBar_full].join(' ')
        fullWidthBtnStyle = [css.full_width_btn_full].join(' ')
    }
    if (!props.sideBar.isSideBarShow) {
        containerStyle = [containerStyle, css.sideBar_hide].join(' ')
        fullWidthBtnStyle = [css.full_width_btn]
    }

    //dynamic render page
    const pages = [<Page1 />, <Page2 />, <Page3 />, <Last />]
    const totalPage = pages.length
    const toNext = () => {
        if (props.currentPage < totalPage) {
            const nextPage = props.currentPage + 1;
            props.setCurrentPage(nextPage)
        } else if (props.currentPage === totalPage) {
            props.setCurrentPage(1)
        }
    }

    const toBack = () => {
        if (props.currentPage <= totalPage && props.currentPage > 1) {
            const prevPage = props.currentPage - 1;
            props.setCurrentPage(prevPage)
        }
    }

     //dynamic btnStyle depends on currentPage
    const btnNextIcon = (props.currentPage === totalPage) ? "#undo" : "#angle-right"
    const isBtnLoop = (props.currentPage === totalPage) ? true : false
    const isBtnDisabled = (props.currentPage > 1) ? false : true



    //scroll to top whenever currentPage change
    const contentDivRef = useRef();
    useEffect(() => {
        contentDivRef.current.scrollTop = 0;
    }, [props.currentPage])

    return (
        <div className={containerStyle}>
            <div className={fullWidthBtnStyle} onClick={() => props.setIsSideBarFull()}>
                <IconBtn icon="#arrows-alt-h"/>
            </div>
            <div ref={contentDivRef} className={css.sideBar_container_content}>
                {pages[props.currentPage - 1]}
            </div>
            <div className={css.sideBar_btn_container}>
            <TextBtn 
                text="Back"
                icon="#angle-left"
                clicked={toBack}
                disabled={isBtnDisabled}
                />
            <TextBtn 
                text="Next"
                icon={btnNextIcon}
                clicked={toNext}
                loop={isBtnLoop}
                />
            </div>
        </div>
    )
}

export default SideBar
