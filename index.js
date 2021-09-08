/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import MainLoginPage from './src/components/units/screens/login/MainLogin.container';

AppRegistry.registerComponent(appName, () => MainLoginPage);
