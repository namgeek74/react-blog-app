import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Header(props: any) {
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Blog App
                </Link>
                <ul className="nav navbar-nav pull-xs-right">
                    {props.isLoggedIn && <li className="nav-item">
                        <Link className="nav-link active" to="/">
                            Home
                        </Link>
                    </li>}
                    {props.isLoggedIn && (
                        <li className="nav-item">
                            <Link className="nav-link" to="/editor">
                                <i className="ion-compose"></i>&nbsp;New Article
                            </Link>
                        </li>
                    )}
                    {props.isLoggedIn && (
                        <li className="nav-item">
                            <Link className="nav-link" to="/setting">
                                <i className="ion-gear-a"></i>&nbsp;Settings
                            </Link>
                        </li>
                    )}
                    {!props.isLoggedIn && (
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Sign in
                            </Link>
                        </li>
                    )}
                    {!props.isLoggedIn && (
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">
                                Sign up
                            </Link>
                        </li>
                    )}
                    {props.isLoggedIn && <li className="nav-item">
                        <Link className="nav-link" to="/profile">
                            Profile
                        </Link>
                    </li>}
                </ul>
            </div>
        </nav>
    );
}

const mapStateToProps = (state: any) => {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn
    };
}

export default connect(mapStateToProps)(Header);