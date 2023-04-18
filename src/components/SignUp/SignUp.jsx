import React, { useContext, useState } from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState("")

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        console.log(email, password, confirmPassword);
        setError("");
        if (password !== confirmPassword) {
            setError("Your password did not match");
            return
        }
        else if (password.length < 6) {
            setError("Your password must be at least 6 characters or longer");
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            setError(error.message)
        })
    }

    return (
        <>
            <div className="form-container">
                <h2 className="form-title">Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" id="" required />
                    </div>
                    <input className="btn-submit" type="submit" value="Sign Up" />
                </form>
                <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
                <p className="text-error">{error}</p>
            </div>
        </>
    );
};

export default SignUp;