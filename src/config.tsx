import { setConfig } from '@pxp-ui/core';

const config: any = {
  backendVersion: 'v2',
  backendRestVersion: '2',
  applicationName: 'Pxp UI',
  privateInitRoute: 'main',
  notFoundRoute: '/login',
  defaultTheme: 'KPLIAN',
  accountManagement: {
    recoverPassword: true,
    socialLogin: false,
    signup: false,
    termsOfService: '/',
  },
};

export default setConfig(config);
