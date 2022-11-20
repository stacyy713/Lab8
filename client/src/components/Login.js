import React, {Component} from "react";
import axios from 'axios';
import Page404 from "./Page404";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    };

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    userCheck = e => {
        axios.get("http://localhost:3001/login")
            .then(function (res) {
                let emCheck = res.data.email;
                let passCheck = res.data.password;
                if (emCheck !== this.state.email || passCheck !== this.state.password) {
                    return (
                        <Page404/>
                    )
                } else {
                    return (
                        <h1>Hello, {res.data.firstName} {res.data.lastName} !</h1>
                    )
                }
            })
    }

    render() {
        const {email, password} = this.state;
        return (
            <div>
                <h1 align={"center"}>Login</h1>
                <div className="form">
                    <div className="form-body">
                        <div className="email">
                            <label className="form__label" htmlFor="email">Email </label>
                            <input type="email" name="email" onChange={this.changeHandler} className="form__input" value={email}
                                   placeholder="Email"/>
                        </div>
                        <div className="password">
                            <label className="form__label" htmlFor="password">Password </label>
                            <input className="form__input" onChange={this.changeHandler} type="password" value={password} name="password"
                                   placeholder="Password"/>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="submit" onClick={this.userCheck} className="btn">Login</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
