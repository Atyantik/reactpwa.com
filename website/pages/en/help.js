/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + "/siteConfig.js");

function docUrl(doc, language) {
  return siteConfig.baseUrl + "docs/" + (language ? language + "/" : "") + doc;
}

class Help extends React.Component {
  render() {
    let language = this.props.language || "";
    const supportLinks = [
      {
        content: `Learn more about using the [documentation on this site.](${docUrl(
          "initial-setup.html",
          language
        )})`,
        title: "Browse Docs",
      },
      {
        content: "You can join us on [Gitter](https://gitter.im/react-pwa/Lobby). Ask us questions about the documentation and project.",
        title: "Join the community",
      },
      {
        content: "Find out what's new with this project",
        title: "Stay up to date",
      },
      {
        title: "Github",
        content: "At our [GitHub repo](https://github.com/Atyantik/react-pwa) Browse and submit [issues](https://github.com/Atyantik/react-pwa/issues) or [pull requests](https://github.com/Atyantik/react-pwa/pulls) for bugs you find or any new features you may want implemented. Be sure to also check out our [contributing information](https://github.com/Atyantik/reactpwa.com/blob/master/CONTRIBUTING.md).",
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Need help?</h1>
            </header>
            <p>If you need help, you can use any one of the mechanisms provided below.</p>
            <GridBlock contents={supportLinks} layout="fourColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

Help.title = "Get Help with ReactPWA";

module.exports = Help;
