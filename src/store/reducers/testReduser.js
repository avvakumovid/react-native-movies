const SET_TEXT = 'SET_TEXT'


const initialState = {
    text: 'OOO!!!'
}

const testReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_TEXT:
            return {...state, text: action.text}
        default:
            return state
    }
}

export const setText = (text) => ({type: SET_TEXT, text: text})

export default testReducer