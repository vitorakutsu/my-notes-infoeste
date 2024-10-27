import {NavigationContainer} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {PaperProvider} from 'react-native-paper';

interface IWithContextProviders {
  children: ReactNode;
}

export const WithContextProviders = ({children}: IWithContextProviders) => {
  return (
    <PaperProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </PaperProvider>
  );
};
