import Home from "../app/components/home";
import FullwidthLayout from "../app/components/layout/fullwidth";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    layout: FullwidthLayout,
  }
];
export default routes;
