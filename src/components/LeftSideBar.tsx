import React from 'react';
import briefcase from './../res/briefcase.svg';
import home from './../res/home.svg';
import users from './../res/users.svg';
import guarantors from './../res/guarantors.svg';
import drop2 from './../res/drop2.svg';
import './../styles/App.css';

function LeftSideBar() {
    return(
        <div id="leftsidebar">
            <div className="lsoptionspecial">
                <img className="leftsideimg" alt="" src={briefcase}/>
                <div className="lsotext">
                    Switch Organization
                    <img className="leftsideimg" id="drop2" alt="" src={drop2}/>
                </div>
            </div>
            <div className="lsoptionspecial">
                <img className="leftsideimg" alt="" src={home}/>
                <div className="lsotext">Dashboard</div>
            </div>
            <div id="lsoheader">CUSTOMERS</div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={users}/>
                <div className="lsotext">Users</div>
            </div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={guarantors}/>
                <div className="lsotext">Guarantors</div>
            </div>
        </div>
    );
}

export default LeftSideBar;