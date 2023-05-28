
import {useState, useEffect} from 'react';
import './../styles/App.css';
import TopNav from './TopNav';
import LeftSideBar from './LeftSideBar';
import Users from './Users';
import UserDetails from './UserDetails';

function Dashboard() {
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
    const [id, setId] = useState<string>('')
    const [userDetails, setUserDetails] = useState(format);
    const [activeLSB, setActiveLSB] = useState('0px');

    useEffect(()=>{
        let id = new URL(window.location.href).searchParams.get('id');
        if(id===null){
            setId('');
        }else{
            setId(id); 
            let url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/'+id;
            fetch(url).then((response) => {
                return response.json();
            }).then((response) => {
                console.log(response);
                setUserDetails(response);
            }); 
        }
    }, [])

    return(
        <div  id="dashboardpage">
            <TopNav active={activeLSB} setActive={setActiveLSB}/>
            <div id="mainbody">
                <LeftSideBar active={activeLSB}/>
                {
                    id===''?<Users/>:<UserDetails userDetails={userDetails}/>
                }
            </div>
        </div>
    );
}

export default Dashboard;