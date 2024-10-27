import React, {ReactElement} from 'react';
import {Screen} from '~/components/screen/screen';
import {
  ButtonContained,
  ButtonContainedLabel,
  Subtitle,
  TextInput,
  TitleRegular,
} from './new-login.styles';

interface INewLoginLayout {
  email: string;
  password: string;
  onSubmit: () => void;
  handleData: (value: string) => void;
}

export const NewLoginLayout = ({
  email,
  password,
  handleData,
  onSubmit,
}: INewLoginLayout): ReactElement => {
  const renderTitle = () => (
    <TitleRegular>Que ótimo tê-lo de volta!</TitleRegular>
  );

  const renderSubtitle = () => (
    <Subtitle>Digite sua senha para acessar suas anotações</Subtitle>
  );

  const renderMainContent = () => (
    <>
      <TextInput value={email} disabled />
      <TextInput
        value={password}
        secureTextEntry={true}
        onChange={e => handleData(e.nativeEvent.text)}
        placeholder="Digite sua senha"
      />
      <ButtonContained onPress={onSubmit}>
        <ButtonContainedLabel>Entrar</ButtonContainedLabel>
      </ButtonContained>
    </>
  );

  return (
    <Screen>
      {renderTitle()}
      {renderSubtitle()}
      {renderMainContent()}
    </Screen>
  );
};
