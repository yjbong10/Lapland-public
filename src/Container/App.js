import React, { useEffect } from 'react';
import css from './App.module.css';
import Board from '../Components/Board/Board';
import Navbar from '../Components/Navbar/Navbar';
import SideBar from '../Components/SideBar/SideBar';

import { connect } from 'react-redux';
import { setIsSideBarShow, setIsSideBarFull, 
  setIsImgModalShow, setIsVidModalShow, 
  setIsImgLoaded, setCurrentPage } from '../store/actions/ui_action';

const App = (props) => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <div className={css.root_container}>
        <Navbar {...props}/>
        <SideBar 
          sideBar={props.sideBar} 
          setIsSideBarFull={props.setIsSideBarFull}
          setCurrentPage={props.setCurrentPage} 
          currentPage={props.currentPage}/>
        <Board {...props}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      sideBar: state.sideBar,
      imgModal: state.modal.imgModal,
      vidModal: state.modal.vidModal,
      isImageLoaded: state.isImageLoaded,
      currentPage: state.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      setIsSideBarShow: (status) => dispatch(setIsSideBarShow(status)),
      setIsSideBarFull: (status) => dispatch(setIsSideBarFull(status)),
      setIsImgModalShow: (status, id) => dispatch(setIsImgModalShow(status, id)),
      setIsVidModalShow: (status, id) => dispatch(setIsVidModalShow(status, id)),
      setIsImgLoaded: (status) => dispatch(setIsImgLoaded(status)),
      setCurrentPage: (page) => dispatch(setCurrentPage(page)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

