import React from 'react';
import userspg1 from './../res/userspg1.svg';
import userspg2 from './../res/userspg2.svg';
import userspg3 from './../res/userspg3.svg';
import userspg4 from './../res/userspg4.svg';
import tableimg from './../res/tableimg.svg';
import nextbtn from './../res/nextbtn.svg';
import prevbtn from './../res/prevbtn.svg';
import './../styles/App.css';

function Users() {
    return(
        <div id="userspage">
            <div id="userspageheader">Users</div>
            <div id="usersxcont">
                <div className="uxdiv">
                    <img className="uximg" alt="" src={userspg1}/>
                    <div className="uxtext">USERS</div>
                    <div className="uxnum">2,453</div>
                </div>
                <div className="uxdiv">
                    <img className="uximg" alt="" src={userspg2}/>
                    <div className="uxtext">ACTIVE USERS</div>
                    <div className="uxnum">2,453</div>
                </div>
                <div className="uxdiv">
                    <img className="uximg" alt="" src={userspg3}/>
                    <div className="uxtext">USERS WITH LOANS</div>
                    <div className="uxnum">12,453</div>
                </div>
                <div className="uxdiv">
                    <img className="uximg" alt="" src={userspg4}/>
                    <div className="uxtext">USERS WITH SAVINGS</div>
                    <div className="uxnum">102,453</div>
                </div>

            </div>
            <div id="tablediv">
                <table>
                    <tr>
                            <th style={{width: '14%'}}>Organization<img className="tableimg" alt="" src={tableimg}/></th>
                            <th style={{width: '14%'}}>Username<img className="tableimg" alt="" src={tableimg}/></th> 
                            <th style={{width: '21%'}}>Email<img className="tableimg" alt="" src={tableimg}/></th>
                            <th style={{width: '16%'}}>Phone Number<img className="tableimg" alt="" src={tableimg}/></th> 
                            <th style={{width: '17%'}}>Date Joined<img className="tableimg" alt="" src={tableimg}/></th>
                            <th style={{width: '13%'}}>Status<img className="tableimg" alt="" src={tableimg}/></th> 
                    </tr>
                    <tr>
                            <td style={{width: '14%'}}>Lendsqr</td>
                            <td style={{width: '14%'}}>Adedeji</td> 
                            <td style={{width: '21%'}}>adedejilawrence@gmail.com</td>
                            <td style={{width: '16%'}}>09182893029</td> 
                            <td style={{width: '17%'}}>May 15, 2020 10:00 AM</td>
                            <td style={{width: '13%'}}>Inactive</td> 
                    </tr>
                </table>
            </div>
            <div id="userpagebtm">
                <div id="upbleft">
                    Showing
                    <select id="upbselect">
                        <option className='upbopt'>1</option>
                        <option className='upbopt'>2</option>
                        <option className='upbopt'>3</option>
                        <option className='upbopt'>4</option>
                        <option className='upbopt'>5</option>
                    </select>
                    out of 100
                </div>
                <div id="upbright">
                    <img className="upbarrow" alt="" src={prevbtn}/>
                        <div className='upbactivenum'>1</div>
                        <div className='upbnum'>2</div>
                        <div className='upbnum'>3</div>
                        <div className='upbnum'>...</div>
                        <div className='upbnum'>15</div>
                        <div className='upbnum'>16</div>
                    <img className="upbarrow" alt="" src={nextbtn}/>
                </div>
            </div>
        </div>
    );
}

export default Users;