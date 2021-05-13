import React from "react";


const File = ({file}) => {
    const selectFile = () => {
        document.getElementById('file-content').innerText = file.content;

    };

    return (
      <button onClick={() => selectFile()} className="btn file-list__item">{file.name}</button>
    )
};

export default File;
