/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + "docs/" + (language ? language + "/" : "") + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + "/" : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("initial-setup.html", this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl("plugins.html", this.props.language)}>
              Plugins
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl("users.html", this.props.language)}>
              User Showcase
            </a>
            <a href="https://gitter.im/react-pwa/Lobby">Project Chat</a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.baseUrl + "blog"}>Blog</a>
            <a href={this.props.config.repoUrl}>GitHub</a>
            <a
              className="github-button"
              href="https://github.com/Atyantik/react-pwa"
              data-show-count="true"
              aria-label="Star Atyantik/react-pwa on GitHub"
            >
              Star
            </a>
          </div>
        </section>
        <section className="text-center supporter">
          <h4>Giants supporting us</h4>
          <a className="w-150" href="https://www.atyantik.com" rel="nofollow noopener noreferrer" target="_blank">
            <img
              src={this.props.config.baseUrl + "img/supporters/atyantik.svg"}
              alt="Atyantik Technologies Private Limited"
            />
          </a>
          <a className="w-75" href="https://www.digitalocean.com" rel="nofollow noopener noreferrer" target="_blank">
            <img
              src={this.props.config.baseUrl + "img/supporters/digitalocean.svg"}
              alt="DigitalOcean"
            />
          </a>
          <a href="https://www.eventerprise.com/" rel="nofollow noopener noreferrer" target="_blank">
            <img
              src={this.props.config.baseUrl + "img/supporters/eventerprise.svg"}
              alt="Eventerprise"
            />
          </a>
          <a href="https://www.browserstack.com/" rel="nofollow noopener noreferrer" target="_blank">
            <img
              src={this.props.config.baseUrl + "img/supporters/browserstack.svg"}
              alt="BrowserStack"
            />
          </a>
          <a href="https://www.navicat.com/" rel="nofollow noopener noreferrer" target="_blank">
            <img
              src={this.props.config.baseUrl + "img/supporters/navicat.png"}
              alt="Navicat"
            />
          </a>
        </section>
        <section className="text-center">
          <a className={"btn btn-outline-pearl mr-2"} href={this.pageUrl("supporters.html", this.props.language)}>Support ReactPWA</a>
        </section>
        <br />
        <section className="copyright">
          <a
            href={"https://www.atyantik.com"}
            target="_blank"
            rel="noreferrer noopener nofollow"
            style={{color: "#FFF"}}
          >
            {this.props.config.copyright}
          </a>
        </section>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Check that service workers are registered
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `
          }}
        />
      </footer>
    );
  }
}

module.exports = Footer;
