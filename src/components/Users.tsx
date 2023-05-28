import React, { useState, useEffect } from 'react';
import userspg1 from './../res/userspg1.svg';
import userspg2 from './../res/userspg2.svg';
import userspg3 from './../res/userspg3.svg';
import userspg4 from './../res/userspg4.svg';
import tableimg from './../res/tableimg.svg';
import nextbtn from './../res/nextbtn.svg';
import prevbtn from './../res/prevbtn.svg';
import more from './../res/more.svg';
import blacklist from './../res/blacklist.svg';
import activate from './../res/activate.svg';
import view from './../res/view.svg';
import './../styles/App.css';

//May 15, 2020 10:00 AM
function Users() {
    const [curPage, setCurPage] = useState(1);
    const [activeUsers, setActiveUsers] = useState(0);
    const [vals, setVals] = useState([1, 2, 3])
    const [rows, setRows] = useState(10);
    const [pages, setPages] = useState(10);
    const status = ['Active', 'Inactive', 'Pending', 'Blacklisted'];
    const [users, setUsers] = useState([]);
    const [modifiedUsers, setModifiedUsers] = useState([]);
    const [filterDisplay, setFilterDisplay] = useState('none');
    const [moreDisplay, setMoreDisplay] = useState('none');
    const [idFocus, setIdFocus] = useState('');
    const [coordinates, setCoordinates] = useState([0, 0])

    useEffect(()=>{
        let url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users';
        fetch(url).then((response) => {
            return response.json();
        }).then((response) => {
            let active = 0;
            for(let i=0; i<response.length; i++){
                response[i].status = status[Math.floor(Math.random()*4)];
                if(response[i].status === 'Active'){ active++; }
                if(i===response.length-1){setUsers(response); setModifiedUsers(response); setActiveUsers(active);}
            }
        });
    }, []);

    const dateFunct = (dateString: string) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

        let date = dateString.slice(0, 10);
        let time = dateString.slice(11, 19);
        let dateArr = date.split('-');
        let timeArr = time.split(':');
        let datenum = dateArr[2];
        let month = months[parseInt(dateArr[1])-1];
        let year = dateArr[0];
        if(parseInt(timeArr[0])>12){
            time = time+' PM';
        }else{
            time = time+' AM';
        }

        date = datenum+' '+month+', '+year;
        return date+' '+time;
        
    }

    const editRows = (value: number) => {
        let pages = Math.ceil(modifiedUsers.length/value);
        if(pages>5){
            setVals([1, 2, 3]);
        }else{
            setVals([pages-4,  pages-3, pages-2]);
        }
        
        setCurPage(1);
        setRows(value);
        setPages(pages);

    }

    const prevpage = () => {
        if((curPage-1) >= 1){
            setCurPage(curPage-1);
            if(pages>5){
                if(curPage-1>=2){
                    if((curPage+2)<(pages-1)){
                        setVals([curPage-2, curPage-1, curPage]);
                    }
                }else{
                    setVals([1, 2, 3]);
                }
            }
        }
    }

    const nextpage = () => {
        if((curPage+1) <= pages){
            setCurPage(curPage+1);
            if(pages>5){
                if(curPage+1>=2){
                    if((curPage+2)<(pages-1)){
                        setVals([curPage, curPage+1, curPage+2]);
                    }
                }else{
                    setVals([1, 2, 3]);
                }
            }
        }
    }

    const editStatus = (id: string, status: string) => {
        let usersArr: any = users;
        let index = usersArr.findIndex((user: any) => user.id === id);
        if(status==='Active'){ setActiveUsers(activeUsers+1); }
        if(status==='Blacklisted' && usersArr[index].status==='Active'){ setActiveUsers(activeUsers-1); }
        usersArr[index].status = status;
        console.log(usersArr[index]);
        setUsers(usersArr);
        setModifiedUsers(usersArr);
        setMoreDisplay('none');
    }

    const finduserdetails = (id: string) => {
        let url = new URL(window.location.href);
        url.searchParams.set('id', id);
        window.location.href = url.toString();
    }

    const filterFunction = () => {
        let usersArr: any = users;
        let element  = document.getElementsByClassName('filterselect')[1] as HTMLSelectElement;
        let modified = usersArr.filter((user: any) => user.status === element.value);
        if(modified.length===0){
            setPages(0);
        }
        let pages = Math.ceil(modified.length/rows);
        setPages(pages);
        if(pages>5){
            setVals([1, 2, 3]);
        }else{
            setVals([pages-4,  pages-3, pages-2]);
        }
        setCurPage(1);
        setModifiedUsers(modified);
    }

    return(
        <div id="userspage" onClick={(e)=>{e.stopPropagation(); setMoreDisplay('none'); setFilterDisplay('none');}}>
            <div id="userspageheader">Users</div>
            <div id="usersxcont">
                <div className="uxdiv">
                    <img className="uximg" alt="" src={userspg1}/>
                    <div className="uxtext">USERS</div>
                    <div className="uxnum">{users.length}</div>
                </div>
                <div className="uxdiv">
                    <img className="uximg" alt="" src={userspg2}/>
                    <div className="uxtext">ACTIVE USERS</div>
                    <div className="uxnum">{activeUsers}</div>
                </div>
                <div className="uxdiv">
                    <img className="uximg" alt="" src={userspg3}/>
                    <div className="uxtext">USERS WITH LOANS</div>
                    <div className="uxnum">{users.length}</div>
                </div>
                <div className="uxdiv">
                    <img className="uximg" alt="" src={userspg4}/>
                    <div className="uxtext">USERS WITH SAVINGS</div>
                    <div className="uxnum">{users.length}</div>
                </div>

            </div>
            <div id="tablediv">
                <table>
                    <tbody>
                    <tr>
                            <th style={{}} onClick={(e)=>{e.stopPropagation(); setFilterDisplay('flex')}}>Organization<img className="tableimg" alt="" src={tableimg}/></th>
                            <th style={{}} onClick={(e)=>{e.stopPropagation(); setFilterDisplay('flex')}}>Username<img className="tableimg" alt="" src={tableimg}/></th> 
                            <th style={{}} onClick={(e)=>{e.stopPropagation(); setFilterDisplay('flex')}}>Email<img className="tableimg" alt="" src={tableimg}/></th>
                            <th style={{}} onClick={(e)=>{e.stopPropagation(); setFilterDisplay('flex')}}>Phone Number<img className="tableimg" alt="" src={tableimg}/></th> 
                            <th style={{}} onClick={(e)=>{e.stopPropagation(); setFilterDisplay('flex')}}>Date Joined<img className="tableimg" alt="" src={tableimg}/></th>
                            <th style={{}} onClick={(e)=>{e.stopPropagation(); setFilterDisplay('flex')}}>Status<img className="tableimg" alt="" src={tableimg}/></th> 
                    </tr>
                    {
                        modifiedUsers.slice(rows*(curPage-1), rows*curPage).map((row: any)=>{
                            return(
                                <tr key={row.id} onClick={()=>{finduserdetails(row.id);}}>
                                    <td>{row.orgName}</td>
                                    <td>{row.userName}</td> 
                                    <td>{row.email}</td>
                                    <td>{row.phoneNumber}</td> 
                                    <td>{dateFunct(row.createdAt)}</td>
                                    <td><div className={row.status.toLowerCase()+'status status'}>{row.status}</div></td> 
                                    <td onClick={(e)=>{e.stopPropagation(); console.log(e.clientX, e.clientY); setCoordinates([e.clientX, e.clientY]); setMoreDisplay('flex'); setIdFocus(row.id);}}><img className="more" alt="" src={more}/></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <div id="moreoptdiv" style={{display: moreDisplay, right: window.innerWidth-coordinates[0], top: (window.innerWidth<500)?coordinates[1]-30:(window.innerWidth>500 && window.innerWidth<=1023)?coordinates[1]-50:coordinates[1]+30 }}>
                    <div className='moreoptrow' onClick={()=>{ finduserdetails(idFocus);}}><img className="moreoptimg" alt="" src={view}/> View Details</div>
                    <div className='moreoptrow' onClick={()=>{ editStatus(idFocus, 'Blacklisted');}}><img className="moreoptimg" alt="" src={blacklist}/> Blacklist User</div>
                    <div className='moreoptrow' onClick={()=>{editStatus(idFocus, 'Active');}}><img className="moreoptimg" alt="" src={activate}/> Activate User</div>
                </div>
            </div>
            <div id="userpagebtm">
                <div id="upbleft">
                    Showing
                    <select id="upbselect" onChange={(e)=>{editRows(parseInt(e.target.value));}}>
                        <option className='upbopt'>5</option>
                        <option selected className='upbopt'>10</option>
                        <option className='upbopt'>20</option>
                    </select>
                    out of {users.length}
                </div>
                <div id="upbright" style={{display: pages===0?'none':'flex'}}>
                    <img className="upbarrow" alt="" src={prevbtn} onClick={()=>{prevpage();}}/>
                        <div className='upbnum' style={{display:(curPage>2) && (pages>5)?'flex':'none'}}>...</div>
                        <div className={curPage===vals[0]?'upbactivenum':'upbnum'} style={{display:pages>4?'flex':'none'}}>{vals[0]}</div>
                        <div className={curPage===vals[1]?'upbactivenum':'upbnum'} style={{display:pages>3?'flex':'none'}}>{vals[1]}</div>
                        <div className={curPage===vals[2]?'upbactivenum':'upbnum'} style={{display:pages>2?'flex':'none'}}>{vals[2]}</div>
                        <div className='upbnum' style={{display:(curPage<(pages-3)) && (pages>5)?'flex':'none'}}>...</div>
                        <div className={curPage===pages-1?'upbactivenum':'upbnum'} style={{display:pages>1?'flex':'none'}}>{pages-1}</div>
                        <div className={curPage===pages?'upbactivenum':'upbnum'}>{pages}</div>
                    <img className="upbarrow" alt="" src={nextbtn} onClick={()=>{nextpage();}}/>
                </div>
            </div>
                <form id="filterform" style={{display: filterDisplay}} onClick={(e)=>{e.stopPropagation();}}>
                    <p className="filterp">
                        <label className="filterlabel">Organization</label>
                        <select className="filterselect">
                            <option>Select</option>
                        </select>
                    </p>
                    <p className="filterp">
                        <label className="filterlabel">Username</label>
                        <input className="filterinput" type="text" placeholder="User"></input>
                    </p>
                    <p className="filterp">
                        <label className="filterlabel">Email</label>
                        <input className="filterinput" type="email" placeholder="User"></input>
                    </p>
                    <p className="filterp">
                        <label className="filterlabel">Date</label>
                        <input className="filterinput" type="date" placeholder="User"></input>
                    </p>
                    <p className="filterp">
                        <label className="filterlabel">Phone Number</label>
                        <input className="filterinput" type="phone" placeholder="User"></input>
                    </p>
                    <p className="filterp">
                        <label className="filterlabel">Status</label>
                        <select className="filterselect">
                            <option>Active</option>
                            <option>Blacklisted</option>
                            <option>Inactive</option>
                            <option>Pending</option>
                        </select>
                    </p>
                    <div id="filterbtndiv">
                        <div id="resetbtn" onClick={()=>{ setModifiedUsers(users); setFilterDisplay('none');}}>Reset</div>
                        <div id="filterbtn" onClick={()=>{ filterFunction(); setFilterDisplay('none');}}>Filter</div>
                    </div>
                </form>
        </div>
    );
}

export default Users;