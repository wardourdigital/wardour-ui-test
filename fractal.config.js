'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'GMAT Focus - Hubspot UI Kit');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Change the template extension */
const nunj = require("@frctl/nunjucks")({
  env: {
    // Nunjucks environment opts: https://mozilla.github.io/nunjucks/api.html#configure
  },
  filters: {
    // filter-name: function filterFunc(){}
  },
  globals: {
    resize_image_url: function (image, width, height, length) {
        return image;
    },
    get_asset_url: function (path) {

        let newPath = path.replace("/ncl-policy-impact-theme/", "/static/")
        return newPath;

    }
  },
  extensions: {
    // extension-name: function extensionFunc(){}
  }
});

fractal.components.engine(
  nunj
);

/* set as the default template engine for components */
fractal.components.set('ext', '.html');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/dist');

/* Ensures that files are served up from the dist folder with out blocking the Web UI */
fractal.web.set('static.mount', '/static');

/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/build');

fractal.web.set('server.syncOptions', {
    open: true,
    browser: ['firefox'],
    files: "src/**/*.{js/css}"
});