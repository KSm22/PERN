import React, { Component } from "react";
import {uploadFile} from "../../actions/file";
import {useDispatch, useSelector} from "react-redux";

const UploadButton = () => {

    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.currentDir);


    function fileUploadHandler(event) {
        const file = [...event.target.files];

        file.forEach(file => dispatch(uploadFile(file, currentDir)));

    }

    return (
        <div className="btn btn-upload">
            <label htmlFor="file">Выбрать файл</label>
            <input multiple={true} onChange={(event) => fileUploadHandler(event)} id="file" type="file"/>
        </div>
    );
};

export default UploadButton;


