import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {ReactElement} from 'react';
import {WithContextProviders} from '~/providers/with-context-providers';
import {routes} from './routes';
import {SCREEN_DEFINITIONS} from './screen-definitions';
import {Provider} from 'react-redux';
import store from '~/redux/store';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

export const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <WithContextProviders>
        <Stack.Navigator initialRouteName={SCREEN_DEFINITIONS.document}>
          {routes.map(({name, component, options}) => (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
              options={options}
            />
          ))}
        </Stack.Navigator>
      </WithContextProviders>
      <Toast />
    </Provider>
  );
};
