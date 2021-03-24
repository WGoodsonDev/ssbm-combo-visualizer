import React from 'react';

import VizWindow from "../components/sections/VizWindow";
import FileUpload from "../components/sections/FileUpload";
import GameSelect from "../components/sections/GameSelect";

function Home(props){
    return (
        <React.Fragment>
            {/*<VizWindow/>*/}
            <GameSelect/>
            {/*<FileUpload/>*/}
        </React.Fragment>
    );
}

export default Home;
