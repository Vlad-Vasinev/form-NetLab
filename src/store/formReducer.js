

const formState = {
    userName: "",
    userEmail: "",
    userTheme: "", 
    userMessage: ""
}

const ADD_FORM = "ADD_FORM"

export const FormReducer = (state = formState, action) => {
    switch (action.type) {
        case ADD_FORM:
            return {
                ...state, userName: action.payload.name, userEmail: action.payload.email, userTheme: action.payload.theme, userMessage: action.payload.message
            }
            default:
                return state
    }
}   

export const addDataForm = (payload) => {
    return { type: "ADD_FORM", payload }
}