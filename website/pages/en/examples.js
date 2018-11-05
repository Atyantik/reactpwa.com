/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

class Examples extends React.Component {
  render() {
    return (
      <div className="docMainWrapper wrapper">
        <Container className="documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Example implementation of ReactPWA</h1>
            </header>
            <p>
              We are trying to implement as many examples for ReactPWA to help others
              {" "}
              understand the potential and extendability of this framework.
              <br />
              If you have anything to share with us, please drop an email at <a href="mailto:contact@atyantik.com">contact@atyantik.com</a>
            </p>
            
            <h2>List of examples with source code implementing ReactPWA</h2>
            <ul>
              <li>
                <strong>Redux</strong>
                <br />
                <div>
                  Love redux and would like to implement it with SSR?
                  {" "}
                  Well this example repo demonstrate the usage of Redux with ReactPWA.
                  <br />
                  <strong>Demo URL: </strong>
                  <a
                    href="https://www.reactpwa.com/examples/redux/"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    https://www.reactpwa.com/examples/redux/
                  </a>
                  <br />
                  <strong>Repo URL: </strong>
                  <a
                    href="https://github.com/Atyantik/example-pawjs-redux"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    https://github.com/Atyantik/example-pawjs-redux
                  </a>
                </div>
                <br />
              </li>
              <li>
                <strong>Redux Saga</strong>
                <br />
                <div>
                  Dealing with side effects in Redux apps?
                  {" "}
                  Deal it with Redux Saga the easy way!
                  <br />
                  <strong>Demo URL: </strong>
                  <a
                    href="https://www.reactpwa.com/examples/redux-saga/"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    https://www.reactpwa.com/examples/redux-saga/
                  </a>
                  <br />
                  <strong>Repo URL: </strong>
                  <a
                    href="https://github.com/Atyantik/example-pawjs-redux-saga"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    https://github.com/Atyantik/example-pawjs-redux-saga
                  </a>
                </div>
                <br />
              </li>
              <li>
                <strong>Semantic UI</strong>
                <br />
                <div>
                  Love Semantic UI? And want to implement it with your own customization?
                  {" "}
                  Check out this integration with of ReactPWA with Semantic-UI.
                  <br />
                  <strong>Demo URL: </strong>
                  <a
                    href="https://www.reactpwa.com/examples/semantic-ui/"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    https://www.reactpwa.com/examples/semantic-ui/
                  </a>
                  <br />
                  <strong>Repo URL: </strong>
                  <a
                    href="https://github.com/Atyantik/example-pawjs-semantic-ui"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    https://github.com/Atyantik/example-pawjs-semantic-ui
                  </a>
                </div>
                <br />
              </li>
              <li>
                <strong>Tailwind CSS</strong>
                <br />
                <div>
                  Tailwind CSS is pretty simple to implement as external CSS, but that is not how we utilize it in
                  {" "}
                  big and real projects. This integration gives you ability to override it&quot;s default variables as well.
                  <br />
                  <strong>Demo URL: </strong>
                  <a
                    href="https://www.reactpwa.com/examples/tailwind/"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    https://www.reactpwa.com/examples/tailwind/
                  </a>
                  <br />
                  <strong>Repo URL: </strong>
                  <a
                    href="https://github.com/Atyantik/example-pawjs-tailwind"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    https://github.com/Atyantik/example-pawjs-tailwind
                  </a>
                </div>
                <br />
              </li>
              <li>
                <strong>Material UI</strong>
                <br />
                <div>
                  We love Material UI, and we believe many out there are fans too.
                  {" "}
                  The below urls can help you implement it with proper SSR with ReactPWA
                  <br />
                  <strong>Demo URL: </strong>
                  <a
                    href="https://www.reactpwa.com/examples/material-ui/"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    https://www.reactpwa.com/examples/material-ui/
                  </a>
                  <br />
                  <strong>Repo URL: </strong>
                  <a
                    href="https://github.com/Atyantik/example-pawjs-material-ui"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    https://github.com/Atyantik/example-pawjs-material-ui
                  </a>
                </div>
                <br />
              </li>
              <li>
                <strong>Ant Design</strong>
                <br />
                <div>
                  Ant Design is simple and beautiful.
                  {" "}
                  The below urls can help you implement it with properly with ReactPWA
                  <br />
                  <strong>Demo URL: </strong>
                  <a
                    href="https://www.reactpwa.com/examples/ant-design/"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    https://www.reactpwa.com/examples/ant-design/
                  </a>
                  <br />
                  <strong>Repo URL: </strong>
                  <a
                    href="https://github.com/Atyantik/example-pawjs-ant-design"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    https://github.com/Atyantik/example-pawjs-ant-design
                  </a>
                </div>
                <br />
              </li>
            </ul>
            <h3>Share it with us</h3>
            <p>Have you implemented something awesome with ReactPWA? Share it with us and we will list it out here!</p>
            <p>Contributions are very welcome. If you think you need help planning your contribution, please ping us on Twitter at <a href={"https://twitter.com/atyantik_tech"} target={"_blank"}>@atyantik_tech</a> and let us know you are looking for a bit of help.</p>
            <br />
            <br />
          </div>
        </Container>
      </div>
    );
  }
}

Examples.title = "Examples";

module.exports = Examples;
