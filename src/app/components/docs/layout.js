import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DocsLayout extends Component {
  
  render() {
    return (
      <div className="row">
        <div className="col col-md-3 p-2 mt-2">
          <ul className="list-unstyled">
            <li>
              <Link to="/docs" className="text-lead">Docs</Link>
              <p>
                We are busy writing documentation for the boilerplate. Till then please visit our <a href="https://github.com/Atyantik/react-pwa/wiki" rel="noFollow" target="_blank">wiki</a> for limited examples.
              </p>
              <div className="alert alert-warning mt-2">We are looking for contributors and queries to create useful documentation. Please contribute.</div>
            </li>
          </ul>
        </div>
        <div className="col col-md-9">
          <div className="mt-4">
            {this.props.children}
          </div>
          <div className="alert alert-warning mt-5">We are looking for contributors and queries to create useful documentation. Please contribute.</div>
        </div>
      </div>
    );
  }
}
