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

    let nav = React.createRef();
    let hamburger = React.createRef();

    useEffect(() => {
        props.active && openMenu();
    })

    const openMenu = () => {
        document.body.classList.add('off-nav-is-active');
        nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
        setActive(true);
    }

    const closeMenu = () => {
        document.body.classList.remove('off-nav-is-active');
        nav.current && (nav.current.style.maxHeight = null);
        setActive(false);
    }

    const keyPress = (e) => {
        isActive && e.keyCode === 27 && closeMenu();
    }

    const clickOutside = (e) => {
        if (nav.current) return;
        if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
        closeMenu();
    }

    const {
        className,
        active,
        // navPosition,
        hideNav,
        hideSignin,
        bottomOuterDivider,
        bottomDivider,
    } = props;

    const classes = classNames(
        'site-header',
        bottomOuterDivider && 'has-bottom-divider',
        className
    );



    return (
        <header
            {...props}
            className={classes}
        >
            <div className="container">
                <div className={
                    classNames(
                        'site-header-inner',
                        bottomDivider && 'has-bottom-divider'
                    )}>
                    {/*<Logo />*/}
                    {!hideNav &&
                    <React.Fragment>
                        <button
                            ref={hamburger}
                            className="header-nav-toggle"
                            onClick={isActive ? closeMenu : openMenu}
                        >
                            <span className="screen-reader">Menu</span>
                            <span className="hamburger">
                    <span className="hamburger-inner"></span>
                  </span>
                        </button>
                        <nav
                            ref={nav}
                            className={
                                classNames(
                                    'header-nav',
                                    isActive && 'is-active'
                                )}>
                            <div className="header-nav-inner">
                                <ul className={
                                    classNames(
                                        'list-reset text-xxs',
                                        // navPosition && `header-nav-${navPosition}`
                                    )}>
                                    <li>
                                        <Link to="/gallery/" onClick={closeMenu}>P5.js Gallery</Link>
                                    </li>
                                </ul>
                                {!hideSignin &&
                                <ul
                                    className="list-reset header-nav-right"
                                >
                                    <li>
                                        <Link to="/contact/" className="button button-primary button-wide-mobile button-sm" onClick={closeMenu}>Contact</Link>
                                    </li>
                                </ul>}
                            </div>
                        </nav>
                    </React.Fragment>}
                </div>
            </div>
        </header>
    );
}





export default Header;
