import React, {Component} from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid bg-light mt-5">
        <div className="row p-3">
          <div className="d-block w-100 text-center">
            <span>Powered by:&nbsp;</span>
            <a
              href="https://www.atyantik.com"
              target="_blank"
              className="text-black"
            >
              Atyantik Technologies Private Limited
            </a>
          </div>
        </div>
      </div>
    );
  }
}