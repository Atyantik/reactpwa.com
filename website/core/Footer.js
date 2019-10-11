/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + "docs/" + (language ? language + "/" : "") + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + "/" : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("initial-setup.html", this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl("plugins.html", this.props.language)}>
              Plugins
            </a>
            <a href={this.pageUrl("examples.html", this.props.language)}>
              Examples
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl("users.html", this.props.language)}>
              User Showcase
            </a>
            <a href="https://gitter.im/react-pwa/Lobby">Project Chat</a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.baseUrl + "blog"}>Blog</a>
            <a href={this.props.config.repoUrl}>GitHub</a>
            <a
              className="github-button"
              href="https://github.com/Atyantik/react-pwa"
              data-show-count="true"
              aria-label="Star Atyantik/react-pwa on GitHub"
            >
              Star
            </a>
          </div>
        </section>
        <section className="text-center supporter">
          <h4>Giants supporting us</h4>
          <a className="w-150" href="https://www.atyantik.com" rel="nofollow noopener noreferrer" target="_blank">
            <img
              src={this.props.config.baseUrl + "img/supporters/atyantik.svg"}
              alt="Atyantik Technologies Private Limited"
            />
          </a>
          <a className="w-75" href="https://www.digitalocean.com" rel="nofollow noopener noreferrer" target="_blank">
            <img
              src={this.props.config.baseUrl + "img/supporters/digitalocean.svg"}
              alt="DigitalOcean"
            />
          </a>
          <a href="https://www.eventerprise.com/" rel="nofollow noopener noreferrer" target="_blank">
            <img
              src={this.props.config.baseUrl + "img/supporters/eventerprise.svg"}
              alt="Eventerprise"
            />
          </a>
          <a href="https://www.browserstack.com/" rel="nofollow noopener noreferrer" target="_blank">
            <img
              src={this.props.config.baseUrl + "img/supporters/browserstack.svg"}
              alt="BrowserStack"
            />
          </a>
          <a href="https://www.navicat.com/" rel="nofollow noopener noreferrer" target="_blank">
            <img
              src={this.props.config.baseUrl + "img/supporters/navicat.png"}
              alt="Navicat"
            />
          </a>
        </section>
        <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            #mc_embed_signup{background:transparent; clear:left; color: #fff;width:100%; padding: 10px;}
            #mc_embed_signup input.email {
              padding: 18px;
              margin-right: 2px;
              margin-bottom: 36px;
            }
            .btn-outline-pearl:hover {
              color: #17a2b8;
              cursor: pointer;
            }
            `
          }}
        />
        <div id="mc_embed_signup">
        <form action="https://atyantik.us17.list-manage.com/subscribe/post?u=06e9b0b8eb37d698885257f1b&amp;id=6fceb6ccf4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
              <label htmlFor="mce-EMAIL">Subscribe to our mailing list</label>
              <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="enter your email address" required />
              <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_06e9b0b8eb37d698885257f1b_6fceb6ccf4" tabIndex="-1" /></div>
              <div className="clear"> &nbsp;<input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-outline-pearl ml-2" /></div>
            </div>
        </form>
        </div>
        <section className="text-center">
          <a className={"btn btn-outline-pearl mr-2"} href={this.pageUrl("supporters.html", this.props.language)}>Support ReactPWA</a>
        </section>
        <br />
        <section className="copyright">
          <a
            href={"https://www.atyantik.com"}
            target="_blank"
            rel="noreferrer noopener nofollow"
            style={{color: "#FFF"}}
          >
            {this.props.config.copyright}
          </a>
        </section>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Check that service workers are registered
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `
          }}
        />
        <script
          src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js"
          data-dojo-config="usePlainJson: true, isDebug: false"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us17.list-manage.com","uuid":"06e9b0b8eb37d698885257f1b","lid":"6fceb6ccf4","uniqueMethods":true}) })
            `
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
if (typeof _bsa !== 'undefined' && _bsa) {
  _bsa.init('custom', 'CE7DVKQ7', 'placement:reactpwacom',
  {
    target: '.custom-slant',
    template: \`
<a href="##link##" class="native-banner">
  <div class="native-sponsor-container">
    <div class="native-sponsor">
      <div class="native-label">Sponsor</div>
      <div class="native-company">##company##</div>
    </div>
  </div>
  <div class="native-main">
    <img class="native-logo" src="##logo##" style="background-color: ##backgroundColor##">
    <div class="native-text">
      <div class="native-tagline">##tagline##</div>
      <div class="native-description">##description##</div>
      <div class="native-cta">##callToAction##</div>
    </div>
  </div>
</a>
    \`
      }
    );
}
})();`
          }}
        />
        <script async type="text/javascript" data-src="//cdn.carbonads.com/carbon.js?serve=CK7DL2QN&placement=wwwreactpwacom" id="_carbonads_js_pre_clone" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var navElement = document.querySelector("#docsNav .toc .navWrapper .navGroups");
            if (navElement) {
               
               var navGroup = document.createElement("div");
               navGroup.style = "display:inline-block";
               navGroup.setAttribute("class", "navGroup");
               
               var carbonAdsScriptBkp = document.getElementById("_carbonads_js_pre_clone");
               if (carbonAdsScriptBkp) {
                 var carbonAdsScript = carbonAdsScriptBkp.cloneNode(true);
                 carbonAdsScript.id = "_carbonads_js";
                 carbonAdsScript.src = carbonAdsScript.getAttribute("data-src");
                 navGroup.appendChild(carbonAdsScript);
               }
               navElement.appendChild(navGroup);
            }
            `
          }}
        />
      </footer>
    );
  }
}

module.exports = Footer;
