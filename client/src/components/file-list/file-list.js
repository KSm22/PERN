import React, { Component } from "react";
import {connect, useSelector} from "react-redux";

import File from "../file-item/File";

const FileList = () => {
    const files = useSelector(state => state.files.files).map(file => <File file={file} key={file.id}/>);
    // const files = [{id: 1, name: 'first'}, {id: 2, name: 'second'}].map(file => <File file={file} key={file.id}/>);

    return (
        <ul className="file-list">
            <li>{files}</li>
        </ul>
    );
};

export default FileList;
