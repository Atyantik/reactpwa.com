import DocsLayout from "../app/components/docs/layout";
import Docs from "../app/components/docs/getting-started/docs";
import PendingDocs from "../app/components/docs/pending";
import DefaultLayout from "../app/components/layout";
import GettingStartedImage from "../app/components/docs/getting-started/Get Started - Docs.jpg";

const routes = [
  {
    abstract: true,
    component: DocsLayout,
    layout: DefaultLayout,
    routes: [
      {
        path: "/docs",
        exact: true,
        component: Docs,
        seo: {
          title: "Getting Started - Hello World | React PWA",
          description: "Get started with your own Progressive web application in the most simplest way.",
          keywords: "pwa,progressive web application,hello world, react,getting started,tutorials",
          image: GettingStartedImage,
          type: "article"
        }
      },
      {
        path: "/docs/configuring-pwa",
        exact: true,
        component: PendingDocs,
        props: {
          title: "Configuring PWA"
        },
        seo: {
          title: "Getting Started - Hello World | React PWA",
          description: "Get started with your own Progressive web application in the most simplest way.",
          keywords: "pwa,progressive web application,hello world, react,getting started,tutorials",
          image: GettingStartedImage,
          type: "article"
        }
      },
      {
        path: "/docs/customizing-loader",
        exact: true,
        component: PendingDocs,
        props: {
          title: "Customizing Loader"
        },
        seo: {
          title: "Getting Started - Hello World | React PWA",
          description: "Get started with your own Progressive web application in the most simplest way.",
          keywords: "pwa,progressive web application,hello world, react,getting started,tutorials",
          image: GettingStartedImage,
          type: "article"
        }
      },
      {
        path: "/docs/working-with-css",
        exact: true,
        component: PendingDocs,
        props: {
          title: "Working with CSS"
        },
        seo: {
          title: "Getting Started - Hello World | React PWA",
          description: "Get started with your own Progressive web application in the most simplest way.",
          keywords: "pwa,progressive web application,hello world, react,getting started,tutorials",
          image: GettingStartedImage,
          type: "article"
        }
      },
      {
        path: "/docs/error-pages",
        exact: true,
        component: PendingDocs,
        props: {
          title: "Error Pages"
        },
        seo: {
          title: "Getting Started - Hello World | React PWA",
          description: "Get started with your own Progressive web application in the most simplest way.",
          keywords: "pwa,progressive web application,hello world, react,getting started,tutorials",
          image: GettingStartedImage,
          type: "article"
        }
      },
      {
        path: "/docs/overriding-core-components",
        exact: true,
        component: PendingDocs,
        props: {
          title: "Overriding Core Components"
        },
        seo: {
          title: "Getting Started - Hello World | React PWA",
          description: "Get started with your own Progressive web application in the most simplest way.",
          keywords: "pwa,progressive web application,hello world, react,getting started,tutorials",
          image: GettingStartedImage,
          type: "article"
        }
      },
      {
        path: "/docs/pages-routing",
        exact: true,
        component: PendingDocs,
        props: {
          title: "Pages & Routing"
        },
        seo: {
          title: "Getting Started - Hello World | React PWA",
          description: "Get started with your own Progressive web application in the most simplest way.",
          keywords: "pwa,progressive web application,hello world, react,getting started,tutorials",
          image: GettingStartedImage,
          type: "article"
        }
      },
      {
        path: "/docs/external-script-libraries",
        exact: true,
        component: PendingDocs,
        props: {
          title: "Using external script libraries"
        },
        seo: {
          title: "Getting Started - Hello World | React PWA",
          description: "Get started with your own Progressive web application in the most simplest way.",
          keywords: "pwa,progressive web application,hello world, react,getting started,tutorials",
          image: GettingStartedImage,
          type: "article"
        }
      },
      {
        path: "/docs/page-transitions",
        exact: true,
        component: PendingDocs,
        props: {
          title: "Page transitions"
        },
        seo: {
          title: "Getting Started - Hello World | React PWA",
          description: "Get started with your own Progressive web application in the most simplest way.",
          keywords: "pwa,progressive web application,hello world, react,getting started,tutorials",
          image: GettingStartedImage,
          type: "article"
        }
      },
      {
        path: "/docs/ssr-server-side-rendering",
        exact: true,
        component: PendingDocs,
        props: {
          title: "SSR - Server side rendering"
        },
        seo: {
          title: "Getting Started - Hello World | React PWA",
          description: "Get started with your own Progressive web application in the most simplest way.",
          keywords: "pwa,progressive web application,hello world, react,getting started,tutorials",
          image: GettingStartedImage,
          type: "article"
        }
      },
      {
        path: "/docs/configuring-redux",
        exact: true,
        component: PendingDocs,
        props: {
          title: "Configuring Redux"
        },
        seo: {
          title: "Getting Started - Hello World | React PWA",
          description: "Get started with your own Progressive web application in the most simplest way.",
          keywords: "pwa,progressive web application,hello world, react,getting started,tutorials",
          image: GettingStartedImage,
          type: "article"
        }
      },
      
    ]
  }
];

export default routes;
