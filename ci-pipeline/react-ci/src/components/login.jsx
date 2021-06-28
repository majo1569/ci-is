import React from 'react';

export const Login = () => {
    return (
    <>
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <form className="col-md-4 col-sm-7 border border-primary rounded bg-white py-4">
                    <h2 className="text-center">Login</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <p>User</p>
                            <input type="text" name="user" className="form-control"></input>
                        </div>
                    </div>
                    <div className="row justify-content-center my-3">
                        <div className="col-md-10">
                            <p>Password</p>
                            <input type="password" name="password" className="form-control"></input>
                        </div>
                    </div>
                    <div className="col-md-12 mt-4 d-flex justify-content-end">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
};

export default Login;