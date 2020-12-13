export const SET_IS_SIDEBAR_SHOW = 'SET_IS_SIDEBAR_SHOW'
export const setIsSideBarShow = (status) => {
    return {
        type: SET_IS_SIDEBAR_SHOW,
        status: status
    }
}

export const SET_IS_SIDEBAR_FULL = 'SET_IS_SIDEBAR_FULL'
export const setIsSideBarFull = (status) => {
    return {
        type: SET_IS_SIDEBAR_FULL,
        status: status
    }
}

export const SET_IS_IMG_MODAL_SHOW = 'SET_IS_IMG_MODAL_SHOW'
export const setIsImgModalShow = (status, id) => {
    return {
        type: SET_IS_IMG_MODAL_SHOW,
        status: status,
        id: id || null
    }
}

export const SET_IS_VID_MODAL_SHOW = 'SET_IS_VID_MODAL_SHOW'
export const setIsVidModalShow = (status, id) => {
    return {
        type: SET_IS_VID_MODAL_SHOW,
        status: status,
        id: id || null
    }
}

export const SET_IS_IMG_LOADED = 'SET_IS_IMG_LOADED'
export const setIsImgLoaded = (status) => {
    return {
        type: SET_IS_IMG_LOADED,
        status: status
    }
}

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page: page
    }
}