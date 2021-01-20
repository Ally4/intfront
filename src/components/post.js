import React, { Component } from "react";
import { connect } from "react-redux";
import { postAction } from "../redux/actions/post";
import { withRouter } from 'react-router-dom';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();
      const data = {
        title: this.state.title,
        content: this.state.content,
      };
      await this.props.postAction(data, this.props.history);
  };

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={(e) => this.onSubmit(e)}>
          <h1>Post</h1>
          
          <input
            type="title"
            name="title"
            id="title"
            aria-label="title"
            placeholder="title"
            onChange={(e) => this.change(e)}
          />
          <br /> <br />
          <input
            type="content"
            id="content"
            aria-label="content"
            name="content"
            placeholder="content"
            onChange={(e) => this.change(e)}
          />
          <br />
          <br />
          <input
            type="submit"
            id="button"
            value="Post"
            aria-label="post"
            className="post-btn"
          />
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    postState: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postAction: (data, history) => dispatch(postAction(data, history)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
