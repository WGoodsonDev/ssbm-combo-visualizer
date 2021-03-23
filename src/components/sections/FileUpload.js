import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";

function FileUpload(props) {

    const [validSlpUploaded, setValidSlpUploaded] = useState(false);

    const handleDrop = (acceptedFiles) => {
        if(acceptedFiles.length === 1){
            if(acceptedFiles[0].name.slice(-4) === ".slp"){
                console.log(`Valid .slp file uploaded: ${acceptedFiles[0].name}`);
            }
        } else {
            console.log("ERROR: only one file can be uploaded at a time")
        }

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
            <button className={"submitButton"} disabled={!validSlpUploaded} type={"submit"}>
                Submit
            </button>
        </div>
    );
}

export default FileUpload;
