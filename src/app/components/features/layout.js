/**
 * Created by Yash Thakur
 * Date: 27/10/17
 * Time: 4:50 PM
 */

import React, { Component } from "react";
import Disqus from "../disqus";
import Transition from "../../../core/components/transition/transition";
import SidebarLinks from "./sidebar-links";
import * as styles from "./features.scss";

export default class FeaturesLayout extends Component {
  render() {
    return (
      <div className="row">
        <div className="col col-md-3 p-2 mt-2">
          <strong className="text-muted">Navigate to:</strong>
          <SidebarLinks/>
          <p>We are busy writing documentation for the boilerplate. Thank you for your patience.</p>
          <div className="alert alert-warning mt-2">We are looking for contributors and queries to create useful documentation. Please contribute.</div>
        </div>
        <div  className="col col-md-9">
          <Transition
            sectionName={"features-content"}
            className={styles["animator"]}
            onEnterClassName={styles["fade-in"]}
            onExitClassName={styles["fade-out"]}
          >
            <div className="mt-4">
              {this.props.children}
            </div>
          </Transition>
          <div className="alert alert-warning mt-5">We are looking for contributors and queries to create useful documentation. Please contribute.</div>
          <div className="mt-4">
            <Disqus />
          </div>
        </div>
      </div>

    );
  }
}