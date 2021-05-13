import axios from "axios";
import {addFile, setFiles} from "../reducer/fileReducer";

export function getFiles() {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:3002/api/files`,{
               headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            dispatch(setFiles(response.data));
            // console.log(response.data);
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function uploadFile(file) {
    return async dispatch => {
        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await axios.post(`http://localhost:3002/api/files/upload`, formData,{
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            dispatch(addFile(response.data));
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}
