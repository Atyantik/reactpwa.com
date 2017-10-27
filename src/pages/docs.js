import Docs from "../app/components/docs/getting-started/docs";
import DocsLayout from "../app/components/docs/layout";
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
      }
    ]
  }
];
export default routes;
