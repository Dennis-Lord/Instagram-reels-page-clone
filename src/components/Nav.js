import React from "react";
import '../styles/nav__.css';

// Navigation component
class Nav extends React.Component{

    toggleActive() {
        document.getElementById('button').classList.toggle('active')
        
    }

    render() {
        
        return(
        <div className="nav__container">
            {/* nav container */}
            <nav className="nav">
                <button className='nav__1 c' id='button' onClick={() => this.toggleActive()}>
                    <div className='line line1'></div>
                    <div className='line line2'></div>
                </button>
                <span className="nav__2 c">logo</span>
                <a className='nav__3 c' target={'_blank'} rel="noreferrer" href="https://www.instagram.com/accounts/login">
                    <span className="">Log in</span>
                </a>
            </nav>
        </div>
    )}
}

export default Nav;