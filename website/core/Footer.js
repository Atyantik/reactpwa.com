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
                width="66"
                height="58"
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
      </footer>
    );
  }
}

module.exports = Footer;
