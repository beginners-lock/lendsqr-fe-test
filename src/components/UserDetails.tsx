import React from 'react';
import avatar from './../res/avatar.svg';
import back from './../res/back.svg';
import starempty from './../res/starempty.svg';
import starfull from './../res/starfull.svg';
import './../styles/App.css';

function UserDetails() {
    return(
        <div id="userdetailspage">
            <div id="back"><img id="backimg" alt="" src={back}/>Back to users</div>
            <div id="udptop">
                <div id="udpleft">User Details</div>
                <div id="udpright">
                    <button id="blacklistuserbtn">Blacklist User</button>
                    <button id="activateuserbtn">Activate User</button>
                </div>
            </div>
            <div id="udpmiddle">
                <div id="udpmtop">
                    <img id="udpmavatar" alt="" src={avatar}/>
                    <div className="udpmdiv">
                        <div id="udpmname">Grace Effiom</div>
                        <div id="udpmid">LSQFf587g90</div>
                    </div>
                    <div className="udpmdiv" style={{border:'none', borderLeft:'1px solid rgba(84, 95, 125, 0.2)', borderRight:'1px solid rgba(84, 95, 125, 0.2)',}}>
                        <div id="usertier">User's Tier</div>
                        <div id="udpmstarcont">
                            <img alt="" src={starfull}/>
                            <img alt="" src={starempty}/>
                            <img alt="" src={starempty}/>
                        </div>
                    </div>
                    <div className="udpmdiv">
                        <div id="udpmcash">₦200,000.00</div>
                        <div id="udpmbank">9912345678/Providus Bank</div>
                    </div>
                </div>
                <div id="udpmbtm">
                    <div className="udpmlistactive">General Details</div>
                    <div className="udpmlist">Documents</div>
                    <div className="udpmlist">Bank Details</div>
                    <div className="udpmlist">Loans</div>
                    <div className="udpmlist">Savings</div>
                    <div className="udpmlist">App and System</div>
                </div>
            </div>
            <div id="udpbtm">
                <div className="udpbrow">
                    <div className='udpbheader'>Personal Information</div>
                    <div className='udpbbody'>
                        <div className='udpbcell'>
                            <div className='udpbtop'>FULL NAME</div>
                            <div className='udpbbtm'>Grace Effiom</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>PHONE NUMBER</div>
                            <div className='udpbbtm'>07060780922</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>EMAIL ADDRESS</div>
                            <div className='udpbbtm'>07060780922</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>FULL NAME</div>
                            <div className='udpbbtm'>Grace Effiom</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>PHONE NUMBER</div>
                            <div className='udpbbtm'>07060780922</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>EMAIL ADDRESS</div>
                            <div className='udpbbtm'>07060780922</div>
                        </div>
                    </div>
                </div>
                <div className="udpbrow">
                    <div className='udpbheader'>Personal Information</div>
                    <div className='udpbbody'>
                        <div className='udpbcell'>
                            <div className='udpbtop'>FULL NAME</div>
                            <div className='udpbbtm'>Grace Effiom</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>PHONE NUMBER</div>
                            <div className='udpbbtm'>07060780922</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>EMAIL ADDRESS</div>
                            <div className='udpbbtm'>07060780922</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;