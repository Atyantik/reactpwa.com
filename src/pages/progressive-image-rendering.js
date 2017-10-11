import ProgresiveImage from "../app/components/progressive-image";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/progressive-image-rendering",
    exact: true,
    component: ProgresiveImage,
    layout: DefaultLayout,
  }
];
export default routes;
