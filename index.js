// required to be at top of entry file
// per https://reactnavigation.org/docs/en/getting-started.html#install-into-an-existing-project
import 'react-native-gesture-handler';

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
