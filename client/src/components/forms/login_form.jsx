const LoginForm = () => {
    return (
        <form>
            <h5 class="title">Login</h5>

            <div className="input-group mb-2 w-75">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                        <i class="fas fa-at"></i>
                    </span>
                </div>
                <input type="text" class="form-control" placeholder="Email" aria-label="Email" />
            </div>

            <div class="input-group mb-2 w-75">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                        <i class="fas fa-key"></i>
                    </span>
                </div>
                <input type="text" class="form-control" placeholder="Password" aria-label="Password" />
            </div>

            <div class="d-flex justify-content-center mx-1">
                <div class="btn-group w-25 mr-2" role="group">
                    <button type="button" class="btn btn-danger w-25" onclick="openRegister()">Register</button>
                </div>
                <div class="btn-group w-50" role="group">
                    <button type="button" class="btn btn-primary w-75">Login</button>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;