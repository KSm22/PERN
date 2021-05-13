import React from "react";
import { useSelector } from "react-redux";

import File from "../file-item/File";

const FileList = () => {
    const files = useSelector(state => state.files.files).map(file => <File file={file} key={file.id}/>);

    return (
        <ul className="file-list">
            <li>{files}</li>
        </ul>
    );
};

export default FileList;
