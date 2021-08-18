import { lazy } from 'react';

const pages: any = {
  APP_MAIN: {
    path: '/main',
    component: lazy(() => import('./demo/Demo')),
  },
  APP_DEMO: {
    path: '/cart',
    component: lazy(() => import('./demo/Demo2')),
  },
};

export default pages;
