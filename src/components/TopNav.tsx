import React from 'react';
import bell from './../res/bell.svg';
import drop from './../res/dropdown.svg';
import logo from './../res/logo.svg';
import logoname from './../res/lendsqr.svg';
import image from './../res/image.svg';
import search from './../res/search.svg';
import './../styles/App.css';

function TopNav() {
    return(
        <div id="topnav">
            <div id="complogodiv">
                <img alt="" id="complogo" src={logo}/>
                <img alt="" id="complogoname" src={logoname}/>
            </div>
            <div id="searchdiv">
                <input id="searchinput" placeholder="Search for anything" type="text"/>
                <div id="search">
                    <img alt="" src={search}/>
                </div>
            </div>
            <div id="topright">
                <div id="docs">Docs</div>
                <img id="bell" alt="" src={bell}/>
                <div id="avatardiv">
                    <img id="avatar" alt="" src={image}/>
                    <div id="avatarname"></div>
                    <img id="avatardrop" alt="" src={drop}/>
                </div>
            </div>
        </div>
    );
}

export default TopNav;