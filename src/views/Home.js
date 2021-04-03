import React from 'react';

import VizWindow from "../components/sections/VizWindow";
import FileUpload from "../components/sections/FileUpload";
import Header from "../components/layout/Header";


function Home(props){
    return (
        <>
            <Header/>
            <VizWindow/>
            <FileUpload/>
        </>
    );
}

export default Home;
