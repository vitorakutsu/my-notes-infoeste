import * as React from 'react';
import { Screen } from '~/components/screen/screen';
import {
  ButtonContained,
  ButtonContainedLabel,
  ErrorText,
  Subtitle,
  TextInput,
  TitleRegular,
} from './new-password.styles';

interface IData {
  password: string;
  confirm: string;
}

interface INewPasswordLayout {
  data: IData;
  error: IData;
  handleData: (name: string, value: string) => void;
  onSubmit: () => void;
}

const NewPasswordLayout = ({
  data,
  error,
  handleData,
  onSubmit,
}: INewPasswordLayout): React.ReactElement => {
  const renderTitle = () => (
    <TitleRegular>Falta só mais um passo para concluirmos!</TitleRegular>
  );

  const renderSubtitle = () => (
    <Subtitle>
      Digite uma senha que contenha letras , números e caracteres especiais
    </Subtitle>
  );

  const renderMainContent = () => (
    <>
      <TextInput
        value={data.password}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        onChange={e => handleData('password', e.nativeEvent.text)}
        error={!!error.password}
      />
      {error.password && <ErrorText>{error.password}</ErrorText>}
      <TextInput
        value={data.confirm}
        placeholder="Confirme sua senha"
        secureTextEntry={true}
        onChange={e => handleData('confirm', e.nativeEvent.text)}
        error={!!error.confirm}
      />
      {error.confirm && <ErrorText>{error.confirm}</ErrorText>}
      <ButtonContained onPress={onSubmit}>
        <ButtonContainedLabel>Finalizar</ButtonContainedLabel>
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

export default NewPasswordLayout;
