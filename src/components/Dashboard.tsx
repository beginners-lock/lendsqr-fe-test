
import {useState, useEffect} from 'react';
import './../styles/App.css';
import TopNav from './TopNav';
import LeftSideBar from './LeftSideBar';
import Users from './Users';
import UserDetails from './UserDetails';

type DashboardProps = {
    id: string,
    setId: React.Dispatch<React.SetStateAction<string>>,
}

const Dashboard = ({id, setId}: DashboardProps) => {
    const [activeLSB, setActiveLSB] = useState('0px');

    return(
        <div  id="dashboardpage">
            <TopNav active={activeLSB} setActive={setActiveLSB}/>
            <div id="mainbody">
                <LeftSideBar active={activeLSB}/>
                {
                    id===''?
                        <Users setId={setId}/>
                    :   <UserDetails /*userDetails={userDetails}*/id={id} setId={setId}/>
                }
            </div>
        </div>
    );
}

export default Dashboard;