import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import './App.css';
import './styles/auth.css';
import LoginForm from "./components/forms/login_form";
import RegisterForm from "./components/forms/register_form";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<LoginForm />} />
                <Route path="register" element={<RegisterForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
