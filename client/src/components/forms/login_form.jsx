import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();

    return (
        <div id="authentication">
            <form id="login">
                <h5 className="title">Login</h5>

                <div className="input-group mb-2 w-75">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={solid('at')} />
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Email" aria-label="Email" />
                </div>

                <div className="input-group mb-2 w-75">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={solid('key')} />
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Password" aria-label="Password" />
                </div>

                <div className="d-flex justify-content-center mx-1">
                    <div className="btn-group w-25 mr-2" role="group">
                        <button type="button" className="btn btn-danger w-25" onClick={() => navigate("/register")}>Toggle</button>
                    </div>
                    <div className="btn-group w-50" role="group">
                        <button type="button" className="btn btn-primary w-75">Login</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;