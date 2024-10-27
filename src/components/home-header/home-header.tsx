import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {SCREEN_DEFINITIONS} from '~/app/screen-definitions';
import {clearUser} from '~/redux/user';
import {client} from '~/services/axios-client';
import {
  Circle,
  Container,
  Left,
  Name,
  Row,
  TextWrapper,
  Welcome,
} from './homer-header.styles';

export const HomeHeader = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
            <Icon name="home" size={32} color="#000" />
          </Circle>
          <TextWrapper>
            <Welcome>Bem-vindo,</Welcome>
            <Name>Usuário</Name>
          </TextWrapper>
        </Left>

        <Icon
          name="logout"
          size={32}
          color="#000"
          onPress={handleLogout}
          style={{
            cursor: 'pointer',
          }}
        />
      </Row>
    </Container>
  );
};
