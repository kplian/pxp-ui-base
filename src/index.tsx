import React from 'react';
import ReactDOM from 'react-dom';
import { PxpUiApp, configurePxpClient, Pxp, initI18n } from '@pxp-ui/core';
import LoadingScreen from '@pxp-ui/components/LoadingScreen';
import pagesTranslations from '@pxp-ui/common/modules/translate/pages';
import configFile from './config';
import { menu } from './cereals-ui/index';
import LoginContainer from './cereals-ui/containers/LoginContainer';
import pages from './cereals-ui/pages';
import './index.scss';

const config: any = configFile;
Pxp.setConfig(config);
const i18n = initI18n(config);
let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    hasRendered = true;
    ReactDOM.render(
      <PxpUiApp
        LoginContainer={LoginContainer}
        pages={{ ...pages, ...pagesTranslations }}
        i18n={i18n}
      />,
      document.getElementById('root'),
    );
  }
};

// const menu: any = [
//   {
//     uiId: 2,
//     code: 'PXPLAN',
//     text: 'CustomMenu Working',
//     description: 'Language',
//     component: 'EXA_MasterDetailExample',
//     order: null,
//     icon: null,
//     parentId: 1,
//     subsystem: 'PXP',
//     children: [],
//     type: 'leaf',
//   },
// ];
const customMenu: any = menu;
ReactDOM.render(<LoadingScreen />, document.getElementById('root'));
configurePxpClient(Pxp, renderApp, customMenu);
