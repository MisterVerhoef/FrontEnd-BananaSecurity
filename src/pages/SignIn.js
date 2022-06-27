import React, {useContext, useState} from 'react';
import { Link, useHistory} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import TextInputField from "../components/textInputField";
import axios from "axios";

function SignIn() {
    const {login} = useContext(AuthContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault()
        console.log(email, password + " je bent ingelogd")
        try{
            const result = await axios.post('http://localhost:3000/login', {
                email: email,
                password: password,
            })
            login(result.data.accessToken);
            console.log(result.data.accessToken);
        } catch (e) {
            console.error(e)
        }
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form
      onSubmit={handleSubmit}>
        <p>
            <TextInputField
                typeValue="email"
                onChange={(e) => setEmail(e.target.value)}
                textValue={email}
                textLabel="E-mailadres"/>
            <TextInputField
                typeValue="password"
                onChange={(e) => setPassword(e.target.value)}
                textValue={password}
                textLabel="Wachtwoord"/>
        </p>
        <button
        type="submit">Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;