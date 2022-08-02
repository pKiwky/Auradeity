import { useEffect, useState } from "react";
import LoginForm from "../components/forms/login_form";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function onUsernameChanged(data) { }

    function onPasswordChanged(data) { }

    return (
        <LoginForm
            onUsernameChanged={onUsernameChanged}
            onPasswordChanged={onPasswordChanged}
        />
    )
}

export default Login;