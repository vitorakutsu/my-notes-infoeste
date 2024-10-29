import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {client} from '~/api/client/client';
import {SCREEN_DEFINITIONS} from '~/app/screen-definitions';
import Logout from '~/assets/icons/logout.svg';
import User from '~/assets/icons/user.svg';
import {clearUser} from '~/redux/user';
import {
  Circle,
  Container,
  Left,
  Name,
  Row,
  TextWrapper,
  Welcome,
} from './homer-header.styles';
import {ReduxState} from '~/redux/types';

export const HomeHeader = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state: ReduxState) => state.user.user);

  const handleLogout = async () => {
    client.defaults.headers.Authorization = '';
    dispatch(clearUser());

    Toast.show({
      type: 'success',
      text1: 'Até logo!',
      text2: 'Você foi desconectado',
    });

    // @ts-expect-error
    navigation.navigate(SCREEN_DEFINITIONS.document);
  };

  return (
    <Container>
      <Row>
        <Left>
          <Circle>
            <User width={32} height={32} color="#000" onPress={handleLogout} />
          </Circle>
          <TextWrapper>
            <Welcome>Bem-vindo,</Welcome>
            <Name>{user.name}</Name>
          </TextWrapper>
        </Left>

        <Logout width={32} height={32} color="#000" onPress={handleLogout} />
      </Row>
    </Container>
  );
};
