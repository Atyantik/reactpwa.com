import React, { Component } from "react";
import Link from "../../../core/components/link";
import Transition from "../../../core/components/transition/transition";
import * as styles from "./styles.scss";

export default class DocsLayout extends Component {
  
  render() {
    return (
      <div className="row">
        <div className="col col-md-3 p-2 mt-2">
          <strong className="text-muted">Navigate to:</strong>
          <ul className={`list-unstyled ${styles["padded-nav"]}`}>
            <li>
              <Link animateSection="docs-content" to="/docs">Getting Started - Hello World!</Link>
            </li>
            <li>
              <Link animateSection="docs-content" to="/docs/configuring-pwa">Configuring PWA</Link>
            </li>
            <li>
              <Link animateSection="docs-content" to="/docs/customizing-loader">Customizing Loader</Link>
            </li>
            <li>
              <Link animateSection="docs-content" to="/docs/working-with-css">Working with CSS</Link>
            </li>
            <li>
              <Link animateSection="docs-content" to="/docs/error-pages">Error Pages</Link>
            </li>
            <li>
              <Link animateSection="docs-content" to="/docs/overriding-core-components">Overriding Core Components</Link>
            </li>
            <li>
              <Link animateSection="docs-content" to="/docs/pages-routing">Pages and routing</Link>
            </li>
            <li>
              <Link animateSection="docs-content" to="/docs/external-script-libraries">Using external script libraries</Link>
            </li>
            <li>
              <Link animateSection="docs-content" to="/docs/page-transitions">Page Transitions</Link>
            </li>
            <li>
              <Link animateSection="docs-content" to="/docs/ssr-server-side-rendering">Server Side Rendering (SSR)</Link>
            </li>
            <li>
              <Link animateSection="docs-content" to="/docs/configuring-redux">Configuring Redux</Link>
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
