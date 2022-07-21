import React from 'react';
import { signInWithGoogle } from '../../firebase';
import './index.scss'


const Login = () => {
    return (
        <div className="dashboard flat-button">
            <button onClick={signInWithGoogle}>
                Sign in with google
            </button>
        </div>
    )
}

export default Login;