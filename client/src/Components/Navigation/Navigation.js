import React from 'react'
import hannalogo from '../../Icons/hanna-logo.png.svg'
import '../Navigation/Navigation.css'

const Navigation = (props) => {
    const { hanleLogout } = props;
    return (
        <header className="dropShadow">
            <div className="headerWrapper">
                <div className="headerContainer flex">
                    <div className="headerLogoLinkWrapper">
                        <div className="headerLogoLink">
                        <a href='/'>
                            <div className="headerLogo flex flex-row">
                                <div className="logoImg">
                                    <img src={hannalogo} alt="Desucalls Logo"/>
                                </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="logout">
                        <button onClick={hanleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navigation