import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import TextInputField from "../components/textInputField";


function SignUp() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, SetPassword] = useState('')

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault()
        console.log(username, email, password + "gegevens zijn gesubmit")
        try{
            await axios.post('http://localhost:3000/register', {
                email: email,
                password: password,
                username: username,

            })
            history.push('/signin')
        } catch (e) {
            console.error(e)

        }
    }

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form onSubmit={handleSubmit}>
        <p>
            <TextInputField
                typeValue="text"
                onChange={(e) => setUsername(e.target.value)}
                textValue={username}
            textLabel="Gebruikersnaam"/>
            <TextInputField
                typeValue="email"
                onChange={(e) => setEmail(e.target.value)}
                textValue={email}
            textLabel="E-mailadres"/>
            <TextInputField
                typeValue="password"
                onChange={(e) => SetPassword(e.target.value)}
                textValue={password}
            textLabel="Wachtwoord"/>
            <button
                type="submit"
            >
                Registreren
            </button>
        </p>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;