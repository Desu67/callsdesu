import React from 'react'

import './Login.css'

export default function Login(props) {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        hanleSignup,
        hasAccount,
        setAccount,
        emailError,
        passwordError
    } = props;

    return (
        <div className="login">
            <div className="form">
                <input type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <p className="error">{emailError}</p>
                <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)}/>
                <p className="error">{passwordError}</p>
                <div className="form">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Iniciar Sesion</button>
                            <p className="cursor" onClick={() => setAccount(!hasAccount)}>Registrarme</p>
                        </>
                    ) : (
                        <>
                            <button onClick={hanleSignup}>Registrarme</button>
                            <p className="cursor" onClick={() => setAccount(!hasAccount)}>Inicia Sesion</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
