/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

const Supporters = require(process.cwd() + "/core/Supporters.js");

class Help extends React.Component {
  render() {
    return (
      <div className="docMainWrapper wrapper">
        <Container className="documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Get Involved</h1>
            </header>
            <p>There are many ways to contribute to ReactPWA, and many of them do not involve writing any code. Here are few ideas to get started:</p>
            <ul>
              <li>
                Simply start using ReactPWA. Go through the Getting Started guide. Does everything work as expected? If not, we are always looking for improvements. Let us know by opening an issue.
              </li>
              <li>
                Look through the open issues. Provide workarounds, ask for clarification, or suggest labels. Help triage issues.
              </li>
              <li>
                If you find an issue you would like to fix, open a pull request. Issues tagged as Good first issue are a good place to get started.
              </li>
              <li>
                Read through the docs. If you find anything that is confusing or can be improved, you can make edits by clicking &quot;Edit&quot; at the top of most docs.
              </li>
              <li>
                Take a look at the features requested by others in the community and consider opening a pull request if you see something you want to work on.
              </li>
            </ul>
            <p>Contributions are very welcome. If you think you need help planning your contribution, please ping us on Twitter at <a href={"https://twitter.com/atyantik_tech"} target={"_blank"}>@atyantik_tech</a> and let us know you are looking for a bit of help.</p>
            <div className="text-center mt-5" >
              <a href="https://opencollective.com/react-pwa/donate" target="_blank" rel="nofollow noopener noreferrer">
                <img src="https://opencollective.com/react-pwa/contribute/button@2x.png?color=blue" width="300" />
              </a>
            </div>
            <Supporters />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;
