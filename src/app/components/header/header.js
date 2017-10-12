import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid bg-primary">
        <div className="row p-2">
          <div className="col text-white h3 mb-0">
            <Link to="/" className="text-white" style={{ textDecoration: "none"}}>React PWA</Link>
          </div>
        </div>
      </div>
    );
  }
}