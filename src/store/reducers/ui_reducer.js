import * as actionTypes from '../actions/ui_action'

const sideBarInit = {
    isSideBarShow: false,
    isSideBarFull: false
}
export const sideBar = (state = sideBarInit, action) => {
    switch(action.type) {
        case actionTypes.SET_IS_SIDEBAR_SHOW:
            const newIsSideBarShow = (action.status === undefined) 
                ? !state.isSideBarShow 
                : action.status 

            return {
                ...state,
                isSideBarShow: newIsSideBarShow
            }

        case actionTypes.SET_IS_SIDEBAR_FULL:
            const newIsSideBarFull = (action.status !== undefined) 
            ? action.status 
            : (state.isSideBarShow)
                ? !state.isSideBarFull 
                : true

            return {
                ...state,
                isSideBarShow: true,
                isSideBarFull: newIsSideBarFull
            }
           
        default: 
            return state
    }
}

const modalInit = {
    imgModal: {
        isShow: false,
        id: null
    }, 
    vidModal: {
        isShow: false,
        id: null
    }, 
}

export const modal = (state = modalInit, action) => {
    switch(action.type) {
        case actionTypes.SET_IS_IMG_MODAL_SHOW:
            return {
                ...state,
                imgModal: {
                    isShow: action.status,
                    id: action.id
                }, 
                vidModal: {
                    isShow: false,
                    id: null
                }
            }

        case actionTypes.SET_IS_VID_MODAL_SHOW:
            return {
                ...state,
                imgModal: {
                    isShow: false,
                    id: null
                }, 
                vidModal: {
                    isShow: action.status,
                    id: action.id
                }
            }

        default: 
            return state
    }
}

const isImageLoadedInit = false;
export const isImageLoaded = (state = isImageLoadedInit, action) => {
    switch(action.type) {
        case actionTypes.SET_IS_IMG_LOADED:
            return action.status
        
        default:
            return state
    }
}

const currentPageInit = 1;
export const currentPage = (state = currentPageInit, action) => {
    switch(action.type) {
        case actionTypes.SET_CURRENT_PAGE:
            return action.page
        
        default:
            return state
    }
}