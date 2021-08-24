import { lazy } from 'react';

const pages: any = {
  APP_MAIN: {
    path: '/main',
    component: lazy(() => import('./examples/Demo')),
  },
  APP_DEMO: {
    path: '/cart',
    component: lazy(() => import('./examples/Demo2')),
  },
};

export default pages;
