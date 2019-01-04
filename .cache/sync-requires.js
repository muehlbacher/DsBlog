const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("C:\\Users\\muehl\\Desktop\\HeroBlogNew\\DsBlog\\node_modules\\gatsby-plugin-offline\\app-shell.js"))),
  "component---src-templates-category-template-js": hot(preferDefault(require("C:\\Users\\muehl\\Desktop\\HeroBlogNew\\DsBlog\\src\\templates\\CategoryTemplate.js"))),
  "component---src-templates-post-template-js": hot(preferDefault(require("C:\\Users\\muehl\\Desktop\\HeroBlogNew\\DsBlog\\src\\templates\\PostTemplate.js"))),
  "component---src-templates-page-template-js": hot(preferDefault(require("C:\\Users\\muehl\\Desktop\\HeroBlogNew\\DsBlog\\src\\templates\\PageTemplate.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\muehl\\Desktop\\HeroBlogNew\\DsBlog\\src\\pages\\404.js"))),
  "component---src-pages-category-js": hot(preferDefault(require("C:\\Users\\muehl\\Desktop\\HeroBlogNew\\DsBlog\\src\\pages\\category.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\Users\\muehl\\Desktop\\HeroBlogNew\\DsBlog\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\muehl\\Desktop\\HeroBlogNew\\DsBlog\\src\\pages\\index.js")))
}

