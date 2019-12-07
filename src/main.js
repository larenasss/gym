import "./styles/main.pcss";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "../node_modules/jquery/dist/jquery";

import "../node_modules/slick-carousel/slick/slick";


import "./scripts/slider"
import "./scripts/animate"
import "./scripts/form"

