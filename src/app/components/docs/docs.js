import React, { Component } from "react";
import { Link } from "react-router-dom";
import Prism from "../prism";

export default class Home extends Component {
  
  render() {
    return (
      <div className="row">
        <div className="col col-md-3 p-2 mt-2">
          <ul className="list-unstyled">
            <li>
              <Link to="/docs" className="text-lead">Docs</Link>
              <p>
                We are busy writing documentation for the boilerplate. Till then please visit our <a href="https://github.com/Atyantik/react-pwa/wiki" rel="noFollow" target="_blank">wiki</a> for limited examples.
              </p>
              <div className="alert alert-warning mt-2">We are looking for contributors and queries to create useful documentation. Please contribute.</div>
              {/*<ul>
                <li><Link to="/docs/getting-started">Getting started</Link></li>
              </ul>*/}
            </li>
          </ul>
        </div>
        <div className="col col-md-9">
          <h1 className="mt-4">Features</h1>
          <p>We have worked on many features. Checkout the list below:</p>
  
          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title">Progressive Web Application</h4>
              <h6 className="card-subtitle mb-2 text-muted">Well progressive is the future.<small>(Enabled in production mode)</small></h6>
              <p className="card-text">
                We generate manifest.json thus giving ability to users to add it to home screen as standalone application.
                We have pwa-srcset loader that helps you load your site faster for different view-port devices.
                We support srcset with WebP out of the box.
              </p>
            </div>
          </div>
          
          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title">Code splitting</h4>
              <h6 className="card-subtitle mb-2 text-muted">Enabled in production mode</h6>
              <p className="card-text">
                The very difficulty faced when developing enterprise application is code splitting.
                We don't need everything in single JS file.
                Why not create individual JS files for respective module/page!
                We make it really easy here to just create a page that return array of routes.
                Code is split and loaded automatically when the respective route is called.
              </p>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title">Hot Reloading</h4>
              <h6 className="card-subtitle mb-2 text-muted">Enabled in production mode</h6>
              <p className="card-text">
                Development is lot easy with hot reloading.
                Make changes and the code is auto/hot-reloaded in the browser.
                And we have not missed "sass".
                Preserver application state when you update in underlying code.
              </p>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title">Next Generation JavaScript</h4>
              <h6 className="card-subtitle mb-2 text-muted">ES6/7 Compatible</h6>
              <p className="card-text">
                Using babel we support the next generation JavaScript syntax including Object/Array destructuring,
                arrow functions, JSX syntax and more...
              </p>
            </div>
          </div>
  
          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title">React Router</h4>
              <p className="card-text">
                We are using the most accepted React router for routing the application.
                Add your favorite /about, /contact, /dashboard pages easily.
              </p>
            </div>
          </div>
  
          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title">Offline support</h4>
              <h6 className="card-subtitle mb-2 text-muted">Enabled in production mode</h6>
              <p className="card-text">
                Yes your application will be offline available.
                Run without internet. Pretty cool huh! Well all thanks to service workers.
              </p>
            </div>
          </div>
  
          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title">Server side rendering</h4>
              <h6 className="card-subtitle mb-2 text-muted">Enabled in production mode</h6>
              <p className="card-text">
                The best way to get your application SEO-ed is enable Server side rendering i.e.
                Universal applications.
              </p>
            </div>
          </div>
  
          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title">SEO</h4>
              <h6 className="card-subtitle mb-2 text-muted">Enabled in production mode</h6>
              <p className="card-text">
                Our customized routes enable creating meta tags to create Twitter, Google+, Linkedin, Facebook cards.
                We know how important SEO is to an application.
              </p>
            </div>
          </div>
  
          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title">Content Folding</h4>
              <h6 className="card-subtitle mb-2 text-muted">Enabled in production mode</h6>
              <p className="card-text">
                We do not just worry about SEO. We provide tools to optimize SEO.
                Show only relevant data when loading via server. Fold your content to save bytes.
              </p>
            </div>
          </div>
  
          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title">Page caching</h4>
              <h6 className="card-subtitle mb-2 text-muted">Enabled in production mode</h6>
              <p className="card-text">
                Well now you can cache a page in SSR. Pretty simple. just add cache option to your route
              </p>
              <Prism code={"{ cache: { enable: true, duration: 10000}}"} />
              <p className="card-text">
                this helps you cache page when rendered via server. Why increase server load when page is static and cacheable!
              </p>
            </div>
          </div>
  
          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title">API caching</h4>
              <h6 className="card-subtitle mb-2 text-muted">Enabled in production mode</h6>
              <p className="card-text">
                Wait what? Why do you need to cache API ? With service worker & cache mechanisms, even opaque response can be cached (no kidding!).
              </p>
              <Prism code={"api.fetch(\"https://api.com/endpoint\", { swcache: 10 /* seconds */})"} />
            </div>
          </div>
  
          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title">Webpack</h4>
              <h6 className="card-subtitle mb-2 text-muted">For experts</h6>
              <p className="card-text">
                We use the latest webpack for best results. All the magic is executed with help of webpack including file loading,
                image optimizations, SCSS loading, code splitting etc.
              </p>
            </div>
          </div>
  
          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title">Pre loading</h4>
              <p className="card-text">
                Pre loading CSS & JS for non-ServiceWorker compatible browsers. Yes we do give a damn about old browsers.
              </p>
            </div>
          </div>
  
          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title">WebP Supported</h4>
              <p className="card-text">
                Make your application super fast with WebP support. Read more about it at
                <a href="https://developers.google.com/speed/webp/" target="_blank" rel="noFollow">https://developers.google.com/speed/webp/</a>
              </p>
            </div>
          </div>
  
          <div className="card mt-4">
            <div className="card-body">
              <h4 className="card-title">Image optimizations</h4>
              <p className="card-text">
                You can use any typeof Image during development and we will make sure that images get optimized before a build is generated.
                This takes time but its totally worth it. Best user experience is what we all developers are looking for.
                <i>We are using imagemin plugins to optimize SVG, JPEG, GIF & PNG</i>
              </p>
            </div>
          </div>
  
          <div className="card mt-4">
            <div className="card-body">
              
              <h4 className="card-title">HSTS Supported</h4>
              <h6 className="card-subtitle mb-2 text-muted">Using HTTPS ?</h6>
              <p className="card-text">
                HSTS is enabled default for your secure sites. Options to define maxAge and preload of HSTS, all with very simple configuration.
              </p>
            </div>
          </div>
          
          <div className="alert alert-warning mt-5">We are looking for contributors and queries to create useful documentation. Please contribute.</div>
        </div>
      </div>
    );
  }
}
