import React, {useEffect} from "react";

import FileContent from "../file-content/file-content";
import FileList from "../file-list/file-list";
import SearchPanel from "../search-panel/search-panel";
import DownloadPanel from "../download-file/download-file";
import {useDispatch, useSelector} from "react-redux";
import {getFiles} from "../../actions/file";

const Editor = () => {
    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.currentDir);

    useEffect(() => {
        dispatch(getFiles(currentDir));
    });

    return (
        <section className="editor">
            <FileContent />
            <div className="user-nav">
                <FileList/>
                <div className="user-nav__inner">
                    <SearchPanel/>
                    <DownloadPanel/>
                </div>
            </div>
        </section>
    );
};

export default Editor;
