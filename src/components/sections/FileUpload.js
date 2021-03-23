import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadService from "../../services/upload-files.service";
import Dropzone from "react-dropzone";

function FileUpload(props) {

    const [validSlpUploaded, setValidSlpUploaded] = useState(false);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");
    const [fileInfos, setFileInfos] = useState([]);

    const handleDrop = (acceptedFiles) => {
        if(acceptedFiles.length === 1){
            if(acceptedFiles[0].name.slice(-4) === ".slp"){
                setValidSlpUploaded(true);
                setCurrentFile(acceptedFiles[0]);
                console.log(`Valid .slp file uploaded: ${acceptedFiles[0].name}`);
                console.log(acceptedFiles[0]);
            }
        } else {
            console.log("ERROR: only one file can be uploaded at a time")
        }

    };

    const uploadFile = () => {
        setProgress(0);

        UploadService.upload(currentFile, (event) => {
            setProgress(Math.round((100 * event.loaded) / event.total));
        })
            .then((response) => {
                setMessage(response.data.message);
            })
            .then((files) => {
                setFileInfos(files.data);
            })
            .catch((err) => {
                setProgress(0);
                setMessage("ERROR: could not upload the file");
                setCurrentFile(undefined);
            });
    };

    return (
        <div className={"upload"}>
            <Dropzone onDrop={handleDrop} accept={".slp"} multiple={false}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div className={"dragDropArea"} {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>
            <button className={"submitButton"}
                    disabled={!validSlpUploaded}
                    type={"button"}
                    onClick={uploadFile}
            >
                Submit
            </button>
        </div>
    );
}

export default FileUpload;
