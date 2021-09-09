/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import LandingPage from './pages/screens/landing';
// import MainLoginPage from './src/components/units/screens/login/MainLogin.container';

AppRegistry.registerComponent(appName, () => LandingPage);
