import _ from "lodash";
import React, {Component} from "react";
import {generateStringHash, loadScript} from "../../../core/utils/utils";

export default class Disqus extends Component {
  async loadDisqus() {
    let DISQUS = _.get(window, "DISQUS", false);
    if (DISQUS) return Promise.resolve(DISQUS);
    await loadScript("https://reactpwa.disqus.com/embed.js");
    DISQUS = _.get(window, "DISQUS", false);
    return Promise.resolve(DISQUS);
  }
  reloadWidget() {
    this.loadDisqus().then(DISQUS => {
      DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = generateStringHash("window.location.url", "DISQUS");
          this.page.url = window.location.url;
        }
      });
    });
  }
  componentWillReceiveProps() {
    this.reloadWidget();
  }
  componentDidMount() {
    this.reloadWidget();
  }
  render() {
    return <div id="disqus_thread" />;
  }
}