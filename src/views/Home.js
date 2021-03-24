import React from 'react';

import VizWindow from "../components/sections/VizWindow";
import FileUpload from "../components/sections/FileUpload";


function Home(props){
    return (
        <React.Fragment>
            <VizWindow/>
            <FileUpload/>
        </React.Fragment>
    );
}

export default Home;
