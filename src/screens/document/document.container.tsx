import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {authExists, RequestAuthExists} from '~/api/user';
import {DocumentLayout} from './document.layout';
import {SCREEN_DEFINITIONS} from '~/app/screen-definitions';
import * as Yup from 'yup';
import Toast from 'react-native-toast-message';
import {client} from '~/services/axios-client';

const emailSchema = Yup.string()
  .email('Formato de email inválido')
  .required('Email é obrigatório');

export const Document = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');

  useEffect(() => {
    if (client.defaults.headers.Authorization) {
      // @ts-expect-error
      navigation.navigate(SCREEN_DEFINITIONS.notes);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleData = (value: string) => {
    setEmail(value);
  };

  const validateEmail = async (value: string) => {
    try {
      await emailSchema.validate(value);

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
    const isValidEmail = await validateEmail(email);
    if (!isValidEmail) {
      return;
    }

    try {
      const request: RequestAuthExists = {email};
      const response = await authExists(request);

      if (response) {
        // @ts-expect-error
        navigation.navigate(SCREEN_DEFINITIONS.newLogin, {email});
      } else {
        // @ts-expect-error
        navigation.navigate(SCREEN_DEFINITIONS.newName, {email});
      }
    } catch (error) {}
  };

  return (
    <DocumentLayout email={email} handleData={handleData} onSubmit={onSubmit} />
  );
};
