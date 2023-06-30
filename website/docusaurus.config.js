module.exports={
  "title": "Messenger Style",
  "tagline": "Styles for Deskpro Messenger",
  "url": "https://deskpro.github.io",
  "baseUrl": "/messenger-style/",
  "organizationName": "Deskpro",
  "projectName": "messenger-style",
  "scripts": [
    "https://buttons.github.io/buttons.js",
    "/messenger-style/js/code-collapsed-toggle.js"
  ],
  "stylesheets": [
    "https://fonts.googleapis.com/css?family=Rubik:400,400i,700,700i"
  ],
  "favicon": "img/favicon.png",
  "customFields": {
    "separateCss": [
      "../dist/style.css"
    ],
    "markdownPlugins": [
      null
    ]
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": "../website/sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [
    [
      "@docusaurus/plugin-client-redirects",
      {
        "fromExtensions": [
          "html"
        ]
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "Messenger Style",
      "logo": {
        "src": "img/dp-logo-white.svg"
      },
      "items": [
        {
          "to": "docs/intro",
          "label": "Docs",
          "position": "left"
        }
      ]
    },
    "image": "img/dp-logo.svg",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2023 Deskpro",
      "logo": {
        "src": "img/dp-logo.svg"
      }
    }
  }
}