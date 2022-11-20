import React, {Component} from "react";
import axios from "axios";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            group: '',
            variant: '',
            phone: '',
            email: '',
            password: '',
            role: false,
        }
    };

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);

        alert(this.state.firstName + " " + this.state.lastName + " was registered successfully");
        axios.post("http://localhost:3001/addUser", this.state)
            .then(res => console.log(res.data)).catch(err => console.log());

    };

    getUsersHandler = e => {
        axios.get("http://localhost:3001/getUsers")
            .then(res => console.log(res.data)).catch(err => console.log());

    }

    // getUserList = e => {
    //     axios.get("http://localhost:3001/getUsersList")
    //         .then(function (res) {
    //                 console.log(res.data.map(item => item.lastName))
    //             }
    //         )
    // };

    render() {
        const {firstName, lastName, group, variant, phone, email, password} = this.state;
        return (
            <div>
                <h1 align={"center"}>Registration</h1>
                <div className="form">
                    <div className="form-body">
                        <div className="username">
                            <label className="form__label" htmlFor="firstName">First Name </label>
                            <input className="form__input" type="text" name="firstName" value={firstName}
                                   onChange={this.changeHandler} placeholder="FirstName"/>
                        </div>
                        <div className="lastname">
                            <label className="form__label" htmlFor="lastName">Last Name </label>
                            <input type="text" name="lastName" className="form__input" value={lastName}
                                   onChange={this.changeHandler} placeholder="LastName"/>
                        </div>
                        <div className="group">
                            <label className="form__label" htmlFor="group">Group </label>
                            <input type="text" name="group" className="form__input" value={group}
                                   onChange={this.changeHandler} placeholder="Group"/>
                        </div>
                        <div className="variant">
                            <label className="form__label" htmlFor="variant">Variant </label>
                            <input type="text" name="variant" className="form__input" value={variant}
                                   onChange={this.changeHandler} placeholder="Variant"/>
                        </div>
                        <div className="phone">
                            <label className="form__label" htmlFor="phone">Phone </label>
                            <input type="text" name="phone" className="form__input" value={phone}
                                   onChange={this.changeHandler} placeholder="Phone"/>
                        </div>
                        <div className="email">
                            <label className="form__label" htmlFor="email">Email </label>
                            <input type="email" name="email" className="form__input" value={email}
                                   onChange={this.changeHandler} placeholder="Email"/>
                        </div>
                        <div className="password">
                            <label className="form__label" htmlFor="password">Password </label>
                            <input className="form__input" type="password" name="password" value={password}
                                   onChange={this.changeHandler} placeholder="Password"/>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="submit" onClick={this.submitHandler} className="btn">Register</button>
                        <p></p>
                        <button type="submit" onClick={this.getUsersHandler} className="btn">All Users</button>
                        <p></p>
                        {/*<button type="submit" onClick={this.getUserList} className="btn">Users</button>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration;
