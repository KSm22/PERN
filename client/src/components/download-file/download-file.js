import React, { Component } from "react";

export  default class DownloadPanel extends Component {

    downloadFile = (text, filename) => {
        const element = document.createElement('a');
        element.style.display = 'none';

        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));

        element.setAttribute('download', filename);
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);

        console.log(text);


    };

    render() {


        return (
            <button className="btn download"
                    id="download-btn"
                    type="text"
                    onClick={() => {this.downloadFile(document.getElementById('file-content').value, 'test.txt')}}>Скачать</button>
        );
    }
};

