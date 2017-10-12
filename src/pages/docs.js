import Docs from "../app/components/docs";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/docs",
    exact: true,
    component: Docs,
    layout: DefaultLayout,
    seo: {
      title: "ReactPWA | Documentation"
    }
  }
];
export default routes;
