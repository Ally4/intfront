import React, { Component } from "react";
import { connect } from "react-redux";
import { registerAction } from "../redux/actions/register";
import { withRouter } from 'react-router-dom';

class Register extends Component {
constructor(props) {
    super(props);
    this.state = {
        name:"",
        email: "",
        password: "",
    };
    }

onSubmit = async (e) => {
    e.preventDefault();
    const data = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
    };
    await this.props.registerAction(data, this.props.history);
};

change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
};

render() {
    return (
    <div className="register">
        <form onSubmit={(e) => this.onSubmit(e)}>
        <p
        id="loading"
        style={{ color: "000", display: this.props.registerState.loading }}
        >
        please wait ...{" "}
        </p>
        <h1>register</h1>
        <input
            type="name"
            name="name"
            id="name"
            aria-label="name"
            placeholder="Name"
            onChange={(e) => this.change(e)}
        />
        <br />
        <br /> <br />
        <input
            type="email"
            name="email"
            id="email"
            aria-label="email"
            placeholder="Email"
            onChange={(e) => this.change(e)}
        />
        <br />
        <br /> <br />
        <input
            type="password"
            id="password"
            aria-label="password"
            name="password"
            placeholder="Password"
            onChange={(e) => this.change(e)}
        />
        <br />
        <br />
        <input
            type="submit"
            id="button"
            value="REGISTER"
            aria-label="register"
            className="register-btn"
        />
        </form>
    </div>
    );
}
}


const mapStateToProps = (state) => {
return {
    registerState: state.register,
};
};

const mapDispatchToProps = (dispatch) => {
return {
    registerAction: (data, history) => dispatch(registerAction(data, history)),
};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
