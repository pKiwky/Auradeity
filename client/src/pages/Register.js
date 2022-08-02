import { useEffect, useState } from "react";
import RegisterForm from "../components/forms/register_form";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    function onUsernameChanged(data) { }

    function onPasswordChanged(data) { }

    function onConfirmPasswordChanged(data) { }

    function onEmailChanged(data) { }

    return (
        <RegisterForm
            onUsernameChanged={onUsernameChanged} 
            onPasswordChanged={onPasswordChanged}
            onConfirmPasswordChanged={onConfirmPasswordChanged}
            onEmailChanged={onEmailChanged}
        />
    )
}

export default Register;