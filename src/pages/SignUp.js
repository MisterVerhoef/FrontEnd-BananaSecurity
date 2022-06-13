import React from 'react';
import { Link } from 'react-router-dom';
import TextInputField from "../components/textInputField";


function SignUp() {

    function handleSubmit(e){
        e.preventDefault()
        console.log("gegevens zijn gesubmit")

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
            textLabel="Gebruikersnaam"/>
            <TextInputField
            textLabel="E-mailadres"/>
            <TextInputField
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