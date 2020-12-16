import React from 'react'
import '../Navigation/Navigation.css'

const desulogo = 'https://firebasestorage.googleapis.com/v0/b/desucalls.appspot.com/o/hanna-logo.svg?alt=media&token=8431139b-6871-4eee-b016-c283b7bd48da';

const Navigation = () => {
    return (
        <header className="dropShadow">
            <div className="headerWrapper">
                <div className="headerContainer flex">
                    <div className="headerLogoLinkWrapper">
                        <div className="headerLogoLink">
                        <a href='/'>
                            <div className="headerLogo flex flex-row">
                                <div className="logoImg">
                                    <img src={desulogo} alt="Desucalls Logo"/>
                                </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="logout">
                        <button>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navigation