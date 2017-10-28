import React, { Component } from "react";
import Link from "../../../core/components/link";
import Transition from "../../../core/components/transition/transition";
import * as styles from "./styles.scss";

export default class DocsLayout extends Component {
  
  render() {
    return (
      <div className="row">
        <div className="col col-md-3 p-2 mt-2">
          <ul className="list-unstyled">
            <li>
              <Link animateSection="docs-content" to="/docs" className="text-lead">Getting Started - Hello World!</Link>
            </li>
          </ul>
          <p>
            We are busy writing documentation for the boilerplate. Till then please visit our <a href="https://github.com/Atyantik/react-pwa/wiki" rel="noFollow" target="_blank">wiki</a> for limited examples.
          </p>
          <div className="alert alert-warning mt-2">We are looking for contributors and queries to create useful documentation. Please contribute.</div>
        </div>
        <div  className="col col-md-9">
          <Transition
            sectionName={"docs-content"}
            className={styles["animator"]}
            onEnterClassName={styles["fade-in"]}
            onExitClassName={styles["fade-out"]}
          >
            <div className="mt-4">
              {this.props.children}
            </div>
          </Transition>
          <div className="alert alert-warning mt-5">We are looking for contributors and queries to create useful documentation. Please contribute.</div>
        </div>
      </div>
    );
  }
}
