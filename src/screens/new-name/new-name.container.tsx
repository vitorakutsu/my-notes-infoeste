import {useNavigation} from '@react-navigation/native';
import React, {ReactElement, useState} from 'react';
import {NewNameLayout} from './new-name.layout';
import {SCREEN_DEFINITIONS} from '~/app/screen-definitions';
import * as Yup from 'yup';
import Toast from 'react-native-toast-message';

const nameSchema = Yup.string().required('Nome é obrigatório');

export const NewName = ({route}: {route: any}): ReactElement => {
  const navigation = useNavigation();
  const email = route.params.email;

  const [name, setName] = useState('');
  const handleData = (value: string) => {
    setName(value);
  };

  const validateName = async (value: string) => {
    try {
      await nameSchema.validate(value);
      return true;
    } catch (err) {
      const error = err as Yup.ValidationError;

      Toast.show({
        type: 'error',
        text1: 'Erro!',
        text2: error.message,
      });
      return false;
    }
  };

  const onSubmit = async () => {
    const isValidName = await validateName(name);
    if (!isValidName) {
      return;
    } else {
      // @ts-expect-error
      navigation.navigate(SCREEN_DEFINITIONS.newPassword, {email, name});
    }
  };

  return (
    <NewNameLayout
      name={name}
      handleData={handleData}
      onSubmit={onSubmit}
    />
  );
};
