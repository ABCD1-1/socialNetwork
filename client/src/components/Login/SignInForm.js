import React, { useState } from 'react';
import axios from 'axios';


const SignInForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();   // to avoid the page refreshing after the submit due to default behavior
        const loginError = document.querySelector('.login.error');

        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/user/login`,
            withCredentials: true,
            data: {
                email,
                password
            }
        })
        .then((res) => {
            if (res.data.errors) {
                loginError.innerHTML = res.data.errors.message;
            } else {
                window.location = '/';   // go to Home page
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <form action="" onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />

            <br />
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <div className="login error"></div>
            <br />
            <input type="submit" value={"Se connecter"} />
        </form>
    );
};

export default SignInForm;