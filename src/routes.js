import { configureRoutes } from "react-pwa/src/utils/bundler";

// routes
import * as Home from "./pages/home";
import * as Docs from "./pages/docs";
import * as Features from "./pages/features";

export default configureRoutes([
  Home,
  Docs,
  Features
]);