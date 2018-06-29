/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.
const extLink = require("remarkable-extlink");

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: "User1",
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: "/img/logo.svg",
    infoLink: "https://www.facebook.com",
    pinned: true,
  },
];

const siteConfig = {
  title: "ReactPWA" /* title for your website */,
  tagline: "A boilerplate built on top of PawJS",
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
    {doc: "initial-setup", label: "Docs"},
    {doc: "feature-pwa", label: "Features"},
    {blog: true, label: "Blog"},
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
  footerIcon: "img/logo.svg",
  favicon: "img/favicon/favicon.ico",

  /* colors for website */
  colors: {
    primaryColor: "#17a2b8",
    secondaryColor: "#202020",
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    "Copyright © " +
    new Date().getFullYear() +
    " Atyantik Technologies Private Limited",

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "dracula",
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ["https://buttons.github.io/buttons.js"],

  /* On page navigation for the current documentation page */
  onPageNav: "separate",

  /* Open Graph and Twitter card images */
  ogImage: "img/docusaurus.png",
  twitterImage: "img/docusaurus.png",

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: "https://github.com/atyantik/react-pwa",
};

module.exports = siteConfig;
