export default {
  server: {
    port: 3003,
  },
  hsts: {
    enabled: true,
    // mageAge: Must be at least 18 weeks to be approved by Google, but we are setting it to 1 year
    maxAge: 31536000,
    // Must be enabled to be approved by Google
    includeSubDomains: true,
    preload: false,
  },
  pwa: {
    "name": "React PWA",
    "short_name": "ReactPWA",
    // Possible values ltr(left to right)/rtl(right to left)
    "dir": "ltr",
    
    // language: Default en-US
    "lang": "en-US",
    
    // Orientation of web-app possible:
    // any, natural, landscape, landscape-primary, landscape-secondary, portrait, portrait-primary, portrait-secondary
    "orientation": "any",
    "start_url": "/",
    "background_color": "#fff",
    "theme_color": "#fff",
    "display": "standalone",
    "description": "A highly scalable, Progressive Web Application foundation with the best Developer Experience."
  },
  seo: {
    title: "ReactPWA | Progressive web application with ReactJS",
    site_name: "ReactPWA",
    description: "A highly scalable, Progressive Web Application foundation with the best Developer Experience.",
    twitter: {
      site: "@atyantik_tech",
      creator: "@tirthbodawala"
    },
    facebook: {
      admins: [
        "1501220844",
        "765904161",
      ],
    },
    meta: [
      {
        name:"viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      {
        name:"theme-color",
        content: "#fff"
      },
      {
        charSet: "utf-8",
      },
      {
        httpEquiv: "x-ua-compatible",
        content: "ie=edge",
      }
    ],
  },
};