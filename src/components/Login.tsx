import { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { LOGIN } from '../redux/actions';
import { connect } from 'react-redux';

function Login(props: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeEmail = (e: any) => {
        setEmail(e.target.value);
    };

    const changePassword = (e: any) => {
        setPassword(e.target.value);
    };

    const login = () => {
        fetch('https://conduit.productionready.io/api/users/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    email: email,
                    password: password,
                },
            }),
        }).then(res => res.json()).then(res => {
            props.history.push('/');
            props.dispatch({ type: LOGIN, user: res.user });
        }
        );
    };

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign up</h1>
                        <p className="text-xs-center">
                            <Link to="/register">Need an account?</Link>
                        </p>
                        <form>
                            <fieldset className="form-group">
                                <input
                                    className="form-control form-control-lg"
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={changeEmail}
                                />
                            </fieldset>
                            <fieldset className="form-group">
                                <input
                                    className="form-control form-control-lg"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={changePassword}
                                />
                            </fieldset>
                            <button
                                type="button"
                                className="btn btn-lg btn-primary pull-xs-right"
                                onClick={login}
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(connect()(Login));