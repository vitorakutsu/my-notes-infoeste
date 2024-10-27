import {useNavigation} from '@react-navigation/native';
import React, {ReactElement, useState} from 'react';
import {SCREEN_DEFINITIONS} from '~/app/screen-definitions';
import * as Yup from 'yup';
import Toast from 'react-native-toast-message';
import NewPasswordLayout from './new-password.layout';
import {authRegister, RequestAuthRegister} from '~/api/user';

const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .matches(/[a-z]/, 'A senha deve conter ao menos uma letra minúscula')
    .matches(/[A-Z]/, 'A senha deve conter ao menos uma letra maiúscula')
    .matches(/[0-9]/, 'A senha deve conter ao menos um número')
    .matches(/[@$!%*?&]/, 'A senha deve conter ao menos um caractere especial')
    .required('Senha é obrigatória'),
  confirm: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas não coincidem')
    .required('Confirmação de senha é obrigatória'),
});

interface IData {
  password: string;
  confirm: string;
}

const INITIAL_STATE_DATA: IData = {
  password: '',
  confirm: '',
};

const NewPassword = ({route}: {route: any}): ReactElement => {
  const navigation = useNavigation();
  const email = route.params.email;
  const name = route.params.name;

  const [data, setData] = useState<IData>(INITIAL_STATE_DATA);
  const [error, setError] = useState<IData>(INITIAL_STATE_DATA);

  const handleData = (name: string, value: string) => {
    setError({...error, [name]: ''});
    setData({...data, [name]: value});
  };

  const onSubmit = async () => {
    try {
      await passwordSchema.validate(data, {abortEarly: false});

      const request: RequestAuthRegister = {
        email,
        name,
        password: data.password,
      };

      await authRegister(request)
        .then(() => {
          Toast.show({
            type: 'success',
            text1: 'Cadastro finalizado!',
            text2: 'Agora você já pode acessar suas anotações',
          });

          //@ts-expect-error
          navigation.navigate(SCREEN_DEFINITIONS.newLogin, {email});
        })
        .catch(() =>
          Toast.show({
            type: 'error',
            text1: 'Algo deu errado!',
            text2: 'Tente novamente mais tarde',
            visibilityTime: 5000,
          }),
        );
    } catch (e) {
      const error = e as Yup.ValidationError;
      const errors: IData = {password: '', confirm: ''};
      error.inner.forEach(err => {
        if (err.path === 'password') {
          errors.password = err.message;
        } else if (err.path === 'confirm') {
          errors.confirm = err.message;
        }
      });
      setError(errors);
    }
  };

  return (
    <NewPasswordLayout
      data={data}
      error={error}
      handleData={handleData}
      onSubmit={onSubmit}
    />
  );
};

export default NewPassword;
