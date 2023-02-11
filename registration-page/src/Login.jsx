import React, { useState } from 'react';

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="email">Email</label>
            <input type={email} placeholder="youremail@gmail.com" id="email" name="email" />

            <label for="password">Password</label>
            <input type={password} placeholder="********" id="password" name="password" />

            <button>Login</button>

        </form>
    )
}