/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {App} from './src/app/app';
import {name as appName} from './app.json';
import 'react-native-vector-icons/MaterialCommunityIcons';

AppRegistry.registerComponent(appName, () => App);
