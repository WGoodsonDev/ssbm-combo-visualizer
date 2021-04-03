import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import classNames from 'classnames';

const propTypes = {
    active: PropTypes.bool,
    // navPosition: PropTypes.string,
    hideNav: PropTypes.bool,
    hideSignin: PropTypes.bool,
    bottomOuterDivider: PropTypes.bool,
    bottomDivider: PropTypes.bool
}

const defaultProps = {
    active: false,
    // navPosition: '',
    hideNav: false,
    hideSignin: false,
    bottomOuterDivider: false,
    bottomDivider: false
}

function Header(props){
    const [isActive, setActive] = useState(false);

    return (
        <header>
            <div className="header">
                <h2>SSBM COMBO VISUALIZER (v0.1.0)</h2>
            </div>
        </header>
    );
}





export default Header;
