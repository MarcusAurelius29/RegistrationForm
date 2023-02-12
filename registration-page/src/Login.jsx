import React, { useState } from 'react';

export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlfor="email">Email</label>
                <input type={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlfor="password">Password</label>
                <input type={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" id="password" name="password" />

                <button>Login</button>

            </form>
            <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </>
    )
}