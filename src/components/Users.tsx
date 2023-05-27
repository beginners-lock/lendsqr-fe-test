import React, { useState, useEffect } from 'react';
import userspg1 from './../res/userspg1.svg';
import userspg2 from './../res/userspg2.svg';
import userspg3 from './../res/userspg3.svg';
import userspg4 from './../res/userspg4.svg';
import tableimg from './../res/tableimg.svg';
import nextbtn from './../res/nextbtn.svg';
import prevbtn from './../res/prevbtn.svg';
import more from './../res/more.svg';
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

    useEffect(()=>{
        let url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users';
        fetch(url).then((response) => {
            return response.json();
        }).then((response) => {
            let active = 0;
            for(let i=0; i<response.length; i++){
                response[i].status = status[Math.floor(Math.random()*4)];
                if(response[i].status === 'Active'){ active++; }
                if(i===response.length-1){setUsers(response); setActiveUsers(active);}
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
        setVals([1, 2, 3]);
        setCurPage(1);
        setRows(value);
        setPages(users.length/value);

    }

    const prevpage = () => {
        if((curPage-1) >= 1){
            setCurPage(curPage-1);
            if(curPage-1>=2){
                if((curPage+2)<(pages-1)){
                    setVals([curPage-2, curPage-1, curPage]);
                }
            }else{
                setVals([1, 2, 3]);
            }
        }
    }

    const nextpage = () => {
        if((curPage+1) <= pages){
            setCurPage(curPage+1);
            if(curPage+1>=2){
                if((curPage+2)<(pages-1)){
                    setVals([curPage, curPage+1, curPage+2]);
                }
            }else{
                setVals([1, 2, 3]);
            }
        }
    }

    const finduserdetails = (id: string) => {
        let url = new URL('http://localhost:3000/dashboard');
        url.searchParams.set('id', id);
        window.location.href = url.toString();
    }

    return(
        <div id="userspage">
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
                            <th style={{width: '15%'}}>Organization<img className="tableimg" alt="" src={tableimg}/></th>
                            <th style={{width: '14%'}}>Username<img className="tableimg" alt="" src={tableimg}/></th> 
                            <th style={{width: '21%'}}>Email<img className="tableimg" alt="" src={tableimg}/></th>
                            <th style={{width: '16%'}}>Phone Number<img className="tableimg" alt="" src={tableimg}/></th> 
                            <th style={{width: '17%'}}>Date Joined<img className="tableimg" alt="" src={tableimg}/></th>
                            <th style={{width: '12%'}}>Status<img className="tableimg" alt="" src={tableimg}/></th> 
                    </tr>
                    {
                        users.slice(rows*(curPage-1), rows*curPage).map((row: any)=>{
                            return(
                                <tr key={row.id} onClick={()=>{finduserdetails(row.id);}}>
                                    <td style={{width: '15%'}}>{row.orgName}</td>
                                    <td style={{width: '14%'}}>{row.userName}</td> 
                                    <td style={{width: '21%'}}>{row.email}</td>
                                    <td style={{width: '16%'}}>{row.phoneNumber}</td> 
                                    <td style={{width: '17%'}}>{dateFunct(row.createdAt)}</td>
                                    <td  style={{width: '12%', textAlign:'center'}}><div className={row.status.toLowerCase()+'status status'}>{row.status}</div></td> 
                                    <td><img className="more" alt="" src={more}/></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
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
                <div id="upbright">
                    <img className="upbarrow" alt="" src={prevbtn} onClick={()=>{prevpage();}}/>
                        <div className='upbnum' style={{display:(curPage>2) && (pages>7)?'flex':'none'}}>...</div>
                        <div className={curPage===vals[0]?'upbactivenum':'upbnum'}>{vals[0]}</div>
                        <div className={curPage===vals[1]?'upbactivenum':'upbnum'}>{vals[1]}</div>
                        <div className={curPage===vals[2]?'upbactivenum':'upbnum'}>{vals[2]}</div>
                        <div className='upbnum' style={{display:(curPage<(pages-3)) && (pages>7)?'flex':'none'}}>...</div>
                        <div className={curPage===pages-1?'upbactivenum':'upbnum'}>{pages-1}</div>
                        <div className={curPage===pages?'upbactivenum':'upbnum'}>{pages}</div>
                    <img className="upbarrow" alt="" src={nextbtn} onClick={()=>{nextpage();}}/>
                </div>
            </div>
        </div>
    );
}

export default Users;