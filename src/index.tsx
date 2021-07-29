import React from 'react';
import ReactDOM from 'react-dom';
import { PxpUiApp, configurePxpClient, Pxp, initI18n } from '@pxp-ui/core';
import LoadingScreen from '@pxp-ui/components/LoadingScreen';
import configFile from './config';
import './index.scss';

const config: any = configFile;
Pxp.setConfig(config);
const i18n = initI18n(config);
let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    hasRendered = true;
    ReactDOM.render(<PxpUiApp i18n={i18n} />, document.getElementById('root'));
  }
};

ReactDOM.render(<LoadingScreen />, document.getElementById('root'));
configurePxpClient(Pxp, renderApp);
