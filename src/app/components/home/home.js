import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fold from "core/components/fold";
import Prism from "../prism";
import Logo from "../../../resources/images/logo.svg";


const supportsServiceWorker = function() {
  if (typeof window === "undefined") return false;
  return "serviceWorker" in window.navigator;
};

export default class Home extends Component {
  
  render() {
    return (
      <div className="mt-4">
        <a
          className="d-none d-sm-block"
          href="https://github.com/Atyantik/react-pwa"
          target="_blank"
          rel="nofollow noopener"
        >
          <img style={{position: "absolute", top: "49px", right: 0, border: 0}} src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" />
        </a>
        <a
          className="d-sm-none"
          href="https://github.com/Atyantik/react-pwa"
          target="_blank"
          rel="nofollow noopener"
        >
          Star and fork us on github!
        </a>
        <div className="text-center">
          <div className="mt-5">
            <h1 className="d-sm-none">React PWA</h1>
            <h2 className="h3">Your Progressive Framework!</h2>
          </div>
          <img className="mt-3 mb-2" src={Logo} alt="ReactPWA Logo" style={{ maxWidth: "100px" }}/>
          <p>
            A highly scalable, Progressive Web Application foundation with the best Developer Experience.
          </p>
          <a
            className="btn btn-outline-primary mr-2"
            href="https://github.com/Atyantik/react-pwa/archive/master.zip"
            target="_blank"
          >
            Download and get started
          </a>
        </div>
        <p className="mt-5">
          <span className="h4">Lets get started with 3 simple steps:</span>
        </p>
        <p>
          We work with&nbsp;
          <a
            href="https://yarnpkg.com"
            rel="nofollow"
            target="_blank"
          >
            yarn
          </a> so all the examples are covered using yarn. If you would like to migrate to yarn please visit the link:
        </p>
        <p>
          <a
            href="https://yarnpkg.com/lang/en/docs/migrating-from-npm/"
            rel="nofollow"
            target="_blank"
            style={{wordWrap: "break-word"}}
          >
            https://yarnpkg.com/lang/en/docs/migrating-from-npm/
          </a>
        </p>
        <div className="mt-5">
          <strong>1) Cloning the repository: </strong>
          <small className="text-muted">The command below will create a folder "react-pwa" relative to your current directory</small>
          <Prism code={"git clone https://github.com/Atyantik/react-pwa.git"} language="bash" />
        </div>
        <div className="mt-3">
          <strong>2) Moving to the repository & installing dependencies: &nbsp;</strong>
          <Prism code={"cd react-pwa && yarn"} language="bash" />
        </div>
        <div className="mt-3">
          <strong>3) Running the boilerplate: &nbsp;</strong>
          <Prism code={"yarn start"} language="bash" />
        </div>
        <p className="text-center">
          Visit <a href="http://localhost:3003" rel="noFollow" target="_blank">http://localhost:3003</a> to see the boilerplate in action!
        </p>
        <p className="mt-4">
          <i>For more detailed instruction please visit <Link to="/docs">docs</Link></i>
        </p>
        {supportsServiceWorker() && (
          <Fold>
            <div className="card text-white bg-info mb-3">
              <div className="card-header"><small>This is a </small> Progressive Web Application!</div>
              <div className="card-body">
                <h4 className="card-title">Add us to "Home screen"</h4>
                <p className="card-text">You might be interested to learn that current site is build using ReactPWA.
                  Why don't you add us to your Home Screen when prompted.
                  We are sure you will love the experience.</p>
              </div>
            </div>
          </Fold>
        )}
      </div>
    );
  }
}
