import { configureRoutes } from "./core/utils/bundler";

// routes
import * as Home from "./pages/home";
import * as Docs from "./pages/docs";

export default configureRoutes([
  Home,
  Docs
]);