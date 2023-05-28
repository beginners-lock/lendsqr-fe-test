import React from 'react';
import logo from './../res/logo.svg';
import logoname from './../res/lendsqr.svg';
import loginimg from './../res/pablo-sign-in 1.svg';
import './../styles/App.css';

function LogIn() {
    const showhide = (target: HTMLElement) => {
        console.log('hey');
        let input = target.previousElementSibling as HTMLInputElement;
        if(target.innerText === 'SHOW'){
            target.innerText = 'HIDE';
            input.type = 'text'
        }else{
            target.innerText = 'SHOW';
            input.type = 'password';
        }
    }

    return (
        <div id="loginpage">
            <div id="logincompany">
                <img alt="" id="loginlogo" src={logo}/>
                <img alt="" id="loginlogoname" src={logoname}/>
            </div>
            <img alt="" id="loginimg" src={loginimg}/>
            <div id="form">
                <div id="loginwelcome">Welcome!</div>
                <div id="loginformtext">Enter details to login</div>
                <p>
                <input className="logininput" type="text" name="Email" placeholder='Email'/>
                </p>
                <p>
                <input className="logininput" type="password" name="Password" placeholder="Password"></input>
                <i id="loginshowhide" onClick={(e)=>{showhide(e.target as HTMLElement);}}>SHOW</i>
                </p>
                <div id="loginforgotpass">Forgot password</div>
                <button id="loginsubmit" onClick={()=>{window.location.href = window.location.href.slice(0, window.location.href.indexOf('/'))+'dashboard';}}>LOG IN</button>
            </div>
        </div>
    );
}

export default LogIn;
