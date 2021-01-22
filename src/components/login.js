import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAction } from "../redux/actions/login";
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();
      const data = {
        email: this.state.email,
        password: this.state.password,
      };
      await this.props.loginAction(data, this.props.history);
  };

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={(e) => this.onSubmit(e)}>
        <p
          id="loading"
          style={{ color: "000", display: this.props.loginState.loading }}
        >
          please wait ...{" "}
        </p>
          <h1>Log in</h1>
          <input
            type="email"
            name="email"
            id="email"
            aria-label="email"
            placeholder="Email"
            onChange={(e) => this.change(e)}
          />
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
            value="LOGIN"
            aria-label="login"
            className="login-btn"
          />
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    loginState: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (data, history) => dispatch(loginAction(data, history)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
