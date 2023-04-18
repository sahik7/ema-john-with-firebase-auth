import React, { useContext } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const Login = () => {

    const { signIn } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email,password)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error.message);
    })
    }

    return (
        <>
            <div className="form-container">
                <h2 className="form-title">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <input className="btn-submit" type="submit" value="Login" />
                </form>
                <p><small>New to Ema John? <Link to="/signup">Create New Account</Link></small></p>
            </div>
        </>
    );
};

export default Login;