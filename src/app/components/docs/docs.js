import React, { Component } from "react";

export default class Home extends Component {
  
  render() {
    return (
      <div className="mt-4">
        <p>We just launched the site.. Give us some time before we write some great documentation. </p>
        <p>Till then why don't you play with the code or checkout our <a href="https://github.com/Atyantik/react-pwa/wiki" target="_blank">wiki</a>.</p>
        <div className="alert alert-warning">We are looking for contributors and queries to create useful documentation. Please contribute.</div>
      </div>
    );
  }
}
