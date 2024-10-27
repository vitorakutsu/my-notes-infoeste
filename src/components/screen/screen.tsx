import React, {ReactElement, ReactNode} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {LoginImage, LogoImage} from '~/assets/register-images';
import {autoSingleStyle} from '~/utils/auto-single-style';
import {
  Children,
  Container,
  HomeChildren,
  LoginWrapper,
  Logo,
  Regular,
  Row,
  ScrollView,
  Stylized,
  TopImage,
} from './screen.styles';
import {HomeHeader} from '../home-header/home-header';

export enum ScreenTypes {
  HOME = 'home',
  NEW_LOGIN = 'new_login',
}

interface IScreen {
  type?: ScreenTypes;
  children: ReactNode;
}

export const Screen = ({
  type = ScreenTypes.NEW_LOGIN,
  children,
}: IScreen): ReactElement => {
  const renderLogo = () => (
    <Row>
      <Logo source={LogoImage} />
      {autoSingleStyle('my*notes*', '*', Regular, Stylized)}
    </Row>
  );

  const renderLoginScreen = () => (
    <LoginWrapper>
      <ScrollView>
        {renderLogo()}
        <TopImage source={LoginImage} />
        <Children>{children}</Children>
      </ScrollView>
    </LoginWrapper>
  );

  const renderHomeScreen = () => {
    return (
      <>
        <HomeHeader />
        <HomeChildren>
          <ScrollView>{children}</ScrollView>
        </HomeChildren>
      </>
    );
  };

  const renderContent = (): ReactElement => {
    const types: {[key: string]: ReactElement} = {
      [ScreenTypes.NEW_LOGIN]: renderLoginScreen(),
      [ScreenTypes.HOME]: renderHomeScreen(),
    };

    return types[type];
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}>
        {renderContent()}
      </KeyboardAvoidingView>
    </Container>
  );
};
