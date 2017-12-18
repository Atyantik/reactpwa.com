import { configureRoutes } from "pawjs/src/utils/bundler";

// routes
import * as Home from "./pages/home";
import * as Docs from "./pages/docs";
import * as Features from "./pages/features";
import * as Blog from "./pages/blog";

export default configureRoutes([
  Home,
  Docs,
  Features,
  Blog
]);