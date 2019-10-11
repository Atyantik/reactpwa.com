/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// site configuration options.
const extLink = require("remarkable-extlink");

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: "Eventerprise",
    // You will need to prepend the image path with your baseUrl
    image: "https://www.eventerprise.com/page/wp-content/uploads/2018/03/4a425d1b9754081a358b88bbd88089d6.svg",
    infoLink: "https://www.eventerprise.com",
    pinned: true,
  },
  {
    caption: "Email-Extractor",
    image: "/img/users/email-extractor.png",
    infoLink: "https://www.emailextractor.online",
    pinned: true,
  },
  {
    caption: "RentHobo",
    // You will need to prepend the image path with your baseUrl
    image: "/img/users/renthobo.png",
    infoLink: "https://www.renthobo.com",
    pinned: true,
  }
];

const siteConfig = {
  title: "ReactPWA" /* title for your website */,
  disableHeaderTitle: false,
  tagline: "An extendable boilerplate built on top of PawJS",
  url: "https://www.reactpwa.com" /* your website url */,
  baseUrl: "/" /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "react-pwa",
  organizationName: "Atyantik Technologies Private Limited",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: "index", label: "Docs"},
    {doc: "features", label: "Features"},
    {blog: true, label: "Blog"},
    {page: "examples", label: "Examples"},
    {page: "help", label: "Help"},
    { search: true },
    // Determines language drop down position among links
    { languages: true }
  ],
  markdownPlugins: [
    function(md) {
      md.use(extLink, {
        host: siteConfig.url
      })
    }
  ],

  editUrl: "https://github.com/Atyantik/reactpwa.com/edit/master/docs/",

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: "img/logo.svg",
  footerIcon: "img/white-logo.png",
  favicon: "img/favicon/favicon.ico",

  /** Google analytics **/
  gaTrackingId: "UA-108804791-1",

  /* colors for website */
  colors: {
    primaryColor: "#17a2b8",
    secondaryColor: "#128293",
  },

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    "Copyright © " +
    new Date().getFullYear() +
    " Atyantik Technologies Private Limited",

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "dracula",
  },
  manifest: "manifest.json",

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    //"https://buttons.github.io/buttons.js",
    //"https://opencollective.com/react-pwa/contribute/button.js",
    "//m.servedby-buysellads.com/monetization.js"
  ],

  /* On page navigation for the current documentation page */
  onPageNav: "separate",

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: "https://github.com/atyantik/react-pwa",

  /* Open Graph and Twitter card images */
  facebookAppId: "136557516937157",
  facebookComments: true,
  twitter: "true",
  twitterUsername: "atyantik_tech",
  twitterImage: "img/pwa/icon-512x512.png",
  ogImage: "img/pwa/icon-512x512.png",
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
  algolia: {
    apiKey: "47e9fd29dcff1c57cb8300322797fe74",
    indexName: "reactpwa",
    algoliaOptions: {} // Optional, if provided by Algolia
  }
  // algolia: {
  //   apiKey: "626e03f900a93b0dc06a820f11bdb98c",
  //   indexName: "reactpwa.com",
  //   appId: "0D0WDCNF8X"
  // }
};

module.exports = siteConfig;
