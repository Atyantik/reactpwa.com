import React, { Component } from "react";
import Prism from "../../prism/prism";

export default class Docs extends Component {
  
  render() {
    return (
      <article>
        <header>
          <h1>Configuring PWA</h1>
          <hr />
        </header>
        <section>
          <header>
            <h2>Web App Manifest</h2>
          </header>
          <div>
            <p>
              The web app manifest provides information about an application (such as name, author, icon, and description) in a JSON text file.
              The purpose of the manifest is to install web applications to the homescreen of a device, providing users with quicker access and
              a richer experience.
              <br />
              Web app manifest are part of Progressive Web Applications
            </p>
            <p>
              Below is an example manifest.json file.
            </p>
            <Prism code={`{
	"name": "React PWA",
	"short_name": "ReactPWA",
	"dir": "ltr",
	"lang": "en-US",
	"orientation": "any",
	"start_url": "/",
	"background_color": "#17a2b8",
	"theme_color": "#17a2b8",
	"display": "standalone",
	"description": "A highly scalable, Progressive Web Application foundation with the best Developer Experience.",
	"icons": [{
		"src": "/build/images/resources/images/pwa/ec1fa5f40405b10b364c2ee8e6eeffce.png",
		"sizes": "72x72"
	}, {
		"src": "/build/images/resources/images/pwa/3f9898f6af26a26506fd2108a89a7eb1.png",
		"sizes": "96x96"
	}, {
		"src": "/build/images/resources/images/pwa/6fbcdbb3daf975a48ae2c9beaae06377.png",
		"sizes": "128x128"
	}, {
		"src": "/build/images/resources/images/pwa/f4d19f8b22528eb9c178eb8815727b13.png",
		"sizes": "144x144"
	}, {
		"src": "/build/images/resources/images/pwa/32ec86bcd8f6ee28451a4d76d53a7002.png",
		"sizes": "152x152"
	}, {
		"src": "/build/images/resources/images/pwa/715d8373bad8c370c2922f09e90f4224.png",
		"sizes": "192x192"
	}, {
		"src": "/build/images/resources/images/pwa/2fe409d86d099f7eb0f88d35abf1013a.png",
		"sizes": "384x384"
	}, {
		"src": "/build/images/resources/images/pwa/3a8136a792cfe525ff82f7488883fa1d.png",
		"sizes": "512x512"
	}]
}`} />
            <p>This will create a directory "react-pwa" in your current folder</p>
          </div>
  
          <div>
            <p>We are using yarn for examples but you can use npm instead as well.</p>
            <Prism code={"cd react-pwa && yarn install"}/>
          </div>
          
          <div className="alert alert-danger mt-4">
            <strong>The PYTHON error: </strong>
            <Prism
              code={"Can't find Python executable \"python\", you can set the PYTHON env variable."}
              language={"bash"}
            />
            <p>You will need to install <strong>node-gyp</strong></p>
            <div className="alert alert-danger">
              <p>If you're using Windows you can now install all node-gyp dependencies with single command (NOTE: Run As Admin in Windows PowerShell):</p>
              <Prism code="yarn global add windows-build-tools" language={"bash"} />
            </div>
            <Prism code="yarn global add node-gyp" language={"bash"} />
            <p>Please refer to detailed docs at <a target="_blank" href="https://github.com/nodejs/node-gyp" rel="nofollow noopener">https://github.com/nodejs/node-gyp</a></p>
          </div>
          
          <div>
            <p>Once the installation is completed, you can now test if the example app is working</p>
            <Prism code={"yarn start"} language={"bash"} />
            <p>Once the compilation is completed by webpack dev server it should output the below: </p>
            <Prism code={`cross-env NODE_ENV=development nodemon --exec babel-node --watch ./src/server.js --watch ./src/client.js --watch ./src/core --watch ./webpack ./src/server.js
[nodemon] 1.12.1
[nodemon] to restart at any time, enter \`rs\`
[nodemon] watching: ./src/server.js ./src/client.js /home/tirthbodawala/workspace/reactpwa.com/src/core/**/* /home/tirthbodawala/workspace/reactpwa.com/webpack/**/*
[nodemon] starting \`babel-node ./src/server.js\`
Creating bundle with Webpack dev server.. Please wait..
Listening at http://0.0.0.0:3003
`} language={"bash"}/>
            <p>You can access your local application at <i>http://localhost:3003</i></p>
          </div>
          <hr />
          <section>
            <header>
              <h3>Removing the example application</h3>
              <small>Before removing, make sure you have closed the running instance of example app</small>
            </header>
            <div>
              <ul className="list-unstyled">
                <li>1) Remove everything from <i>`src/app/components`</i>.</li>
                <li>2) Remove all files from <i>`src/pages`</i> folder.</li>
                <li>
                  3) Edit <i>`src/routes.js`</i> and remove all the previous routes.
                  <Prism code={`import { configureRoutes } from "./core/utils/bundler";

// routes

export default configureRoutes([
]);`} />
                </li>
              </ul>
            </div>
          </section>
          <hr />
          <section>
            <header>
              <h3>Creating Home Component & Route</h3>
            </header>
            <div>
              <ul className="list-unstyled">
                <li>
                  1) As simple as creating React Component create Home component in file `src/app/components/home.js`
                  <Prism code={`import React, { Component } from "react";

export default class Home extends Component {
  
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}`} />
                </li>
                <li>
                  2) Create new page in `src/pages/home.js`
                  <Prism code={`import Home from "../app/components/home";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  }
];
export default routes;
`} />
                </li>
                <li>
                  3) Edit <i>`src/routes.js`</i> and add route for home page.
                  <Prism code={`import { configureRoutes } from "./core/utils/bundler";

// routes
import * as Home from "./pages/home";

export default configureRoutes([
  Home
]);`} />
                  <p className="alert alert-info">
                    <strong>NOTE:</strong> Please maintain the import syntax as above, because we add bundleKey to the route via route-loader.
                  </p>
                </li>
              </ul>
              <p>That's all start your application with <strong>yarn start</strong> and you will have your <strong>Hello world!</strong> home page ready.</p>
            </div>
          </section>
        </section>
      </article>
    );
  }
}
