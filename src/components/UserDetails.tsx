import React, { ReactElement, ReactHTMLElement, useEffect, useState } from 'react';
import avatar from './../res/avatar.svg';
import back from './../res/back.svg';
import starempty from './../res/starempty.svg';
import starfull from './../res/starfull.svg';
import './../styles/App.css';

type UserDetailsProps = {
    id: string
    setId: React.Dispatch<React.SetStateAction<string>>
}

const UserDetails = ({id, setId}: UserDetailsProps) => {
    let format = {
        accountBalance: "",
        accountNumber: "",
        createdAt: "",
        education: {level: '', employmentStatus: '', sector: '', duration: '', officeEmail: '', monthlyIncome: [], loanRepayment: ''},
        email: "",
        guarantor: {firstName: '', lastName: '', phoneNumber: '', gender: '', address: "", relationship: ""},
        id: "",
        lastActiveDate: "",
        orgName: "",
        phoneNumber: "",
        profile: {firstName: '', lastName: '', phoneNumber: '', avatar: '', gender: '', bvn: '', address:'', maritalStatus: '', children: ''},
        socials: {facebook: '', instagram: '', twitter: ''},
        userName: ""
    }
    
    const [userDetails, setUserDetails] = useState(format);
    useEffect(()=>{
        if(id!==''){
            let url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/'+id;
            fetch(url).then((response) => {
                return response.json();
            }).then((response) => {
                console.log(response);
                localStorage.setItem('userDetails', response);
                setUserDetails(response);
            }); 
        }
    }, [])

    const goback = () => {
        setId('');
    }

    const setListActive = (target:  HTMLElement) => {
        document.getElementsByClassName('udpmlistactive')[0].className = 'udpmlist';
        target.className = 'udpmlistactive';
    }

    return(
        <div id="userdetailspage">
            <div id="back" onClick={()=>{goback();}}><img id="backimg" alt="" src={back}/>Back to users</div>
            <div id="udptop">
                <div id="udpleft">User Details</div>
                <div id="udpright">
                    <button id="blacklistuserbtn">Blacklist User</button>
                    <button id="activateuserbtn">Activate User</button>
                </div>
            </div>
            <div id="udpmiddle">
                <div id="udpmtop">
                    <img id="udpmavatar" alt="" src={userDetails.profile.avatar}/>
                    <div className="udpmdiv">
                        <div id="udpmname">{userDetails.profile.firstName+' '+userDetails.profile.lastName}</div>
                        <div id="udpmid">{userDetails.accountNumber}</div>
                    </div>
                    <div className="udpmdiv" style={{border:'none', borderLeft: window.innerWidth<1024?'none':'1px solid rgba(84, 95, 125, 0.2)', borderRight:'1px solid rgba(84, 95, 125, 0.2)',}}>
                        <div id="usertier">User's Tier</div>
                        <div id="udpmstarcont">
                            <img alt="" src={starfull}/>
                            <img alt="" src={starempty}/>
                            <img alt="" src={starempty}/>
                        </div>
                    </div>
                    <div className="udpmdiv">
                        <div id="udpmcash">{'₦'+userDetails.accountBalance}</div>
                        <div id="udpmbank">9912345678/Providus Bank</div>
                    </div>
                </div>
                <div id="udpmbtm">
                    <div className="udpmlistactive" onClick={(e)=>{setListActive(e.target as HTMLElement);}}>General Details</div>
                    <div className="udpmlist" onClick={(e)=>{setListActive(e.target as HTMLElement);}}>Documents</div>
                    <div className="udpmlist" onClick={(e)=>{setListActive(e.target as HTMLElement);}}>Bank Details</div>
                    <div className="udpmlist" onClick={(e)=>{setListActive(e.target as HTMLElement);}}>Loans</div>
                    <div className="udpmlist" onClick={(e)=>{setListActive(e.target as HTMLElement);}}>Savings</div>
                    <div className="udpmlist" onClick={(e)=>{setListActive(e.target as HTMLElement);}}>App and System</div>
                </div>
            </div>
            <div id="udpbtm">
                <div className="udpbrow">
                    <div className='udpbheader'>Personal Information</div>
                    <div className='udpbbody'>
                        <div className='udpbcell'>
                            <div className='udpbtop'>FULL NAME</div>
                            <div className='udpbbtm'>{userDetails.profile.firstName+' '+userDetails.profile.lastName}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>PHONE NUMBER</div>
                            <div className='udpbbtm'>{userDetails.profile.phoneNumber}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>EMAIL ADDRESS</div>
                            <div className='udpbbtm'>{userDetails.email}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>BVN</div>
                            <div className='udpbbtm'>{userDetails.profile.bvn}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>GENDER</div>
                            <div className='udpbbtm'>{userDetails.profile.gender}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>MARITAL STATUS</div>
                            <div className='udpbbtm'>{userDetails.profile.maritalStatus?userDetails.profile.maritalStatus:'Information unavailable'}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>CHILDREN</div>
                            <div className='udpbbtm'>{userDetails.profile.children?userDetails.profile.children:'Information unavailable'}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>TYPE 0F RESIDENCE</div>
                            <div className='udpbbtm'>{userDetails.profile.address}</div>
                        </div>
                    </div>
                </div>
                <div className="udpbrow">
                    <div className='udpbheader'>Education and Employment</div>
                    <div className='udpbbody'>
                        <div className='udpbcell'>
                            <div className='udpbtop'>LEVEL OF EDUCATION</div>
                            <div className='udpbbtm'>{userDetails.education.level}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>EMPLOYMENT STATUS</div>
                            <div className='udpbbtm'>{userDetails.education.employmentStatus}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>SECTOR OF EMPLOYMENT</div>
                            <div className='udpbbtm'>{userDetails.education.sector}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>DURATION OF EMPLOYMENT</div>
                            <div className='udpbbtm'>{userDetails.education.duration}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>OFFICE EMAIL</div>
                            <div className='udpbbtm'>{userDetails.education.officeEmail}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>MONTHLY INCOME</div>
                            <div className='udpbbtm'>{'₦'+userDetails.education.monthlyIncome[0]+'- ₦'+userDetails.education.monthlyIncome[1]}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>LOAN REPAYMENT</div>
                            <div className='udpbbtm'>{'₦'+userDetails.education.loanRepayment}</div>
                        </div>
                    </div>
                </div>
                <div className="udpbrow">
                    <div className='udpbheader'>Socials</div>
                    <div className='udpbbody'>
                        <div className='udpbcell'>
                            <div className='udpbtop'>TWITTER</div>
                            <div className='udpbbtm'>{userDetails.socials.twitter}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>FACEBOOK</div>
                            <div className='udpbbtm'>{userDetails.socials.facebook}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>INSTAGRAM</div>
                            <div className='udpbbtm'>{userDetails.socials.instagram}</div>
                        </div>
                    </div>
                </div>
                <div className="udpbrow" style={{border:'none'}}>
                    <div className='udpbheader'>Guarantor</div>
                    <div className='udpbbody'>
                        <div className='udpbcell'>
                            <div className='udpbtop'>FULL NAME</div>
                            <div className='udpbbtm'>{userDetails.guarantor.firstName+' '+userDetails.guarantor.lastName}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>PHONE NUMBER</div>
                            <div className='udpbbtm'>{userDetails.guarantor.phoneNumber}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>EMAIL ADDRESS</div>
                            <div className='udpbbtm'>{userDetails.guarantor.address}</div>
                        </div>
                        <div className='udpbcell'>
                            <div className='udpbtop'>RELATIONSHIP</div>
                            <div className='udpbbtm'>{userDetails.guarantor.relationship?userDetails.guarantor.relationship:'Information unavailable'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;