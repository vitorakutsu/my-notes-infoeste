import React, {useState} from 'react';
import {authLogin} from '../../api/user';
import {NewLoginLayout} from './new-login.layout';
import {client} from '~/api/client/client';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_DEFINITIONS} from '~/app/screen-definitions';
import {useDispatch} from 'react-redux';
import {setUser} from '~/redux/user';

export const NewLogin = ({route}: {route: any}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const email = route.params.email;

  const handleData = (value: string) => setPassword(value);

  const onSubmit = async () => {
    try {
      const request = {email, password};
      await authLogin(request)
        .then(data => {
          dispatch(setUser({email, name: data.user_name}));
          client.defaults.headers.Authorization = `Bearer ${data.access_token}`;

          // @ts-expect-error
          navigation.navigate(SCREEN_DEFINITIONS.notes);
        })
        .catch(() =>
          Toast.show({
            type: 'error',
            text1: 'Algo deu errado!',
            text2: 'Verifique suas credenciais',
            visibilityTime: 5000,
          }),
        );
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Algo deu errado!',
        text2: 'Tente novamente mais tarde',
        visibilityTime: 3000,
      });
    }
  };

  return (
    <NewLoginLayout
      password={password}
      email={email}
      onSubmit={onSubmit}
      handleData={handleData}
    />
  );
};
