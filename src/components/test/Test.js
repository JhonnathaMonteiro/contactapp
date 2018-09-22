import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    userId: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          userId: data.userId
        })
      );
  }

  // componentWillMount() {
  //   console.log("componentWillMount...");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate...");
  // }

  // componentWillUpdate() {
  //   console.log("componentWillUpdate...");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("componentWillReceiveProps...");
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  // getSnapshotBeforeUpdate(nextProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate...");
  // }

  render() {
    const { title, userId } = this.state;

    return (
      <div>
        <h1>Test Component</h1>
        <h3>Title: {title}</h3>
        <h3>userId: {userId}</h3>
      </div>
    );
  }
}

export default Test;
