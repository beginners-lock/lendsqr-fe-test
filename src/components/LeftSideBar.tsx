import React from 'react';
import briefcase from './../res/briefcase.svg';
import home from './../res/home.svg';
import users from './../res/users.svg';
import guarantors from './../res/guarantors.svg';
import drop2 from './../res/drop2.svg';
import auditlogs from './../res/auditlogs.svg';
import decisionmodels from './../res/decisionmodels.svg';
import feesandpricing from './../res/feesandpricing.svg';
import feesandcharges from './../res/feesandcharges.svg';
import karma from './../res/karma.svg';
import loanproducts from './../res/loanproducts.svg';
import loanrequests from './../res/loanrequests.svg';
import loans from './../res/loans.svg';
import organization from './../res/organization.svg';
import preferences from './../res/preferences.svg';
import reports from './../res/reports.svg';
import savings from './../res/savings.svg';
import savingsproducts from './../res/savingsproducts.svg';
import serviceaccount from './../res/serviceaccount.svg';
import services from './../res/services.svg';
import settlements from './../res/settlements.svg';
import whitelist from './../res/whitelist.svg';
import transactions from './../res/transactions.svg';
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
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={loans}/>
                <div className="lsotext">Loans</div>
            </div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={decisionmodels}/>
                <div className="lsotext">Decision Models</div>
            </div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={savings}/>
                <div className="lsotext">Savings</div>
            </div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={loanrequests}/>
                <div className="lsotext">Loan Requests</div>
            </div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={whitelist}/>
                <div className="lsotext">Whitelist</div>
            </div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={karma}/>
                <div className="lsotext">Karma</div>
            </div>
            <div id="lsoheader">BUSINESSES</div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={organization}/>
                <div className="lsotext">Organization</div>
            </div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={loanproducts}/>
                <div className="lsotext">Loan Products</div>
            </div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={savingsproducts}/>
                <div className="lsotext">Savings Products</div>
            </div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={feesandcharges}/>
                <div className="lsotext">Fees and Charges</div>
            </div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={transactions}/>
                <div className="lsotext">Transactions</div>
            </div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={services}/>
                <div className="lsotext">Services</div>
            </div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={serviceaccount}/>
                <div className="lsotext">Service Account</div>
            </div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={settlements}/>
                <div className="lsotext">Settlements</div>
            </div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={reports}/>
                <div className="lsotext">Reports</div>
            </div>
            <div id="lsoheader">SETTINGS</div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={preferences}/>
                <div className="lsotext">Preferences</div>
            </div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={feesandpricing}/>
                <div className="lsotext">Fees and Pricing</div>
            </div>
            <div className="lsoptionnormal">
                <img className="leftsideimg" alt="" src={auditlogs}/>
                <div className="lsotext">Audit Logs</div>
            </div>
        </div>
    );
}

export default LeftSideBar;