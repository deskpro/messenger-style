import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/messenger-style/blog',
    component: ComponentCreator('/messenger-style/blog', 'af1'),
    exact: true
  },
  {
    path: '/messenger-style/blog/2018/07/23/init',
    component: ComponentCreator('/messenger-style/blog/2018/07/23/init', '65b'),
    exact: true
  },
  {
    path: '/messenger-style/blog/archive',
    component: ComponentCreator('/messenger-style/blog/archive', 'f67'),
    exact: true
  },
  {
    path: '/messenger-style/docs',
    component: ComponentCreator('/messenger-style/docs', 'de6'),
    routes: [
      {
        path: '/messenger-style/docs/colors',
        component: ComponentCreator('/messenger-style/docs/colors', '3c6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/messenger-style/docs/components/dp-Level',
        component: ComponentCreator('/messenger-style/docs/components/dp-Level', 'ce2'),
        exact: true
      },
      {
        path: '/messenger-style/docs/components/dpmsg-AvatarHeadsList',
        component: ComponentCreator('/messenger-style/docs/components/dpmsg-AvatarHeadsList', '04f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/messenger-style/docs/components/dpmsg-Block',
        component: ComponentCreator('/messenger-style/docs/components/dpmsg-Block', 'cd8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/messenger-style/docs/components/dpmsg-BookTime',
        component: ComponentCreator('/messenger-style/docs/components/dpmsg-BookTime', '27b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/messenger-style/docs/components/dpmsg-Greetings',
        component: ComponentCreator('/messenger-style/docs/components/dpmsg-Greetings', '587'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/messenger-style/docs/components/dpmsg-Inputs',
        component: ComponentCreator('/messenger-style/docs/components/dpmsg-Inputs', 'dba'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/messenger-style/docs/components/dpmsg-Level',
        component: ComponentCreator('/messenger-style/docs/components/dpmsg-Level', 'df8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/messenger-style/docs/components/dpmsg-MessageBubble',
        component: ComponentCreator('/messenger-style/docs/components/dpmsg-MessageBubble', 'bec'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/messenger-style/docs/components/dpmsg-MessagePrompt',
        component: ComponentCreator('/messenger-style/docs/components/dpmsg-MessagePrompt', '1ff'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/messenger-style/docs/components/dpmsg-Screen',
        component: ComponentCreator('/messenger-style/docs/components/dpmsg-Screen', 'f56'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/messenger-style/docs/components/dpmsg-TriggerButtons',
        component: ComponentCreator('/messenger-style/docs/components/dpmsg-TriggerButtons', 'fdd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/messenger-style/docs/elements/dpmsg-Button',
        component: ComponentCreator('/messenger-style/docs/elements/dpmsg-Button', '095'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/messenger-style/docs/elements/dpmsg-Content',
        component: ComponentCreator('/messenger-style/docs/elements/dpmsg-Content', 'f2a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/messenger-style/docs/elements/dpmsg-Icon',
        component: ComponentCreator('/messenger-style/docs/elements/dpmsg-Icon', 'c22'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/messenger-style/docs/intro',
        component: ComponentCreator('/messenger-style/docs/intro', 'e35'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/messenger-style/',
    component: ComponentCreator('/messenger-style/', '1cd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
