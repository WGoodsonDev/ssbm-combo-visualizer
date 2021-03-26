import React, { useState } from "react";
import UploadService from "../../services/upload-files.service";
import Dropzone from "react-dropzone";

function FileUpload(props) {

    const [validSlpUploaded, setValidSlpUploaded] = useState(false);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [uploadStatusMessage, setUploadStatusMessage] = useState("");

    const handleDrop = (acceptedFiles) => {
        if(acceptedFiles.length === 1){
            if(acceptedFiles[0].name.slice(-4) === ".slp"){
                setValidSlpUploaded(true);
                setCurrentFile(acceptedFiles[0]);
                setUploadStatusMessage(`Valid .slp file selected: ${acceptedFiles[0].name};`)
                console.log(`Valid .slp file selected: ${acceptedFiles[0].name}`);
            }
        } else {
            console.log("ERROR: only one file can be uploaded at a time")
        }
    };


    const uploadFile = async () => {

        await UploadService.upload(currentFile, (event) => {
            setUploadStatusMessage("Attempting to upload file...");
        })
            .then((response) => {
                setUploadStatusMessage("File successfully uploaded")
            })
            .then((files) => {

            })
            .catch((err) => {
                setUploadStatusMessage("ERROR: could not upload the file");
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
                            <p>Drag and drop a .slp file here, or click to select file</p>
                        </div>
                    </section>
                )}
            </Dropzone>
            <div className={"progress"}>
                <h5>
                    {uploadStatusMessage}
                </h5>
            </div>
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
