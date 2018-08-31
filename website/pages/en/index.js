/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
const siteConfig = require(process.cwd() + "/siteConfig.js");

function imgUrl(img) {
  return siteConfig.baseUrl + "img/" + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + "docs/" + (language ? language + "/" : "") + `${doc}${".html"}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + "/" : "") + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self",
};

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || "";
    return (
      <div className="hero">
        <div className="hero-left"><h1 className="d-sm-none">React PWA</h1>
          <p className="h4 text-uppercase">
            <small>Create</small><br />
            <strong>Upgradable</strong><br />
            <strong>SEO Friendly</strong><br />
            <strong>Progressive web applications</strong>
          </p>
        </div>
        <div className="m-auto">
          <div className="atom-animate">
            <div><div/></div>
            <div><div/></div>
            <div><div/></div>
            <div><div/></div>
          </div>
        </div>
        <div className="hero-right">
          <p>Its fast and developer friendly<br />
            <strong>And more importantly its <i>UPGRADABLE!</i></strong><br />
            <a className="btn btn-pearl mt-3" href={docUrl("feature-pwa", language)}>View all features</a>
          </p>
        </div>
        <div className="col-sm-12 text-center mt-5">
          <a
            className="btn btn-outline-pearl mr-2"
            href="https://github.com/Atyantik/react-pwa/archive/master.zip"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Download and get started
          </a>
        </div>
      </div>
    );
  }
}

const GettingStarted = function() {
  return (
    <div className="mw-1000 m-auto">
      <h4 className="text-center">Lets get started with 3 simple steps:</h4>
      <ol>
        <li>
          <strong>Cloning the repository:</strong>
          <small className="text-muted">
            The command below will create a folder &quot;react-pwa&quot; relative to your current directory
          </small>
          <pre>
            <code className="hljs css languages- bash">
              git clone https://github.com/Atyantik/react-pwa.git
            </code>
          </pre>
        </li>
        <li>
          <strong>Moving to the repository &amp; installing dependencies:</strong>
          <pre>
            <code className="hljs css languages- bash">
              cd react-pwa &amp;&amp; npm install
            </code>
          </pre>
        </li>
        <li>
          <strong>Running the boilerplate:</strong>
          <pre>
            <code className="hljs css languages- bash">npm start</code>
                </pre>
        </li>
      </ol>
      <p className="text-center">
        Visit&nbsp;
        <a
          href="http://localhost:3003"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          http://localhost:3003
        </a>
        &nbsp;to see the boilerplate in action!
      </p>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || "";

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <GettingStarted />
        </div>
      </div>
    );
  }
}

module.exports = Index;
