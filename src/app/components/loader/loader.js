import React, { Component } from "react";
import { connect } from "react-redux";
import { SCREEN_STATE_LOADING } from "./action";
import * as styles from "./loader.scss";
import Header from "../header";
import Footer from "../footer";
import Transition from "../../../core/components/transition";

@connect( state => {
  return {
    screenState: state.screen.state
  };
})
export default class Loader extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#f6f6f6"}}>
        <Header />
        {
          this.props.screenState !== SCREEN_STATE_LOADING &&
          (
            <div className={styles["whole-page"]}>
              <div className={styles["escapingBall"]}>
                <div className={styles["escapingBallG"]} />
              </div>
            </div>
          )
        }
        <Transition
          className={styles["animator"]}
          onEnterClassName={styles["fade-in"]}
          onExitClassName={styles["fade-out"]}
        >
          {this.props.children || null}
        </Transition>
        <Footer />
      </div>
    );
  }
}