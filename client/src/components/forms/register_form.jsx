const RegisterForm = () => {
    return (
        <form>
            <h5 className="title">Register</h5>

            <div className="input-group mb-2 w-75">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fas fa-user-alt"></i>
                    </span>
                </div>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
            </div>

            <div className="input-group mb-2 w-75">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fas fa-key"></i>
                    </span>
                </div>
                <input type="text" className="form-control" placeholder="Password" aria-label="Password" />
            </div>

            <div className="input-group mb-2 w-75">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fas fa-key"></i>
                    </span>
                </div>
                <input type="text" className="form-control" placeholder="Confirm password" aria-label="Confirm password" />
            </div>

            <div className="input-group mb-2 w-75">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fas fa-at"></i>
                    </span>
                </div>
                <input type="text" className="form-control" placeholder="Email" aria-label="Email" />
            </div>

            <div className="d-flex justify-content-center mx-1">
                <div className="btn-group w-25 mr-2" role="group">
                    <button type="button" className="btn btn-danger w-25" onclick="openLogin()">Login</button>
                </div>
                <div className="btn-group w-50" role="group">
                    <button type="button" className="btn btn-primary w-75">Register</button>
                </div>
            </div>
        </form>
    );
}

export default RegisterForm;