const SET_FILES = "SET_FILES";
const ADD_FILE = "ADD_FILE";

const defaultState = {
    files: [],
    currentDir: null
};

export default function fileReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_FILES:
            return {
                ...state,
                files: action.payload
            };
        case ADD_FILE:
            return {
                ...state,
                files: [...state.files, action.payload]
            };
        default:
            return state;
    }
};

export const setFiles = (files) => ({type: SET_FILES, payload: files});
export const addFile = (file) => ({type: ADD_FILE, payload: file});
