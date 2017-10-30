/**
 * Created by Yash Thakur
 * Date: 30/10/17
 * Time: 12:45 PM
 */

import React, { Component } from "react";

export default class UniversalRouting extends Component {
  render() {
    return (
      <article>
        <header>
          <h1 className="mt-4">Isomorphic/Universal Routing</h1>
          <hr/>
        </header>
        <section>
          <h3 className="mt-4">What is Universality?</h3>
          <p>
            Universality, sometimes called “isomorphism”, refers to ability to run nearly the same code
            on both client and server – a concept that was born out of the trials and tribulations in
            the past of creating applications on the web, availability of new technologies,
            and the ever-growing complexity of developing and maintaining these applications.
          </p>
        </section>
      </article>
    );
  }
}