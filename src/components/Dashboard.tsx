import React from 'react';
import TopNav from './TopNav';
import logo from './../res/logo.svg';
import logoname from './../res/lendsqr.svg';
import './../styles/App.css';
import LeftSideBar from './LeftSideBar';
import Users from './Users';
import UserDetails from './UserDetails';

function Dashboard() {
    return(
        <div  id="dashboardpage">
            <TopNav/>
            <div id="mainbody">
                <LeftSideBar/>
                <UserDetails/>
            </div>
        </div>
    );
}

export default Dashboard;